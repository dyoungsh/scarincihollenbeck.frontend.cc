import ArticleCard from 'components/atoms/ArticleCard'
import React from 'react'
import styled from 'styled-components'
import { ArticleList } from 'types/Home'

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
  width: 100%;
  margin-top: 32px;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 50%;
    margin-top: 100px;
  }
`

export default PostList
