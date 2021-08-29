import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    let inputClass = [classes.Input];
    if (props.isValid) {
        inputClass.push(classes.Valid);
    }
    
    return (
        <input className={inputClass.join(' ')}
            type={props.type}
            onChange={props.onChangeListener}
            placeholder={props.placeholder}
            value={props.value} />
    );
};

export default Input;