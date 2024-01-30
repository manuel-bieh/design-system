import React, { useState, useEffect } from 'react';

export const Frontend = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Frontend Test Component loaded');
    }, []);

    return (
        <div style={{ padding: 16 }}>
            <p>{counter}</p>
            <button type="button" onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
            <button type="button" onClick={() => setCounter(counter - 1)}>
                Decrement
            </button>
        </div>
    );
};
