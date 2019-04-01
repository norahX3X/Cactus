import React, { Component } from 'react';
import './plants.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
const axios = require('axios');
//API Authentcation 
const token='R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09';

///random images
//https://hdwallsource.com/img/2014/11/bee-26601-27293-hd-wallpapers.jpg
//https://cdn.shopify.com/s/files/1/1124/9666/files/plants-menu-image_500x.jpg?v=1545416545
//

class Plant extends Component {
    constructor(props){
      super();

    }
    componentDidMount() {
      axios({
        url: `https://trefle.io/api/plants/${this.props.id}?token=R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09`,
      }).then(respo => {
          console.log(respo.data) // take a look at what you get back!
          // this.setState({
          //   plants: respo
          // })
    })
  }
  render() {
    return (
      <div className="plant_card">
      <Card className='card' color='light'>
        <CardImg className="card-img" top width="100%" src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/topic_centers/1047-The_Best_Air-Purifying_Plants_For_Your_Home-1296x728-Spider_Plant.jpg?w=1155&h=1528" alt="Card image cap" />
        <CardBody>
          <CardTitle>plant name: {this.props.name}/{this.props.sci_name}</CardTitle>
          <CardSubtitle>plant type:  </CardSubtitle>
          <CardText>grouth seassons: </CardText>
          <Button className='card-butt float-right'>Add to my plants</Button>
        </CardBody>
      </Card>
      </div>
    );
  }
}

export default Plant;
