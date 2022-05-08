import { useState, useRef } from "react";
import List from "./components/List";

function App() {
  const [state, setstate] = useState([]);
  const [current, setCurrent] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({ id: 0, text: "" });

  const handleEditChange = (e) => {
    let value = e.target.value;
    setCurrentTodo({ ...currentTodo, text: value });
  };
  const handleEdit = (index) => {
    setCurrentTodo({ id: index, text: state[index] });
    setIsEditing(true);
  };
  const handleSave = () => {
    setstate((state) => {
      let arr = state;
      arr[currentTodo.id] = currentTodo.text;
      return arr;
    });
    setIsEditing(false);
  };

  const changeHandler = (e) => {
    setCurrent(e.target.value);
  };
  const handleSubmit = () => {
    if (current) {
      setstate((val) => {
        return [...val, current];
      });
    }
    setCurrent("");
  };

  const completeHandler = (id) => {
    setstate((val) => {
      return val.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="container bg-dark rounded mt-5 w-50">
        <div className="row inline justify-content-center pt-4 ">
          <header className="col-3">
            <h1 className="text-white">TODO LIST</h1>
          </header>
          <main className="col-6 m-2">
            <div>
              <input
                className="form-control"
                onChange={changeHandler}
                value={current}
                name="input"
              />{" "}
              <button onClick={handleSubmit} className="btn btn-primary">
                Add
              </button>
            </div>
          </main>
        </div>
        <List
          list={state}
          dlt={completeHandler}
          handleEdit={handleEdit}
          isEdit={isEditing}
          handleSave={handleSave}
          currentTodo={currentTodo}
          handleEditChange={handleEditChange}
        />
      </div>
    </>
  );
}

export default App;
