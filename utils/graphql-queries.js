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
            sourceUrl
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
          sourceUrl
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
          sourceUrl
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
          sourceUrl
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

// contact/subscribe page query
export const contactSubscribePageQuery = `query ContactSubscribePageQuery($slug:String) {
  pageBy(uri: $slug) {
    seo {
      metaDesc
      title
    }
    title
    formPages {
      formLabel
    }
    content(format: RENDERED)
  }
}`;

/** home page content query */
export const homePageQuery = `query HomePageQuery {
  pageBy(uri: "front-page") {
    title
    homePage {
      aboutFirm {
        description
        linkLabel
        linkUrl
        title
      }
      awards {
        appearanceOrder
        imageHeight
        imageWidth
        label
        awardImage {
          sourceUrl
        }
      }
      bannerLineOne
      bannerLineTwo
      mainTag
      serviceOne {
        description
        linkLabel
        linkUrl
        title
        serviceImage {
          sourceUrl
        }
      }
      serviceTwo {
        description
        linkLabel
        linkUrl
        serviceImage {
          sourceUrl
        }
        title
      }
      subMainTag
      leadership {
        ... on Administration {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          administration {
            title
          }
        }
        ... on AttorneyProfile {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          attorneyMainInformation {
            designation
          }
          attorneyChairCoChair {
            chair {
              ... on Practice {
                id
                title
              }
            }
          }
        }
      }
    }
    seo {
      metaDesc
      title
    }
  }
}
`;

/** home page locations query */
export const homePageLocationsQuery = `query LocationPagesQuery {
  officeLocations {
    edges {
      node {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`;

/** attorneys landing page query */
export const attorneysPageQuery = `query AttorneysPagesQuery {
  pageBy(pageId: 46642) {
    title
    seo {
      metaDesc
      title
    }
    attorneyArchives {
      description
      designationSectionTitles {
        name
        order
      }
    }
  }
}`;

/** practices landing page query */
export const practicePageQuery = `query PracticesPagesQuery {
  pageBy(pageId: 46644) {
    title
    seo {
      metaDesc
      title
    }
    practiceArchives {
      description
      mainTag
    }
  }
}`;

/** careers landing page query */
export const careersPageQuery = `query CareersPagesQuery {
  pageBy(pageId: 46660) {
    title
    seo {
      metaDesc
      title
    }
    careersPage {
      description
      equalEmploymentOpportunityContent
      positionTypes {
        name
      }
    }
  }
}`;

/** administration landing page query */
export const administrationPageQuery = `query AdministrationPagesQuery {
  pageBy(pageId: 46670) {
    title
    seo {
      metaDesc
      title
    }
    administrationArchive {
      description
    }
  }
}
`;

/** basic pages query  */
export const basicPagesQuery = `query BasicPageQuery($slug: String) {
  pageBy(uri: $slug) {
    title
    seo {
      metaDesc
      title
    }
    content(format: RENDERED)
    addFormToPage {
      enableForm
      formLabel
    }
  }
}`;

/** querying firm pages content */
export const firmPagesQuery = `query FirmPageQuery($slug: String) {
  pageBy(uri: $slug) {
    title
    seo {
      metaDesc
      title
    }
    firmPagesRelatedPostsMembers {
      groupChair {
        ... on AttorneyProfile {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          attorneyMainInformation {
            designation
            email
            phoneNumber
            lastName
          }
        }
      }
      groupMembers {
        ... on AttorneyProfile {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
            }
          }
          attorneyMainInformation {
            designation
            email
            phoneNumber
            lastName
          }
        }
      }
      relatedPosts {
        posts(first: 3) {
          edges {
            node {
              id
              uri
              date
              excerpt
              title(format: RENDERED)
              featuredImage{
                node{
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
    firmPagesDescription {
      description
    }
    firmPagesTabs {
      tab2Content
      tab2Header
      tab3Content
      tab3Header
      tab4Content
      tab4Header
      tab5Content
      tab5Header
      tabContent
      tabHeader
    }
  }
}`;

export const firmOverviewQuery = `query FirmOverviewQuery {
  pageBy(uri: "firm-overview") {
    title
    seo {
      metaDesc
      title
    }
    content
    firmOverviewTabs {
      additionalContent {
        content
        title
      }
      mainTabs {
        content
        subtitle
        title
        mainImage {
          sourceUrl
        }
      }
    }
  }
}`;

export const attorneysAndAdminsQuery = `query AttorneysAndAdminsQuery {
  attorneyProfiles(first: 100) {
    edges {
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        uri
        title
        attorneyMainInformation {
          phoneNumber
          email
          designation
          lastName
        }
      }
    }
  }
  administrations {
    edges {
      node {
        featuredImage {
          node {
            sourceUrl
          }
        }
        title
        uri
        administration {
          title
          phoneExtension
          email
          lastname
          order
        }
      }
    }
  }
}
`;
