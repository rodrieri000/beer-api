import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Beer extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      isLiked: false
    };
  }

  handleClick = () => {
    this.setState({
      isLiked: !this.state.isLiked
    })
  }

  render() {
    return (
      <div className="body">        
        <div className="beer">
          <img style={{ width: "50px" }} src={this.props.beer.image_url} />
          <h3>{this.props.beer.name}</h3>
          <button onClick={this.handleClick}>{this.state.isLiked ? 'Liked' : 'Like'}</button>
          <p>{this.props.beer.tagline}</p>
          <div className="beer-description">{this.props.beer.description}</div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
    .then(json => json.json())
    .then(data => {
      this.setState({
        beers: data
      });
      console.log(data);
    })
  }


  render() {
    return (
      <div className="App">
        {}
        {this.state.beers.map((beerData, index) => (
          <Beer key={index} beer={beerData} />
        ))}
      </div>
    );
  }


}
export default App;
