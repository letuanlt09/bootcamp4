import React from 'react'
import {Button} from 'react-bootstrap'
class RemoveBuilding extends React.Component{
    
    deleteData(){
        this.props.deleteData(this.props.selectedBuilding)
    }
    
    render (){

        return (
            <div>   
                <Button onClick={this.deleteData.bind(this)}>
					Delete Building
				</Button>
            </div>

        );
    }
}
export default RemoveBuilding;