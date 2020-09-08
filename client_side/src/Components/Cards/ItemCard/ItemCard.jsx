import React from 'react';
import '../../../App.css';
import './ItemCard.css';
import { Row, Col } from 'react-bootstrap';
import { GiQueenCrown } from 'react-icons/gi'
function ItemCard(props) {
    const { productName, productPrice, productDescription, importantNotes, isPopular } = props.item;

    const addProductToCart = () => {
        alert("bbb")
    }

    // בינתייםם
    const countItem = 2;
    return (
        <Row onClick={addProductToCart} className="itemcard_row">
            <div className="itemcard_img_col">
                <img className="itemcard_img" src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
            </div>
            <div className="itemcard_text">
                <div className="productName"> {productName} </div>
                <div className="productPrice"> {productPrice} ₪</div>
                <div className="productDescription"> {productDescription} </div>
                <div className="itemcard_text_row">
                    <div className="importantNotes">
                        {
                            importantNotes.map((item, key) =>
                                key + 1 != importantNotes.length ? item + "," : item
                            )}
                    </div>

                </div>

                {isPopular && <Row className="itemcard_text_row">
                    <div className="POPULAR"> POPULAR <GiQueenCrown color="#FFD700" />  </div>

                </Row>}

                <Row className="addToCart">
                    <div class="addToCart_text">הוסף לעגלה</div>  
                    <Row>
                    <button class="plus">+</button>
                    <div class="CountItem">{countItem}</div>
                    <button class="minus">-</button>
                    </Row>
                </Row>

            </div>
        </Row>
    );
}

export default ItemCard;
