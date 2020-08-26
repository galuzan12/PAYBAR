import React from 'react';
import './Button_1.css';
import { Row, Col } from 'react-bootstrap';

function Button_1(props) {
    const { backgroundColor, text } = props;
    const style = {
        backgroundColor: backgroundColor,
        borderRadius: '24px',
    }
    return (
        <div className="button_1_div" style={style}>
            {text}
        </div>
    );
}

export default Button_1;
