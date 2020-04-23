import React, { Component } from "react";
import { connect } from "react-redux";
import {
  signIn,
  incrementAction,
  decrementAction,
  setAction,
  setCountAction,
  setAction2,
} from "./actions/logerAction";
import ListItem from './Componens/listItem'


class App extends Component {
  state = {
    label: "",
    currentValue: "",
  };

  onChangeHandler = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.set(this.state.label);
    this.setState({
      label: "",
    });
    // this.props.setcount(this.props.counter.koli)
  };

  OnChangeMy = (e) => {
    this.setState({
      currentValue: e.target.value,
    });
    console.log(this.state.currentValue);
  };
  onSubmitMy = (event) => {
    event.preventDefault();
    this.props.set2(this.state.currentValue, this.props.main.skill1Set );
    this.setState({ currentValue: "" });
    console.log(this.props.main.skill1Set)
  };

  render() {
  
    

    return (
      <div>
        <div>counter: </div>
        {this.props.counter.koli}
        <button onClick={this.props.signIn}>ooo!!!!!!!!!</button>

        {this.props.logger.toString()}
        <div>
          <button onClick={this.props.incrementAction}>incrementAction</button>
          {this.props.counter.lol}
        </div>
        <div>
          <button onClick={this.props.decrementAction}>decrementAction</button>
          {this.props.counter.lol}
        </div>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.label}
            placeholder="Name"
            onChange={this.onChangeHandler}
          />
          <div>
            <button>setAction</button>
          </div>
        </form>
        {this.props.counter.mn * this.props.counter.lol}

        <div>
          <form onSubmit={this.onSubmitMy}>
            <input
              value={this.state.currentValue}
              placeholder="Input item"
              onChange={this.OnChangeMy}
            />

            <button>click me</button>
          </form>
           {Date.now()}
         <ListItem/>
        
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    logger: state.logger,
    main: state.main
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: () => dispatch(signIn()),
    incrementAction: () => dispatch(incrementAction()),
    decrementAction: () => dispatch(decrementAction()),
    set: (text) => dispatch(setAction(text)),
    set2: (text2) => dispatch(setAction2(text2)),
    setcount: (textcount) => dispatch(setCountAction(textcount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
