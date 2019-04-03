import React, { Component } from 'react';
import './plants.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
  import PlantsDB from './plantDB'

const axios = require('axios');
//API Authentcation 
const token='R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09';

class plant_details extends Component {
  constructor(props){
    super(props)
    this.state={
      more_info:'url',
      temp:'',

    }
  }
/*

"shade_tolerance": "string",
"salinity_tolerance": "string",
"root_depth_minimum": {
"inches": "float",
"cm": "float"
},
"resprout_ability": "string",
"precipitation_minimum": {
"inches": "float",
"cm": "float"
},
"precipitation_maximum": {
"inches": "float",
"cm": "float"
},
"planting_density_minimum": {
"sqm": "float",
"acre": "float"
},
"planting_density_maximum": {
"sqm": "float",
"acre": "float"
},
"ph_minimum": "float",
"ph_maximum": "float",
"moisture_use": "string",
"hedge_tolerance": "string",
"frost_free_days_minimum": "float",
"fire_tolerance": "string",
"fertility_requirement": "string",
"drought_tolerance": "string",
"cold_stratification_required": "string",
"caco_3_tolerance": "string",
"anaerobic_tolerance": "string"
}
*/

  //image from preveuse class
  // componentDidMount() {
    start= () => {   
       axios({
      url: `https://trefle.io/api/plants/${this.props.id}?token=R1ZuUENNOXBnR0RrQkpjSHAxenM5Zz09`,
    }).then(respo => {
        console.log(respo.data) // take a look at what you get back!
        if(respo.data.main_species.sources.source_url != null){
        this.setState({
          more_info: respo.data.main_species.sources.source_url
        })
      }
      if(respo.data.main_species.growth != null){
        this.setState({
          seassons: respo.data.main_species.growth
        })

      }
      // if(){

      // }
  }).cach(e=>{
    //PlantsDB
  })
}
  render() {



    return (
      <div className="info_dialog">
       <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default plant_details;
