import React from 'react';
import './ItemCard.css';
import { Row, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai'
function ItemCard(props) {
    const { productName, productPrice, productDescription,importantNotes, isPopular } = props.item;
    return (
        <Row className="itemcard_row">
            <Col xs={4} className="itemcard_img_col">
                    <img className="itemcard_img" src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
            </Col>
            <Col xs={8} className="itemcard_text_col">
                <Row className="itemcard_text_row">
                    <Col xs={8} className="productName"> {productName} </Col>
                    <Col xs={4} className="productPrice"> {productPrice} ₪</Col>
                </Row>
                
                <Row  className="itemcard_text_row">
                    <Col xs={12} className="productDescription"> {productDescription} </Col>
                </Row>
                
                <Row>
                <Col xs={7} className="itemcard_text_row">
                        <Col className="importantNotes"> 
                        {
                        importantNotes.map((item,key)=>
                        key +1 != importantNotes.length ? item + "," : item
                        )}
                        </Col>
                    
                </Col>
                
                {isPopular && <Col xs={5}  className="itemcard_text_row">
                    <Col className="POPULAR"> POPULAR <AiFillStar color="#FFD700" />  </Col>

                </Col>}
                </Row>
            </Col>
        </Row>
    );
}

export default ItemCard;
