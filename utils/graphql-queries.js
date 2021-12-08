export const attorneyBySlugQuery = `query AttorneyProfileBySlug($slug: String) {
  attorneyProfileBy(slug: $slug) {
    attorneyProfileId
    seo {
      title
      metaDesc
    }
    attorneyMainInformation {
      designation
      email
      faxNumber
      firstName
      lastName
      additionalHeaderLinks{
        url
        title
      }
      forwardingEmailsForContactForm {
        email
      }
      middleInitial
      pdfBio {
        sourceUrl
      }
      phoneNumber
      profileImage {
        sourceUrl
      }
      socialMediaLinks {
        url
        channel
      }
      vizibility
      additionalHeaderLinks {
        url
        title
      }
    }
    attorneyAdditionalInformationEducationAdmissionsAffiliations {
      additionalInformation {
        content
      }
      affiliations
      barAdmissions
      education
    }
    attorneyBiography {
      biographyContent
    }
    attorneyAdditionalTabs {
      tabHeader1
      tabContent1
      tabHeader2
      tabContent2
      tabHeader3
      tabContent3
      tabHeader4
      tabContent4
      tabHeader5
      tabContent5
    }
    attorneyAwardsClientsBlogsVideos {
      attorneyVideos {
        date
        embedVideo
        title
      }
      awards {
        awardImage {
          sourceUrl(size: LARGE)
        }
        awardLink
        awardTitle
      }
      clients {
        clientImage {
          sourceUrl
        }
        clientLink
        clientTitle
      }
      blogId {
        constitutionalLawReporter
        governmentLaw
        musicEsq
      }
    }
    attorneyAuthorId {
      authorId {
        userId
      }
    }
    attorneyChairCoChair {
      chair {
        ... on Practice {
          id
          uri
          title
        }
      }
      coChair {
        ... on Practice {
          id
          title
          uri
        }
      }
    }
    attorneyMedia {
      attorneyMedia {
        header
        body
      }
    }
    attorneyPresentations {
      attorneyPresentations {
        body
        header
      }
    }
    attorneyPrimaryRelatedPracticesLocationsGroups {
      officeLocation {
        ... on OfficeLocation {
          id
          title(format: RENDERED)
          uri
        }
      }
      primaryPractice {
        ... on Practice {
          id
          title(format: RENDERED)
          uri
        }
      }
      relatedPractices {
        ... on Practice {
          id
          uri
          title(format: RENDERED)
        }
      }
    }
    attorneyPublications {
      attorneyPublications {
        body
        header
      }
    }
    attorneyRepresentativeClients {
      repClients {
        content
        title
      }
    }
    attorneyRepresentativeMatters {
      repMatters {
        content
        title
      }
    }
    title(format: RENDERED)
    attorneyTabNavigation {
      mainMenu
      moreMenu
    }
  }
}`;

export const attorneyNewsEventsQuery = `
query AttorneyNewsEventPosts($name: String) {
  posts(where: {categoryIn: "98, 99", search: $name}) {
    edges {
      node {
        date
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
        uri
        title(format: RENDERED)
        excerpt(format: RENDERED)
        categories {
          nodes {
            name
            uri
          }
        }
      }
    }
  }
}`;

export const attorneyFirmBlogQuery = `query AttorneyPostsById($id: Int) {
  posts(where: {author: $id}) {
    edges {
      node {
        date
        featuredImage {
          node {
            sourceUrl(size: LARGE)
          }
        }
        uri
        title(format: RENDERED)
        excerpt(format: RENDERED)
        author {
          node {
            name
            url
          }
        }
      }
    }
  }
}
`;

export const attorneySlugsQuery = `query AttorneySlugs {
  attorneyProfiles {
    edges {
      node {
        slug
      }
    }
  }
}`;

// , orderby: {field: DATE, order: DESC}
export const categoryPostsByIdQuery = `query categoryPostsById(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $id:Int
) {
  posts(where: {categoryId:$id},  first: $first, last: $last, after: $after, before: $before) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
    node {
      date
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      uri
      title(format: RENDERED)
      excerpt(format: RENDERED)
      author {
        node {
          name
          url
        }
      }
    }
  }
  }
}`;

export const homePageAwardsQuery = `query HomePageAwardsQuery {
  homePageAwards {
    edges {
      node {
        title
        homePageAwards {
          label
          image {
            sourceUrl(size: LARGE)
          }
          appearanceOrder
          imageWidth
          imageHeight
        }
      }
    }
  }
}`;

export const authorPostsByIdQuery = `query authorPostsById(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $id:Int
) {
  posts(where: {author:$id},  first: $first, last: $last, after: $after, before: $before) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
    node {
      date
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      uri
      title(format: RENDERED)
      excerpt(format: RENDERED)
      author {
        node {
          name
          url
        }
      }
    }
  }
  }
}`;

export const authorFirmNewsByIdQuery = `query authorFirmNewsById(
  $first: Int
  $last: Int
  $after: String
  $before: String
  $name:String
) {
  posts(first: $first, last: $last, after: $after, before: $before, where: { search: $name, categoryNotIn: "599"}) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
    node {
      date
      featuredImage {
        node {
          sourceUrl(size: LARGE)
        }
      }
      uri
      title(format: RENDERED)
      excerpt(format: RENDERED)
      author {
        node {
          name
          url
        }
      }
    }
  }
  }
}`;

// Category Landing Page Query
export const categoryPostQuery = `query CategoryPosts($name:String) {
  categories(where: {slug: [$name]}) {
    edges {
      node {
        name
        seo {
          metaDesc
          title
        }
        children(first: 20) {
          nodes {
            slug
            name
            count
            id
          }
        }        
        description
        categoryId
        posts(first: 4) {
          edges {
            node {
              categories(first: 1) {
                edges {
                  node {
                    name
                    link
                  }
                }
              }
              uri
              excerpt(format: RENDERED)
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
              date
            }
          }
        }
      }
    }
  }
}
`;
