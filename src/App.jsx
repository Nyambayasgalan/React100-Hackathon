import React from "react";
import axios from "axios";
import JokeButton from "./JokeButton";
import BreweryFinder from "./BreweryFinder";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      programmingJokes: " ",
      setup: " ",
      brewery: [],
      city: " "
    };

    this.handleNewJoke = this.handleNewJoke.bind(this);
    this.handleBrewery = this.handleBrewery.bind(this);
  }

  handleNewJoke() {
    axios.get('https://sv443.net/jokeapi/v2/joke/Programming')
      .then(response => {
        const jokes = Object.values(response.data)[2];
        console.log(Object.values(response.data)[2]);
        this.setState({ programmingJokes: jokes });

      })
  }

  city(event) {
    this.setState({ city: event.target.value })
  }

  handleBrewery() {
    var { city } = this.state;
    console.log(city);
    axios.get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then(response => {
        const brewery = (response.data);
        console.log(brewery);
        this.setState({ brewery: brewery });

      })
  }

  render() {

    return (

      <div className="jumbotron">
        <h3 className="display-4"> Welcome to Programming Jokes!</h3>
        <p className="lead">You'll find a hilarious selection of the best programming jokes guaranteed to make you laugh!</p>
        {
          (this.state.setup === " ") ?
            <p>Click the button below to get started!</p> :
            <div>
              <h2 className="display-4">{this.state.setup}</h2>
            </div>
        }
        <JokeButton
          handleNewJoke={this.handleNewJoke} />
        <p>{this.state.programmingJokes}</p>
        {
          (this.state.setup === " ") ?
            <h3 className="display-4">Welcome to Brewery Finder!</h3> :
            <h3 className="display-4">{this.state.setup}</h3>

        }
        <p className="lead">Here you will find your favorite brewery in different cities!</p>
        <p>Find breweries by city name!</p>
        <input type="text" placeholder="Enter the city name" onChange={this.city.bind(this)}></input>

        <BreweryFinder
          handleBrewery={this.handleBrewery} />

        <div className="card">
          {this.state.brewery.map((item, i) => {
            return (
              <div className="card-body">
                <h4 className="card-title" key={i}>{[item.name]}</h4>
                <p>Phone number: {item.phone}</p>
                <p>Brewery type: {item.brewery_type}</p>
                <p>Street: {item.street}</p>
                <p>Postal code: {item.postal_code}</p>
                <a href="#">{item.website_url}</a>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

