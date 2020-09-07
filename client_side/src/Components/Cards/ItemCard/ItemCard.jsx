import React from 'react';
import './ItemCard.css';
import { Row, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai'
function ItemCard(props) {
    const { productName, productPrice, productDescription, importantNotes, isPopular } = props.item;

    const addProductToCart = () => {
        alert("bbb")
    }
    return (
        <Row onClick={addProductToCart} className="itemcard_row">
            <div className="itemcard_img_col">
                <img className="itemcard_img" src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
            </div>
            <div className="itemcard_text">
                <div className="productName"> {productName} </div>
                <div  className="productPrice"> {productPrice} ₪</div>
                <div  className="productDescription"> {productDescription} </div>
                    <div className="itemcard_text_row">
                        <div className="importantNotes">
                            {
                                importantNotes.map((item, key) =>
                                    key + 1 != importantNotes.length ? item + "," : item
                                )}
                        </div>

                    </div>

                    {isPopular && <Row  className="itemcard_text_row">
                        <div className="POPULAR"> POPULAR <AiFillStar color="#FFD700" />  </div>

                    </Row>}
                
            </div>
        </Row>
    );
}

export default ItemCard;
