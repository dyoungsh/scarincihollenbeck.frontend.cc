/* eslint-disable consistent-return */
import { CLOUDINARY_BASE_URL, SITE_TITLE } from 'utils/constants';
import { formatPageImageToCloudinaryUrl } from 'utils/helpers';

require('dotenv').config();
const mysql = require('mysql2/promise');
const { formatDate } = require('../../utils/helpers');

export const getPostContent = async (slug, category) => {
  const connection = await mysql.createConnection(process.env.MYSQL_CONNECTION_URL);

  // post, post meta, post categories, and category name
  const postContentQuery = `SELECT ID, post_author, post_date, post_title, post_content FROM ${process.env.POST_TABLE} WHERE post_name= ? AND post_status = 'publish'`;
  const postMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.POSTMETA_TABLE} WHERE post_id = ?`;
  const postCategoriesQuery = `SELECT term_taxonomy_id FROM ${process.env.TERM_RELATIONSHIPS_TABLE} WHERE object_id = ?`;
  const currentCategoryFromSlugQuery = `SELECT term_id FROM ${process.env.TERMS_TABLE} WHERE slug = ?`;
  const currentTagsFromIdQuery = `SELECT term_id, name FROM ${process.env.TERMS_TABLE} WHERE term_id = ?`;
  const getTagsFromIdQuery = `SELECT term_id, taxonomy, parent FROM ${process.env.TERMS_TAXONOMY} WHERE term_taxonomy_id = ?`;
  const postAuthorQuery = `SELECT ID, user_url, display_name FROM ${process.env.AUTHORS_TABLE} WHERE user_nicename = ?`;
  const postAuthorMetaQuery = `SELECT meta_key, meta_value FROM ${process.env.AUTHORSMETA_TABLE} WHERE user_id = ?`;
  const sortedAuthorQuery = `SELECT meta_value FROM ${process.env.POSTMETA_TABLE} WHERE post_id = ? AND meta_key='author_display_order'`;
  const postTitleById = `SELECT post_title, post_name, guid FROM ${process.env.POST_TABLE} WHERE ID= ?`;
  const [post] = await connection.execute(postContentQuery, [slug]);

  if (post.length <= 0) {
    return {
      status: 404,
    };
  }

  const [postMeta] = await connection.execute(postMetaQuery, [post[0].ID]);
  const [tagsMeta] = await connection.execute(postCategoriesQuery, [post[0].ID]);
  const [catSlug] = await connection.execute(currentCategoryFromSlugQuery, [category]);

  const getFieldData = (arr, field) => {
    const check = arr.filter((post) => post.meta_key === field);

    if (check.length > 0) {
      return check[0].meta_value;
    }

    return '';
  };

  const getFeaturedImageCaption = (content) => {
    const featuredImageCaption = content.match(/<\s*figcaption(?:.*)>(.*)<\/figcaption>/g);

    if (featuredImageCaption) {
      return featuredImageCaption[0];
    }
    return '';
  };

  const checkH2Tags = (content) => {
    const subTitle = content.match(/<h2(?:.*)>(.*?)<\/h2>/g);

    if (subTitle) {
      return subTitle[0];
    }

    return '';
  };

  const modPostContent = (content) => {
    const fullImage = content.match(/<figure(?:.*)>(.*?)<\/figure>/g);
    const subTitle = content.match(/<h2(?:.*)>(.*?)<\/h2>/g);
    let response = '';

    if (fullImage && !subTitle) {
      response = content.replace(fullImage[0], '');
    }

    if (subTitle && !fullImage) {
      response = content.replace(subTitle[0], '');
    }

    if (fullImage) {
      response = content.replace(fullImage[0], '');
    }

    if (subTitle) {
      response = response.replace(subTitle[0], '');
    }

    /** Make any additional images use cloudinary url  */
    const useCloudinaryUrlsInPost = formatPageImageToCloudinaryUrl(response);

    return useCloudinaryUrlsInPost;
  };

  const getBodyImageId = (content) => {
    /** Check for image id first */
    const extract = content.match(/wp:image {(.*)}/);
    if (extract) {
      const imgExtract = extract.pop();

      const id = imgExtract.match(/\d+/g);
      if (id) {
        return id;
      }
      return [];
    }

    return [];
  };

  const getImageUrl = (content) => {
    const check = content.match(/src="([^"]*)"/g);

    if (check) {
      return check[0].split('"')[1];
    }

    return null;
  };

  /** Generate a cloudinary URL image based on image ID in body */
  let featuredImage = '';
  const imageNotFound = `${CLOUDINARY_BASE_URL}sr1twxakfytdtiimmnyz.png`;
  const getImageId = getBodyImageId(post[0].post_content);
  const imageUrl = getImageUrl(post[0].post_content);

  // check if image id exists
  if (getImageId.length > 0) {
    const imageId = getImageId[0];
    const [imageData] = await connection.execute(postTitleById, [imageId]);

    if (imageData.length > 0) {
      const imageGuid = imageData[0].guid;
      const imageGuidArr = imageGuid.split('/');

      const imageName = imageGuidArr[imageGuidArr.length - 1];
      const cloudinaryUrl = `${CLOUDINARY_BASE_URL}${imageName}`;
      featuredImage = cloudinaryUrl;
    } else {
      featuredImage = imageNotFound;
    }
  }

  if (imageUrl && getImageId <= 0) {
    const splitImgUrl = imageUrl.split('/');
    const imageName = splitImgUrl[splitImgUrl.length - 1];
    const postCloudinaryUrl = `${CLOUDINARY_BASE_URL}${imageName}`;
    featuredImage = postCloudinaryUrl;
  }

  if (!imageUrl && getImageId <= 0) {
    featuredImage = imageNotFound;
  }

  const subTitle = checkH2Tags(post[0].post_content);
  // const featuredImage = getImageData(post[0].post_content);
  const featuredImageCaption = getFeaturedImageCaption(post[0].post_content);
  const bodyContent = modPostContent(post[0].post_content);

  const postTags = tagsMeta.map((tag) => tag.term_taxonomy_id);

  const allTagsMeta = [];
  const allTags = [];

  /** Helper function to return string instead of unknown character */

  /**
   *  Extract all the tag information from id
   */
  for (let i = 0; i < postTags.length; i++) {
    const [row] = await connection.execute(getTagsFromIdQuery, [postTags[i]]);

    allTagsMeta.push(row);
  }

  /**
   *  Get all usable tag information from meta tag ids
   */

  for (let i = 0; i < allTagsMeta.length; i++) {
    const [row] = await connection.execute(currentTagsFromIdQuery, [allTagsMeta[i][0].term_id]);

    if (row.length > 0) {
      allTags.push({
        id: row[0].term_id,
        name: row[0].name,
        label: allTagsMeta[i][0].taxonomy,
        parent: allTagsMeta[i][0].parent,
      });
    }
  }

  /** *
   *  Get all authors
   */
  const postAuthors = allTags.filter((tag) => tag.label === 'author');
  const authorData = [];

  for (let i = 0; i < postAuthors.length; i++) {
    const authorName = postAuthors[i].name === SITE_TITLE
      ? SITE_TITLE.replace(' ', '-').toLowerCase()
      : postAuthors[i].name;
    const [author] = await connection.execute(postAuthorQuery, [authorName]);

    // get the authors description
    if (author.length > 0) {
      const [authorMeta] = await connection.execute(postAuthorMetaQuery, [author[0].ID]);

      const authorDescription = getFieldData(authorMeta, 'description');

      authorData.push({
        ...author[0],
        authorDescription,
      });
    }
  }

  /** Query author order and sort authors */
  const [authorsByOrderResults] = await connection.execute(sortedAuthorQuery, [post[0].ID]);
  const authorOrder = [];

  if (authorsByOrderResults.length > 0) {
    const sanitizeResponse = authorsByOrderResults[0].meta_value
      .replace(/";i:[0-9];/g, '')
      .replace(/";}/, '')
      .split(/s:[0-9]:/);

    const removeFirstIndex = sanitizeResponse.slice(1, sanitizeResponse.length);

    for (let i = 0; i < removeFirstIndex.length; i++) {
      authorOrder.push(parseInt(removeFirstIndex[i].replace(/"/g, ''), 10));
    }
  }

  if (authorOrder.length > 0) {
    authorData.sort((a, b) => authorOrder.indexOf(a.ID) - authorOrder.indexOf(b.ID));
  }

  const categories = allTags.filter((tag) => tag.label === 'category');
  const tags = allTags.filter((tag) => tag.label === 'post_tag');
  const postFound = categories.filter((cat) => {
    if (cat.id === catSlug[0].term_id) {
      return true;
    }
    // check parent
    if (cat.parent === catSlug[0].term_id) {
      return true;
    }

    return false;
  });

  const response = {
    status: 200,
    postId: post[0].ID,
    postQueryCategoryId: catSlug[0].term_id,
    post: {
      content: bodyContent,
      title: post[0].post_title,
      date: formatDate(post[0].post_date),
      subTitle: subTitle.replace(/<\/?[^>]+(>|$)/g, '') || '',
      featuredImage,
      featuredImageCaption,
    },
    seo: {
      metaDescription: getFieldData(postMeta, '_yoast_wpseo_metadesc'),
      metaTitle: getFieldData(postMeta, '_yoast_wpseo_title'),
      readTime: getFieldData(postMeta, '_yoast_wpseo_estimated-reading-time-minutes'),
    },
    categories,
    tags,
    authors: authorData,
  };

  if (postFound.length > 0) {
    return response;
  }

  return {
    status: 404,
  };
};

export default async (req, res) => {
  try {
    if (req.method === 'GET') {
      const fetchPost = await getPostContent(
        'njdep-begins-implementing-environmental-justice-law',
        'law-firm-insights',
      );

      if (fetchPost.status === 404) {
        return res.status(404).send({ ...fetchPost });
      }

      res.setHeader('Cache-Control', 'max-age=0, s-maxage=60, stale-while-revalidate');
      return res.status(200).send({ ...fetchPost });
    }
  } catch (error) {
    console.error(error);

    return res.status(500).json({ error });
  }
};
