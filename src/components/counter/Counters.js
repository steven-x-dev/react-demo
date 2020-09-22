import React from 'react';
import Counter from './Counter';
import CounterSum from './CounterSum';

class Counters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [{
                id: 1,
                value: 1
            }, {
                id: 2,
                value: 2
            }, {
                id: 3,
                value: 3
            }, {
                id: 4,
                value: 4
            }]
        }
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Did mount');
    }

    handleDelete = id => {
        this.setState({
            counters: this.state.counters.filter(counter => counter.id !== id)
        })
    }

    
    handleIncrement = id => {
        const updatedCounters = this.state.counters.map(counter => 
            counter.id === id ? 
                {id: id, value: counter.value + 1} : 
                counter);
        this.setState({
            counters: updatedCounters
        })
    }

    handleDecrement = id => {
        const updatedCounters = this.state.counters.map(counter => 
            counter.id === id ? 
                {id: id, value: counter.value - 1} : 
                counter);
        this.setState({
            counters: updatedCounters
        })
    }

    render() {
        console.log('Render');
        return <div>
            <CounterSum counters={this.state.counters} />
            {this.state.counters.map(counter => 
                <Counter 
                    id={counter.id} 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    value={counter.value} 
                    handleIncrement={this.handleIncrement}
                    handleDecrement={this.handleDecrement}
                    />)}
        </div>
    }
}

export default Counters;