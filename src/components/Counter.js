import React from 'react';
import { useSelector } from 'react-redux';

export function Counter() {
    const count = useSelector((state) => {
        return state.count;
    });

    return (
        <>
            <h1>{count}</h1>
            <button>Increment</button>
            <button>Decrement</button>
        </>
    );
};