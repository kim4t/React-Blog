/*eslint-disable*/
import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["post3", "post2", "post1"]);
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((c) => c + 1);
  };
  const change = () => {
    let copy = [...title];
    copy[0] = "haha";
    setTitle((title) => copy);
  };
  const sort = () => {
    let copy = [...title].sort();
    setTitle(copy);
  };
  return (
    <div>
      <div className="black-nav">
        <h4>Blog</h4>
        <button onClick={sort}>Sort</button>
      </div>
      <div className="list">
        <h4>
          {title[0]}
          <span onClick={onClick}>👍</span>
          {count}
        </h4>
        <p>3/29</p>
        <button onClick={change}>Change</button>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>3/29</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>3/29</p>
      </div>
      <Model />
    </div>
  );
}

function Model() {
  return (
    <div className="modal">
      <h4>Title</h4>
      <p>Date</p>
      <p>Contents</p>
    </div>
  );
}

export default App;
