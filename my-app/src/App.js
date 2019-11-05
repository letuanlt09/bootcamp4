import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding:1,
      tempData: this.props.data
    };
  }


  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addData(data){
    this.setState(state=>{
      const tempData = state.tempData.push(data);
      return {
        ...
        tempData
      }

    })
  }

  deleteData(id){
    this.setState(state=>{
      const tempData = state.tempData;
      for(var i = 0; i < tempData.length;i++)
      {
        if(tempData[i].id === id)
          tempData.splice(i,1)
      }
      return {
        ...
        tempData
      }
    })
  }

  render() {
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        {/* <AddBuilding 
          addData = {this.addData.bind(this)}
          currentId = {this.state.tempData[this.state.tempData.length-1].id}
        />  */}
        <Search 
          filterText = {this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.tempData}
                    filterText = {this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                selectedBuilding={this.state.selectedBuilding}
                data={this.state.tempData}
              />
              <RemoveBuilding 
                deleteData={this.deleteData.bind(this)}
                selectedBuilding={this.state.selectedBuilding}
              />
              <AddBuilding 
                addData = {this.addData.bind(this)}
                currentId = {this.state.tempData[this.state.tempData.length-1].id}
              />

            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
