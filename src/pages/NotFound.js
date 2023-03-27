import React from 'react'

function NotFound() {
  return (
      <div id="notfound">

          <div className="notfound">
              <div className="notfound-404">
                  <h1>404</h1>
                  <h2>Page not found</h2>
              </div>
              <div style={{textAlign:"center",display: "flex",justifyContent: "center", alignItems: "center",marginTop:"1%"}} >
                  <a href="/" className="btn btn-primary  align-content-sm-start"  >HOMEPAGE</a>
              </div>
          </div>
      </div>
  )
}

export default NotFound