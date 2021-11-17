export interface Leadership {
  image: string
  slug: string
  name: string
  title: string[]
  lastName: string
}

export interface SEO {
  title: string
  metaDescription: string
  canonicalLink: string
}

export interface Office {
  featuredImg: string
  title: string
  slug: string
  id: number
}

export interface FeaturedArticle {
  id: number
  slug: string
  image: string
  title: string
  date: string
  authors: {
    name: string
    link: string
  }[]
  excerpt: string
}

export interface ArticleList {
  id: number
  slug: string
  image: string
  title: string
  description: string
}

export interface Award {
  url: string
  alt: string
  width: number
  height: number
}
