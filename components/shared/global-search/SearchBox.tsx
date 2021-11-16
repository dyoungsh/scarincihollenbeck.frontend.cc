import React from 'react'
import styled from 'styled-components'

interface Props {
  currentRefinement: string
  refine: (value: string) => void
}

const SearchBox = ({ currentRefinement, refine }: Props) => {
  return (
    <Form className="scroll-search">
      <Label>Site Search</Label>
      <Input
        type="input"
        value={currentRefinement}
        onChange={(e) => refine(e.currentTarget.value)}
        placeholder="Search..."
      />
    </Form>
  )
}

const Form = styled.form`
  position: relative;
  ${(props) => props.theme.fonts.lg};
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 350px;
  }
`
const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const Input = styled.input`
  padding-top: 0;
  padding-bottom: 0;
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.thirdGray};
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
`

export default SearchBox
