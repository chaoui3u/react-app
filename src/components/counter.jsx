import React, { Component } from 'react';


class Counter extends Component {



    handleIncrement=product=>{
        console.log(product);
        this.setState({value: this.state.value+1});
    }

    render() { 
        console.log('prop',this.props);
        return (
        <React.Fragment>
            {this.props.children}
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
             onClick={()=> this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() =>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

        </React.Fragment>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;