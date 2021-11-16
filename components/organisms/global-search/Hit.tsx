import React from 'react'
import styled from 'styled-components'

interface Props {
  hit: {
    permalink: string
    post_type_label: string
    post_title: string
    post_type: string
    post_author: {
      display_name: string
    }
    post_date_formatted: string
  }
}

const Hit = ({ hit }: Props) => {
  return (
    <HitWrapper>
      <a href={hit.permalink.replace('https://wp.scarincihollenbeck.com', '')}>
        <p className="post-type">{hit.post_type_label}</p>
        <p className="title">
          <strong>{hit.post_title}</strong>
        </p>
        <p className="details">
          {hit.post_type === 'post' && <>{hit.post_author.display_name}</>}
          {hit.post_type === 'post' && (
            <>
              <span className="mx-1">|</span>
              {hit.post_date_formatted}
            </>
          )}
        </p>
      </a>
    </HitWrapper>
  )
}

const HitWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryGray};
  a {
    color: inherit;
    padding: 13px 0;
    display: block;
  }
  p {
    margin-bottom: 0;
  }
  .red-border {
    height: auto;
    width: 4px;
    background-color: ${(props) => props.theme.colors.secondaryRed};
    margin-right: 7px;
  }
  .post-type {
    color: ${(props) => props.theme.colors.secondaryRed};
    ${(props) => props.theme.fonts.lg};
    font-family: ${(props) => props.theme.fonts.proximaBold};
  }
  .details {
    ${(props) => props.theme.fonts.md};
  }
  .title {
    ${(props) => props.theme.fonts.lg};
    font-weight: ${(props) => props.theme.fonts.proximaBold};
  }
`

export default Hit
