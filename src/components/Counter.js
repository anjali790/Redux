import React from 'react';
import { useSelector } from 'react-redux';

export function Counter() {
    const count = useSelector((state) => {
        return state.counter;
    })

    return (
        <>
            <div>{count}</div>
            <button>Increment</button>
            <button>Decrement</button>
        </>
    );
};
