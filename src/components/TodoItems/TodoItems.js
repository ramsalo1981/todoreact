import React from "react";
import "./TodoItems.css";
const TodoItems = (props) => {
  const { itemsProps, deleteItem } = props;
  let length = itemsProps.length;
  const ListItems = length ? (
    itemsProps.map((item) => {
      return (
        <div key={item.id}>
          <span className="name">{item.name}</span>
          <span className="age">{item.age}</span>
          <span className="action icon" onClick={() => deleteItem(item.id)}>
            &times;
          </span>
        </div>
      );
    })
  ) : (
    <p>there is no items to show</p>
  );

  return (
    <div className="ListItems">
      <div>
        <span className="name title">Name</span>
        <span className="age title">Age</span>
        <span className="action title">Action</span>
      </div>
      {ListItems}
    </div>
  );
};

export default TodoItems;
