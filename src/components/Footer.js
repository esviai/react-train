import React from 'react'

function Footer (props) {
  return (
    <div>
      <br />
      <br />
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <img className="is-16x16" src={`https://api.adorable.io/avatars/64/${props.randomFace}`} alt="" style={{borderRadius: '25%'}} />
            <br />
            <p>
              A website by <a href="http://esviai.com"><strong>Shabrina V. Inmas</strong></a>, who just want people to feel bad about themselves.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
