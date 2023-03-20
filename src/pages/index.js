import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Nissan Z Proto in white with yellow chrome te37 advan wheels"
        src="https://flying-lugnut-product-card-images.s3.amazonaws.com/nissan-z-proto-white-yellow-01.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title='Home Page' />

export default IndexPage