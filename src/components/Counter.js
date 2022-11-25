import React from 'react';
import { useSelector } from 'react-redux';
import './Counter.css';

export function Counter() {
    const count = useSelector((state) => {
        return state.count;
    });

    return (
        <>
            <div className='counter_div'>
                <h1>{count}</h1>
                <button className='button'>Increment</button>
                <button className='button'>Decrement</button>
            </div>
        </>
    );
};