import React from 'react'
import {Button} from 'react-bootstrap'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
class RemoveBuilding extends React.Component{
    
    deleteData(){
        this.props.deleteData(this.props.selectedBuilding)
    }
    
    render (){

        return (
            <div>   
                <ButtonToolbar>
                    <Button variant="outline-danger" onClick={this.deleteData.bind(this)}>
                        Delete Building 
                    </Button>
                </ButtonToolbar>
 
            </div>

        );
    }
}
export default RemoveBuilding;