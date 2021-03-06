import React from 'react'
import Link from 'gatsby-link'
import img1 from '../static/picard_1.png'
import img2 from '../static/picard_2.png'
import img3 from '../static/picard_3.png'
import img4 from '../static/picard_4.png'

const renderImgArr = () => {
  return (
    [img1, img2, img3, img4].map(img => {
      return (<img src={img} alt="" />)
    })
  )
}

const renderNavLinks = () => {
  const containerStyle = {
    fontSize: '12px',
    fontFamily: 'arial',
    textAlign: 'center',
    margin: '0 auto',
    marginBotton: '30px'
  }
  const linkWrapperStyle = {
    marginTop: 0,
    display: 'inline-block',
    width: '25%'
  }
  const linkStyle = {
    padding: '8px',
    textDecoration: 'none',
    color: 'lightgreen',
    background: '#5d925d',
    borderRadius: '5px'
  }
  return (
    <div
      style={containerStyle}
    >
      <div style={linkWrapperStyle}>
        <Link
          style={linkStyle}
          to="/post-1/"
        >
          {'<< Prev'}
        </Link>
      </div>
      <div style={linkWrapperStyle}>
        <Link
          style={linkStyle}
          to="/post-1/"
        >
          {'Next >>'}
        </Link>
      </div>
    </div>
  )
}

const IndexPage = () => (
  <div>
    {renderImgArr()}
    {renderNavLinks()}
  </div>
)

export default IndexPage
