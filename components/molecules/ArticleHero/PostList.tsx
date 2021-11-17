import React from 'react'
import styled from 'styled-components'
import { ArticleList } from 'types/Home'
import ArticleCard from 'components/atoms/ArticleCard'

interface Props {
  articleList: ArticleList[]
}
const PostList: React.FC<Props> = ({ articleList }: Props) => {
  return (
    <PostContainer>
      {articleList.map((article) => (
        <ArticleCard {...article} key={article.id} />
      ))}
    </PostContainer>
  )
}

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export default PostList
