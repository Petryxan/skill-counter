import React, { Component } from 'react';
import { connect } from 'react-redux'

class ListItem extends Component {
    render() {

        const array = this.props.counter.foodList.map((el) => {
            return <li key={el.key}>{el.name}</li>;
        })
        console.log(array)
        return (
            <div>
                {array}
            </div>
        );
    }
}

 const mapStateToProps = (state) => {
    return {
        counter: state.counter  
    }
}

export default connect(mapStateToProps) (ListItem);