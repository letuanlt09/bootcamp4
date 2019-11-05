import React from 'react';
// import {Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Button from 'muicss/lib/react/button';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
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
				<input 
					type="text" 
					ref = {(value)=>this.myCode = value}
					placeholder="Code"
					onChange={this.updateCode.bind(this)}
				/>
			</form>
				
			<form>
			<input 
				type="text" 
				ref = {(value)=>this.myName = value}
				placeholder="Name"
				onChange={this.updateName.bind(this)}
			/>
			</form>
		
			<form>
			<input 
				type="text" 
				ref = {(value)=>this.myLatitude = value}
				placeholder="Latitude"
				onChange={this.updateLatitude.bind(this)}
			/>
			</form>
			<form>
			<input 
				type="text" 
				ref = {(value)=>this.myLongtitude = value}
				placeholder="Longitude"
				onChange={this.updateLongitude.bind(this)}
			/>
			</form>
			<form>
			<input 
				type="text" 
				ref = {(value)=>this.myAddress = value}
				placeholder="Address"
				onChange={this.updateAddress.bind(this)}
			/>
			</form>
			<Button variant="fab" color="danger" onClick={this.addData.bind(this)}>
				+
			</Button>
		</div>	
    );
	
}}
export default AddBuilding;