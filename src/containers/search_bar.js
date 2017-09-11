import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = { term: ''};
    //this here is instance of search barhas a function onInputChange
    //bind that function to searchbar and replace on input change
    //with new bound function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  onInputChange(event){
    //in callback function if it have reference to this we need to bind that
    //so onChange={this.onInputChange} wont work correctly.
    //we can bind or make it function in line () => this.onInputChange
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event){
    console.log(this.state.term);
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

{/*ull here means just that Redux is maintaining state but we
dont need it here*/}
export default connect(null, mapDispatchToProps)(SearchBar);
