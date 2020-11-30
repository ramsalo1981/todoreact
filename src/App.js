import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItems from "./components/AddItems/AddItems";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "rami", age: "25" },
      { id: 2, name: "wesam", age: "24" },
      { id: 3, name: "anna", age: "21" },
    ],
  };

  deleteItem = (id) => {
    // (1) way
    // let items = this.state.items;
    // let i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);
    // this.setState(items);

    //(2) way
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  additem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>

        <TodoItems itemsProps={this.state.items} deleteItem={this.deleteItem} />
        <AddItems additem={this.additem} />
      </div>
    );
  }
}

export default App;
