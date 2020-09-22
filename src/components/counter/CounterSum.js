import React from 'react';

const sumCounters = counters => counters.reduce(
    (acc, counter) => acc += counter.value, 0)

const CounterSum = ({counters}) => <h1>Sum: {sumCounters(counters)}</h1>;

export default CounterSum;