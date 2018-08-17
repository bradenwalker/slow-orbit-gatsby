import React from 'react'
import Link from 'gatsby-link'
import img1 from '../static/picard_1.png'
import img2 from '../static/picard_2.png'
import img3 from '../static/picard_3.png'
import img4 from '../static/picard_4.png'

const imgArr = [img1, img2, img3, img4]

const IndexPage = () => (
  <div>
    {imgArr.map(img => {
      return (<img src={img} alt="" />)
    })}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
)

export default IndexPage
