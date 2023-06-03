import React from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <button className={classes.button} onClick={() => setCount(count - 1)}>-</button>
            {count}
            <button className={classes.button} onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

export default Counter;
