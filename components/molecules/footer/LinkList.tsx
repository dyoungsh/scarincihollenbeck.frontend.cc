import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

interface List {
  id: number | string
  slug: string
  title: string
}
interface Props {
  title: string
  list: List[]
  useClient: boolean
}
const LinkList: React.FC<Props> = ({ title, list, useClient }: Props) => {
  return (
    <ListContainer>
      <Title>{title}</Title>
      <List>
        {list.map(({ id, slug, title }) => (
          <Item key={id}>
            {useClient ? (
              <Link href={slug}>
                <a>{title}</a>
              </Link>
            ) : (
              <a href={slug} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            )}
          </Item>
        ))}
      </List>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.span`
  ${(props) => props.theme.fonts.xl};
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.proximaBold};
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  margin-bottom: 8px;
  ${(props) => props.theme.fonts.lg};
  a {
    color: inherit;
  }

  &:first-child {
    margin-top: 8px;
  }
`

export default LinkList
