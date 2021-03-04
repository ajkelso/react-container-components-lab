import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ""
    }
    
    url = (term) => "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ&query=" + term

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.url(this.state.searchTerm))
        .then(res => res.json())
        .then(data => this.setState({reviews: data.results}))

    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    renderResults = () => {

        if(this.state.reviews === null){
            return <h4>No Results Found</h4>
        } else {
            return <MovieReviews category="Search Results" reviews={this.state.reviews} />
        }
    }
    
    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label id="search">Search Reviews: </label>
                    <input onChange={this.handleChange} type="text" id="search" value={this.state.searchTerm}></input>
                    {this.renderResults()}
                </form>
            </div>
        )
    }
}
