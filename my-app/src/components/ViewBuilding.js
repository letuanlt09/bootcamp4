import React from 'react'



class ViewBuilding extends React.Component {
	render() {
		
		const {selectedBuilding,data} = this.props
		const {code,name,coordinates,address} = data[selectedBuilding-1]
		const idList = 
		(
		

				<li key={selectedBuilding-1}>
					<li>Code: {code}</li>
					<li>Name: {name}</li>
					<li>Coordinates:
						{coordinates &&
						<ul>
							<li>Latitude: {coordinates.latitude}</li>
							<li>Longitude: {coordinates.longitude}</li>
						</ul>
						}
					</li>
					<li>Address: {address}</li>
				</li>
				
			)
		
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information</i>
					<ul>
						{idList}
					</ul>
				</p>
			</div>
		);
	}
}
export default ViewBuilding;

