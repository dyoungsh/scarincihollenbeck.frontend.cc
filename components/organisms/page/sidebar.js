import SubscriptionMessage from 'components/subscription-message'
import TrendingStories from 'components/trending-stories'

export default function PagesSidebar({ posts, covidPage }) {
  return (
    <>
      {covidPage ? (
        <TrendingStories title="Current Covid-19 News" content={posts} />
      ) : (
        <TrendingStories title="Trending Stories" content={posts} />
      )}
      <br />
      <SubscriptionMessage />
    </>
  )
}
