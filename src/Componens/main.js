import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../App";
import styles from "./styles_main.module.css";
import {
  incskill1Action,
  incskill2Action,
  incskill3Action,
  decskill1Action,
  decskill2Action,
  decskill3Action,
  setskill1Action,
  setskill2Action,
  setskill3Action,
  setTotal,
  set1default,
  set2default,
  set3default,
} from "../actions/mainAction";

class Main extends Component {
  state = {
    validate: false,
    validate2: false,
    validate3: false,
    validateSet: true,
    validateSet2: true,
    validateSet3: true,
    validateSetminus1: true,
    validateSetminus2: true,
    validateSetminus3: true,
  };

  onSubmit = (event) => {
    event.preventDefault();

    // Блокує кнопку + якщо загальна кількість скілів менша 0
    if (this.props.main.totalSkill <= 0) {
      this.setState({
        validate: true,
      });
    } else {
      this.setState({
        validate: false,
      });
    }
    //

    if (this.props.main.skill1 > this.props.main.skill1Set) {
      this.setState({
        validateSet: false,
      });
    } else {
      this.setState({
        validateSet: true,
      });
    }

    if (this.props.main.skill2 > this.props.main.skill2Set) {
      this.setState({
        validateSet2: false,
      });
    } else {
      this.setState({
        validateSet2: true,
      });
    }

    if (this.props.main.skill3 > this.props.main.skill3Set) {
      this.setState({
        validateSet3: false,
      });
    } else {
      this.setState({
        validateSet3: true,
      });
    }

    if (this.props.main.totalSkill <= 0) {
      if (this.props.main.skill1 === this.props.main.skill1Set) {
        this.setState({
          validateSet: true,
        });
      } else {
        this.setState({
          validateSet: false,
        });
      }
    }

    if (this.props.main.totalSkill <= 0) {
      if (this.props.main.skill2 === this.props.main.skill2Set) {
        this.setState({
          validateSet2: true,
        });
      } else {
        this.setState({
          validateSet2: false,
        });
      }
    }

    if (this.props.main.totalSkill <= 0) {
      if (this.props.main.skill3 === this.props.main.skill3Set) {
        this.setState({
          validateSet3: true,
        });
      } else {
        this.setState({
          validateSet3: false,
        });
      }
    }
    // блокує кнопку - що б не можна було зменшувати рівень встановленго скіла
    if (this.props.main.skill1 <= this.props.main.skill1Set) {
      this.setState({
        validateSetminus1: true,
      });
    } else {
      this.setState({
        validateSetminus1: false,
      });
    }

    if (this.props.main.skill2 <= this.props.main.skill2Set) {
      this.setState({
        validateSetminus2: true,
      });
    } else {
      this.setState({
        validateSetminus2: false,
      });
    }

    if (this.props.main.skill3 <= this.props.main.skill3Set) {
      this.setState({
        validateSetminus3: true,
      });
    } else {
      this.setState({
        validateSetminus3: false,
      });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.header}>
            Доступні рівні: {this.props.main.totalSkill}
          </div>

          <div className={styles.blockbtn}>
            <div className={styles.title}>
              <span>title</span>
              <span>Level: {this.props.main.skill1Set}</span>
            </div>

            <form onSubmit={this.onSubmit}>
              <div className={styles.btn}>
                <button
                  disabled={this.state.validateSetminus1}
                  onClick={this.props.dec1}
                >
                  -
                </button>
                <div className={styles.output}>{this.props.main.skill1}</div>
                <button
                  disabled={this.state.validate}
                  onClick={this.props.inc1}
                >
                  +
                </button>
                <button
                  disabled={this.state.validateSet}
                  onClick={this.props.set1}
                >
                  Set
                </button>
              </div>
            </form>
          </div>

          <div className={styles.blockbtn}>
            <div className={styles.title}>
              <span>title</span>
              <span>Level: {this.props.main.skill2Set}</span>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className={styles.btn}>
                <button
                  disabled={this.state.validateSetminus2}
                  onClick={this.props.dec2}
                >
                  -
                </button>
                <div className={styles.output}>{this.props.main.skill2}</div>
                <button
                  disabled={this.state.validate}
                  onClick={this.props.inc2}
                >
                  +
                </button>
                <button
                  disabled={this.state.validateSet2}
                  onClick={this.props.set2}
                >
                  Set
                </button>
              </div>
            </form>
          </div>

          <div className={styles.blockbtn}>
            <div className={styles.title}>
              <span>title</span>
              <span>Level: {this.props.main.skill3Set}</span>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className={styles.btn}>
                <button
                  disabled={this.state.validateSetminus3}
                  onClick={this.props.dec3}
                >
                  -
                </button>
                <div className={styles.output}>{this.props.main.skill3}</div>
                <button
                  disabled={this.state.validate}
                  onClick={this.props.inc3}
                >
                  +
                </button>
                <button
                  disabled={this.state.validateSet3}
                  onClick={this.props.set3}
                >
                  Set
                </button>
              </div>

              <button onClick={this.props.settotal}>Set + 5</button>
            </form>
          </div>
        </div>
        <div className={styles.app}>
          <App />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    main: state.main,
    logger: state.logger,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc1: () => dispatch(incskill1Action()),
    inc2: () => dispatch(incskill2Action()),
    inc3: () => dispatch(incskill3Action()),
    dec1: () => dispatch(decskill1Action()),
    dec2: () => dispatch(decskill2Action()),
    dec3: () => dispatch(decskill3Action()),
    set1: () => dispatch(setskill1Action()),
    set2: () => dispatch(setskill2Action()),
    set3: () => dispatch(setskill3Action()),
    def1: () => dispatch(set1default()),
    def2: () => dispatch(set2default()),
    def3: () => dispatch(set3default()),
    settotal: () => dispatch(setTotal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
