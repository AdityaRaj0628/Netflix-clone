import React from 'react'

 import Main from "../Components/Main"
import Row from '../Components/Row'

import endpoints from '../Services/movieServices'


function Home() {
  return (
    <div>

        <Main></Main>
        <Row  title='UpComing' url={endpoints.upcoming} />
        <Row title='Popular' url={endpoints.popular} />
        <Row  title='Trending' url={endpoints.trending} />
        <Row  title='Top Rated' url={endpoints.topRated} />
        {/*  title='Horror' fetchURL={endpoints.horror} /> */}
        <Row  title='Comedy' url={endpoints.comedy} />
    </div>
  )
}

export default Home