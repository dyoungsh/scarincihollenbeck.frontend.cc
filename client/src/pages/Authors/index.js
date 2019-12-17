import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { PulseLoader } from 'react-spinners';
import { makeTitle, sumbitSearchForm } from '../../utils/helpers';
import ArchiveLayout from '../../layouts/ArchiveLayout';
import BreadCrumbs from './BreadCrumbs';
import Sidebar from './Sidebar/';
import Body from './Body';
import './index.scss';

class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      news: [],
      events: [],
      insight: [],
      bio: [],
      practices: [],
      pageNums: [],
      term: '',
      currentPage: '',
      searchTerm: '',
      allPractices: [],
      allAttorneys: [],
      allCategories: [],
      breadCrumb: [],
      categorySlug: '',
      t: {
        keyword: '',
        attorney: '',
        practice: '',
        category: '',
      },
      spinner: false,
    };

    this.onChange = this.onChange.bind(this);
    this.getPosts = this.getPosts.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  
  componentDidMount() {
    const { author, pageNum } = this.props.match.params;
    let page = 1;
    let breadCrumb = [author, 1];

    if(pageNum !== undefined) {
      page = pageNum;
      breadCrumb[1] = pageNum;
    };

    this.setState({ breadCrumb, categorySlug: author, currentPage: page, spinner: true }, () => {
      this.getPosts(`${process.env.API_URL}/wp-json/author/posts/${author}/${page}`, author);
    });
  }

  onChange(event) {
    const { value, name } = event.target;
    const { t } = this.state;
    t[name] = value;
    this.setState({ t });
  }

  onSubmit() {
    const { t } = this.state;
    window.location = sumbitSearchForm(t);
  }

  getPosts(url, authorName) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        const { pages, results, term } = data;
        this.setState({ term, results, spinner: false });
        const pageNums = [];
        for (let i = 1; i <= pages; i += 1) {
          pageNums.push(i);
        }
        this.setState({ pageNums });
      })
      .then(() => {
        fetch(`${process.env.API_URL}/wp-json/author/bio/${authorName}`)
          .then(res => res.json())
          .then((results) => {
            const { bio, practices } = results;

            const bioData = [bio];

            this.setState({
              bio: bioData,
              practices,
            });
          });
      })
      .then(() => {
        // news
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-news`)
          .then(res => res.json())
          .then((data) => {
            const news = [...data.latest, ...data.archives];
            this.setState({ news });
          });
      })
      .then(() => {
        // events
        fetch(`${process.env.API_URL}/wp-json/category/posts/firm-events`)
          .then(res => res.json())
          .then((data) => {
            const events = [...data.latest, ...data.archives];
            this.setState({ events });
          });
      })

      .then(() => {
        // insights
        fetch(`${process.env.API_URL}/wp-json/category/posts/law-firm-insights`)
          .then(res => res.json())
          .then((data) => {
            const insight = [...data.latest, ...data.archives];
            this.setState({ insight });
          });
      })
      .then(() => {
        // practices
        fetch(`${process.env.API_URL}/wp-json/attorney-search/practices`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ allPractices: data });
          });
      })
      .then(() => {
        // attorneys
        fetch(`${process.env.API_URL}/wp-json/attorney-search/attorneys`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ allAttorneys: data });
          });
      })
      .then(() => {
        // categories
        fetch(`${process.env.API_URL}/wp-json/wp/v2/categories?per_page=100`)
          .then(res => res.json())
          .then((data) => {
            this.setState({ allCategories: data });
          });
      });
  }

  render() {
    const {
      results,
      news,
      events,
      insight,
      pageNums,
      searchTerm,
      allPractices,
      allAttorneys,
      allCategories,
      breadCrumb,
      categorySlug,
      currentPage,
      term,
      bio,
      practices,
      spinner,
    } = this.state;

    // pagination set up
    const prev = (currentPage > 2) ? currentPage - 1 : 1;
    const next = (currentPage < pageNums.length) ? parseInt(currentPage, 10) + 1 : pageNums.length;
    const cp = window.location.href.split('/').filter(a => a !== '');
    const active = (typeof cp[cp.length - 1] === 'number') ? cp[cp.length - 1] : 1;

    const seo = {
      title: `Attorney ${(bio.length > 0) ? bio[0].name : ''} Blog Posts & Articles`,
      metaDescription: `Welcome to Scarinci Hollenbeck here you will find the latest articles from the author ${(bio.length > 0) ? bio[0].name : ''}. `
    }

    return (
      <div>
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.metaDescription}/>
          <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
          <link rel="canonical" href={window.location.href} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.metaDescription} />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:site_name" content={seo.title} />
          <meta property="article:publisher" content="https://www.facebook.com/ScarinciHollenbeck/" />
          <meta property="og:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:secure_url" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta property="og:image:width" content="750" />
          <meta property="og:image:height" content="350" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:description" content={seo.metaDescription} />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:site" content="@S_H_Law" />
          <meta name="twitter:image" content="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2018/05/no-image-found-diamond.png" />
          <meta name="twitter:creator" content="@S_H_Law" /> 
        </Helmet>
        {
          (!spinner) ? (
            <ArchiveLayout
              header={(<BreadCrumbs breadCrumb={breadCrumb} categorySlug={categorySlug} />)}
              body={(<Body
                results={results}
                categorySlug={categorySlug}
                next={next}
                prev={prev}
                pageNums={pageNums}
                news={news}
                events={events}
                insight={insight}
                active={active}
                /> )}
              sidebar={(<Sidebar
                searchTerm={searchTerm}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                allPractices={allPractices}
                allAttorneys={allAttorneys}
                allCategories={allCategories}
                bio={bio}
                practices={practices}
              />)}
            />
          ) : <PulseLoader color="#D02422" loading={spinner} />
        }      
      </div>
    );
  }
}

export default Author;
