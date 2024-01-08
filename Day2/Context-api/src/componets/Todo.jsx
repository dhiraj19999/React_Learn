import { TodoItemsContext } from "../store/todo-item";
import { useContext } from "react";

function Todo({ items }) {
  const ItemfromContext = useContext(TodoItemsContext);
  return (
    <>
      {ItemfromContext.map((el, ind) => {
        return (
          <h4 key={ind}>
            {el.name} == {el.date}
          </h4>
        );
      })}
    </>
  );
}

export default Todo;
