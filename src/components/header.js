import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'teal',
      marginBottom: '1.45rem',
      textAlign: 'center'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        paddingTop: '5px'
      }}
    >
      <h4 style={{ margin: '0 5px' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h4>
      <p
        style={{
          fontSize: '10px'
        }}
      >
        By Braden Walker
      </p>
    </div>
  </div>
)

export default Header
