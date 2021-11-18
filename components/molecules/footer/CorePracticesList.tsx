import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { CORE_PRACTICES } from 'utils/constants'

const CorePracticesList = () => {
  const listOne = CORE_PRACTICES.filter((_, i) => i <= 5)
  const listTwo = CORE_PRACTICES.filter((_, i) => i > 5)
  return (
    <ListContainer>
      <Title>Core Practices</Title>
      <ListWrapper>
        <List>
          {listOne.map(({ id, slug, title }) => (
            <Item key={id}>
              <Link href={slug}>
                <a>{title}</a>
              </Link>
            </Item>
          ))}
        </List>
        <List>
          {listTwo.map(({ id, slug, title }) => (
            <Item key={id}>
              <Link href={slug}>
                <a>{title}</a>
              </Link>
            </Item>
          ))}
        </List>
      </ListWrapper>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  algin-items: center;
`

const Title = styled.span`
  ${(props) => props.theme.fonts.xl};
  color: ${(props) => props.theme.colors.red};
  font-family: ${(props) => props.theme.fonts.proximaBold};
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    &:first-child {
      margin-right: 16px;
    }
  }
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

export default CorePracticesList
