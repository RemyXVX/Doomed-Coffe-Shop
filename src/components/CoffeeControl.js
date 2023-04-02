import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
import EditCoffee from "./EditCoffee";
import CoffeeDetail from "./CoffeeDetail";


class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee !=null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ( {
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    };
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    })
  }

  handleChangeSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id) [0];
    this.setState ({selectedCoffee: selectedCoffee});
  }


  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
    .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    });
  }

  handleDeleteCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    })
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing){
      currentlyVisibleState = <EditCoffee
                                coffee={this.state.selectedCoffee}
                                onEditTicket={this.handleEditingCoffeeInList} />
      buttonText= "Return To List";
    } else if (this.state.selectedCoffee != null){
      currentlyVisibleState = <CoffeeDetail
                                coffee = {this.state.selectedCoffee} 
                                onClickingEdit = {this.handleEditClick} 
                                onClickingDelete = {this.handleDeleteCoffee} />
      buttonText= "Return to List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText="Return To List"
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} />
      buttonText="Add Coffee"
    }
  
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl;