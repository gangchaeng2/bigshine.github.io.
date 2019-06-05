import React from 'react'

import Seo from 'components/Seo'
import Layout from 'components/Layout'
// import Home from 'components/Home'
import NewHome from 'components/NewHome'

const IndexPage = () => {
  return (
    <Layout>
      <Seo keywords={[`blog`, `bigshine`]} />
      <NewHome />
    </Layout>
  )
}

export default IndexPage
