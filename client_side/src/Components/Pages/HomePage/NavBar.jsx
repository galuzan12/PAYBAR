import React from 'react';
import '../../../App.css';
import './HomePage.css';
import { Row, Col } from 'react-bootstrap';

export default function NavBar(props) {



    return (
        <header class="scroll">
            
            <nav>
                {props.TMP_CATAGOIRES.map((catagory, index) =>
                    <a className="catagory" id={catagory + index} href="a">{index == 0 || index==props.TMP_CATAGOIRES.lenght ? catagory : "| "+catagory}</a>)}
            </nav>
           
        </header>
    )
}