import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, addName } from "../redux/actions/testHooksAction";

const TestHooks = () => {
  const [datas, setData] = useState(false);
  // const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const list = useSelector((state) => state.test.item);
  const name = useSelector((state) => state.test.name);
  const dispatch = useDispatch();

  const onChangeHandler = (text) => {
    setValue2(text.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const inputValue = value2.trim();
    if (!inputValue) return console.log("NOOOO");

    console.log(inputValue);
    setValue2("");
    dispatch(addName(inputValue));
  };

  return (
    <div>
      <h1>TestHooks</h1>
      <h2>Add item {list.toString()}</h2>
      <span>
        <input defaultValue={list} />
        <button onClick={() => dispatch(addItem())}>
          Change state Redux + {list.toString()}
        </button>

        <img src="https://picsum.photos/100/103"/>
      </span>
      <input onChange={() => setValue("Value changed")} value={value} />
      <button onClick={() => setData(!datas)}>Add + {datas.toString()}</button>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={value2}
          onChange={(text) => onChangeHandler(text)}
        />
        <button>addItem</button>
        <p>{name}</p>
      </form>
    </div>
  );
};

export default TestHooks;
