import React from 'react'
import styled from 'styled-components'
import { createMarkup } from 'utils/helpers'

interface Item {
  item: string
  id: number | string
}

interface Props {
  title: string
  list: Item[]
}
const BasicList: React.FC<Props> = ({ title, list }: Props) => {
  return (
    <ListContainer>
      <Title>{title}</Title>
      <List>
        {list.map(({ id, item }) => (
          <Item key={id} dangerouslySetInnerHTML={createMarkup(item)} />
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

export default BasicList
