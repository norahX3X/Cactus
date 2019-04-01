import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './plants.css';

const axios = require('axios');

//https://trefle.io/some-url?token=R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      plants: [],
      my_plants: [],
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

var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
    axios({
      url: 'https://trefle.io/api/plants?q=strawberry&token=R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09',
    })
    .then(data => {
      console.log(data)
       return data.data
    })
    .then(respo => {
        console.log(respo) // take a look at what you get back!
        // this.setState({current: response})
      })
  }

  render() {

    return (
      <div className="App">
<header className="page-header">
  <a href="#default" className="logo">Cactus</a> 
  <div className="header-right">

  {/* <a>my plants</a> */}

    <a className="active" href="#home">my plants</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    </div>

</header>
<div className="contant">
<Card className='card' color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card color=''>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    {/* <Button color="danger">Danger!</Button>
    <Card body inverse color="success">
    <CardTitle>Special Title Treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="secondary">Button</Button>
  </Card> */}
  </div>        

      </div>
    );
  }
}

export default App;
