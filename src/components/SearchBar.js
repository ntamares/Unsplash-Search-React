import React, {Component} from 'react';

class SearchBar extends Component{

  // onInputChange(event){
  //   console.log(event.target.value);
  // }

  state = {term: ''};

  // arrow functions auto-bind
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  // onFormSubmit(event){
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  render(){
    return(
      <div className = "ui segment">
        <form className = "ui form" onSubmit = {this.onFormSubmit}>
        {/* <form className = "ui form" onSubmit = {(event) => this.onFormSubmit()}> */}
          <div className = "field">
            <label>Image Search</label>
            <input 
              type = "text" 
              value = {this.state.term}
              onChange = {(e) => this.setState({term: e.target.value})} 
            />
            {/* <input type = "text" onChange = {this.onInputChange} /> */}
            {/* <input type = "text" onChange = {(event) => console.log(event.target.value)} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;