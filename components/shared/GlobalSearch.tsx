import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  connectStateResults,
  createConnector,
  Hits,
  Pagination,
} from 'react-instantsearch-dom'
import styled from 'styled-components'
import Hit from 'components/organisms/global-search/Hit'
import SearchBox from 'components/organisms/global-search/SearchBox'

import { ALGOLIA_PUBLIC_API, ALGOLIA_APP_ID, ALGOLIA_SEARCH_INDEX } from 'utils/constants'

const searchClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_PUBLIC_API)

const connectWithQuery = createConnector({
  displayName: 'WidgetWithQuery',
  getProvidedProps(props, searchState) {
    const currentRefinement = searchState.attributeForMyQuery || ''
    return { currentRefinement }
  },
  refine(props, searchState, nextRefinement) {
    return {
      ...searchState,
      attributeForMyQuery: nextRefinement,
    }
  },
  getSearchParameters(searchParameters, props, searchState) {
    // When the `attributeForMyQuery` state entry changes, we update the query
    return searchParameters.setQuery(searchState.attributeForMyQuery || '')
  },
  cleanUp(props, searchState) {
    const { attributeForMyQuery, ...nextSearchState } = searchState

    return nextSearchState
  },
})

const ConnectedSearchBox = connectWithQuery(SearchBox)

const Results = connectStateResults(({ searchState }) =>
  searchState && searchState.attributeForMyQuery ? (
    <ResultsContainer className="search-container">
      <Pagination totalPages={10} />
      <Hits hitComponent={Hit} />
    </ResultsContainer>
  ) : null
)

const ResultsContainer = styled.div`
  position: absolute;
  padding: 0.25rem!important;
  box-shadow: ${(props) => props.theme.colors.shadowLight};
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: ${(props) => props.theme.breakpoints.sm}
  }
}
`

const GlobalSearch = () => {
  return (
    <InstantSearch indexName={ALGOLIA_SEARCH_INDEX} searchClient={searchClient}>
      <ConnectedSearchBox />
      <Results />
    </InstantSearch>
  )
}

export default GlobalSearch
