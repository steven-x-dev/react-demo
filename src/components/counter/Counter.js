import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        console.log('initial');
    }

    componentWillUnmount() {
        console.log("Bye bye");
    }

    componentDidMount() {
        console.log('Mount');
    }
    componentDidUpdate() {
        console.log('Update');
    };

    render() {
        return <div>
            <h4>Counter: {this.props.id}</h4>
            <button className='btn btn-danger m-2' onClick={() => this.props.onDelete(this.props.id)} >Delete</button>
            <button className='btn btn-danger m-2' onClick={() => this.props.handleDecrement(this.props.id)}>Decrement -</button>
            <span className='badge badge-info p-2'>{this.props.value}</span>
            <button className='btn btn-success m-2' onClick={() => this.props.handleIncrement(this.props.id)}>Increment +</button>
        </div>
    }
}

export default Counter;