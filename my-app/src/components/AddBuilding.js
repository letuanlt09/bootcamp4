import React from 'react';
// import {Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
class AddBuilding extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
        	code: '',
        	name: '',
        	latitude: '',
           	longitude: '',
       		address: ''	

		};
	  }
updateCode(){

	this.setState({
		code:this.myCode.value
	  })
}
updateName(){
	this.setState({
		name: this.myName.value
	  })

}
updateLatitude(){
	this.setState({
		latitude: this.myLatitude.value
	  })
}
updateLongitude(){
	this.setState({
		longitude : this.myLongtitude.value
	  })
}
updateAddress(){
	this.setState({
		address : this.myAddress.value
	  })
}
addData(){
		var idNum = this.props.currentId+1;
		// var idNum = 149;
		
		var building =  {
			id: idNum,
        	code: this.state.code,
        	name: this.state.name,
        	coordinates: {
        		latitude: this.state.latitude,
           		longitude: this.state.longitude
    		},
       		address: this.state.address	
		}
		idNum++;
		 this.props.addData(building)
	} 	
	
render(){
    return(
		<div>
           <form>
		   		<Form.Group controlId="formBasicEmail">
    				<Form.Label>Code</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="Enter code" 
						ref = {(value)=>this.myCode = value}
						onChange={this.updateCode.bind(this)}
					/>
    				<Form.Text className="text-muted">
     				Ex: AAA, ABC, ADE, ...
    				</Form.Text>
  					</Form.Group>
				{/* <input 
					type="text" 
					ref = {(value)=>this.myCode = value}
					placeholder="Code"
					onChange={this.updateCode.bind(this)}
				/> */}
			</form>
				
			<form>
				<Form.Group controlId="formBasicEmail">
    				<Form.Label>Name</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="Enter name" 
						ref = {(value)=>this.myName = value}
						onChange={this.updateName.bind(this)}
					/>
    				
  				</Form.Group>
			{/* <input 
				type="text" 
				ref = {(value)=>this.myName = value}
				placeholder="Name"
				onChange={this.updateName.bind(this)}
			/> */}
			</form>
		
			<form>
				<Form.Group controlId="formBasicEmail">
    				<Form.Label>Latitude</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="Enter latitude" 
						ref = {(value)=>this.myLatitude = value}
						onChange={this.updateLatitude.bind(this)}
					/>
  				</Form.Group>
			{/* <input 
				type="text" 
				ref = {(value)=>this.myLatitude = value}
				placeholder="Latitude"
				onChange={this.updateLatitude.bind(this)}
			/> */}
			</form>
			<form>
				<Form.Group controlId="formBasicEmail">
    				<Form.Label>Longitude</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="Enter longitute" 
						ref = {(value)=>this.myLongtitude = value}
						onChange={this.updateLongitude.bind(this)}
					/>
  				</Form.Group>
			{/* <input 
				type="text" 
				ref = {(value)=>this.myLongtitude = value}
				placeholder="Longitude"
				onChange={this.updateLongitude.bind(this)}
			/> */}
			</form>
			<form>
				<Form.Group controlId="formBasicEmail">
    				<Form.Label>Address</Form.Label>
					<Form.Control 
						type="email" 
						placeholder="Enter address" 
						ref = {(value)=>this.myAddress = value}
						onChange={this.updateAddress.bind(this)}
					/>
  				</Form.Group>
			{/* <input 
				type="text" 
				ref = {(value)=>this.myAddress = value}
				placeholder="Address"
				onChange={this.updateAddress.bind(this)}
			/> */}
			</form>
			<ButtonToolbar>
				<Button variant="outline-primary" onClick={this.addData.bind(this)}>
					+
				
				</Button>
			</ButtonToolbar>
			{/* <Button variant="fab" color="danger" onClick={this.addData.bind(this)}>
				+
			</Button> */}
		</div>	
    );
	
}}
export default AddBuilding;