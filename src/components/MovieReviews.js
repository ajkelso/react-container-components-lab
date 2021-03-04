// Code MovieReviews Here
import React from "react";
// import Review from "./Review"


const Review = (review) => {
    return (
        <div 
            className="review"
            key={review.headline} >
                {review.headline}
        </div>
    )
}

const MovieReviews = (props) => {
    return <div className="review-list">
        <h3>{props.reviews.length ? props.category : null }</h3>
        <ul>
            {props.reviews.map(review => Review(review))}
        </ul>
    </div>
}

export default MovieReviews

