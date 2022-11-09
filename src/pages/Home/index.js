import React from 'react'
import Main from '../../components/Main'
import Rows from '../../components/Rows'
import { requests } from '../../untils/RequesApi'

const Home = () => {
  return (
    <div>
      <Main />
      <Rows rowId={1} title = 'Upcoming' fetchURL = {requests.requestUpcoming} />
      <Rows rowId={2} title = 'Popular' fetchURL = {requests.requestPopular} />
      <Rows rowId={3} title = 'Trending' fetchURL = {requests.requestTrending} />
      <Rows rowId={4} title = 'Top Rated' fetchURL = {requests.requestTopRated} />
      <Rows rowId={5} title = 'Horror' fetchURL = {requests.requestHorror} />

    </div>
  )
}

export default Home
