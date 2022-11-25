import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Counter.css';

export function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => {
        return state.count;
    });

    const handleIncrement = () =>{
        dispatch({'type': 'increment'});
    };

    const handleDecrement = () =>{
        dispatch({'type': 'decrement'});
    };

    return (
        <>
            <div className='counter_div'>
                <h1>{count}</h1>
                <button className='button' onClick={handleIncrement}>Increment</button>
                <button className='button'onClick={handleDecrement}>Decrement</button>
            </div>
        </>
    );
};