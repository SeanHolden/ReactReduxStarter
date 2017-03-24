import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    // super: call parent method (in Component)
    super(props);

    // whenever we do a setState, the component re-renders in the DOM
    this.state = { term: '' };
  }

  render() {
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
