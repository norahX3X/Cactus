import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './plants.css';
import Plant from './Plant'

const axios = require('axios');
//API Authentcation 
const token='R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      plants: [],//save the current 30 plant 
      my_plants: [],//save plants ids'
      current: {}
    }
  }

  // 

  handleAddToggle = (plant) => {
    // film:{}
    console.log(plant);

    this.handleAddToggle = this.handleAddToggle.bind(this)
    const my_plants = this.state.my_plants.slice()
    const filmIndex = my_plants.indexOf(plant)

    if (filmIndex === -1) {
      my_plants.push(plant)
    } else {
      my_plants.splice(filmIndex, 1)
    }
    console.log(my_plants)

    this.setState({ my_plants })
  }

  handleDetailsClick = (plant) => {
    this.setState({ current: plant })


    const url = `https://api.themoviedb.org/3/movie/${plant.id}?api_key=58d1cc1884566fbdab699fa30a455802&append_to_response=videos,images&language=en`

    fetch(url).then(response => {
      response.json().then(data => {
        console.log(data) // take a look at what you get back!
        this.setState({ current: data })
      })
    })


    console.log("Fetching details for" + plant.title);
    console.log(this.state.current);

  }
  //get all plants and send it to plan card
  componentDidMount() {

    // var url = "https://trefle.io/api/plants?q=strawberry&token=R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09";
    //"http://trefle.io/api/plants/129137"
    //q=rosemary
    axios({
      url: 'https://trefle.io/api/plants?token=R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09',
    }).then(respo => {
        console.log(respo) // take a look at what you get back!
        this.setState({
          plants: respo.data
        }).catch(e=>{

        })
      })
    }

  render() {
    var plants_list = this.state.plants.map((plant) => {
      return <Plant name={plant.common_name} id={plant.id} sci_name={plant.scientific_name} />
    })
    return (
      <div className="App">
        <header className="page-header">
          <a href="#default" className="logo">Cactus</a>

          <div className="header-right">
            <a className="active" href="#home">my plants</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
          </div>
          
        </header>

        <div className="contant">
          {plants_list}
        </div>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
