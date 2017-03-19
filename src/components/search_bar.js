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
      <div>
        <input
          value={this.state.term}
          onChange={(event) => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }
}

export default SearchBar;
