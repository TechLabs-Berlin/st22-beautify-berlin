import React from 'react'
import './HOFCard.css'

export default function HOFCard({title, imageUrl, body}) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt= "Flash" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <p>{body}</p>
        </div>
        </div>
        <div className="bottom-part">
          <div className="Details-btn">
            <button>
              <a>
                Details
              </a>
            </button>
          </div>  
          <div className="Like-btn">
            <button>
              <i class="fa-solid fa-thumbs-up"></i>
            </button>
          </div>
        </div>
      </div>
  )
}
