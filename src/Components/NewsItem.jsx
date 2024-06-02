import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let { title, publishedAt, description, imageUrl, newsUrl, source } = this.props;     // destructuring

    return (
      <>
        <div className='my-3'>
          <div className="card border border-info-subtle shadow p-3 mb-5 bg-body-tertiary rounded" >

          {/* <div style={{display:"flex",justifyContent:'flex-end',position:"absolute",right:16}}>
                <span className=" badge rounded-pill bg-danger">{source}  </span>
              </div> */}
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "80%", zIndex: "1" }}>{source}  </span>

            <img src={!imageUrl ? "/ImagError.png" : imageUrl} className="card-img-top" alt="..." />

            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text"><small className="text-muted"> Date : {new Date(publishedAt).toGMTString()}</small></p>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} target='_blank' className="btn btn-dark btn-sm">Read More</a>

            </div>

          </div>

        </div>
      </>
    )
  }
}

export default NewsItem
