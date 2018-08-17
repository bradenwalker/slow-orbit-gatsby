import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ footerText }) => (
  <div
    style={{
      background: '#5d925d',
      textAlign: 'center',
      height: '40px',
      width: '100%',
      // position: 'fixed',
      bottom: 0
    }}
  >
    <div
      style={{
        maxWidth: 960
      }}
    >
      <p
        style={{
          fontSize: '10px',
          color: 'white',
          // height: '40px',
          fontFamily: 'arial',
        }}
      >
        { footerText }
      </p>
    </div>
  </div>
)

export default Footer
