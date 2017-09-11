import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: ''};
    //this here is instance of search barhas a function onInputChange
    //bind that function to searchbar and replace on input change
    //with new bound function
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    //in callback function if it have reference to this we need to bind that
    //so onChange={this.onInputChange} wont work correctly.
    //we can bind or make it function in line () => this.onInputChange
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    event.preventDefault();
  }
  //value={this.state.term} makes it a controlled component

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          placeholder="Search a city"
          className="form-control" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit </button>
        </span>
      </form>
    )
  }
}
