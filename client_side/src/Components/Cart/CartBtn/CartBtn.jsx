import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './CartBtn.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import FloatCart from '../FloatCart/FloatCart';
const CartBtn = () => {

    const [showFloatCart, setShowFloatCart] = useState(false);

    return (
        <React.Fragment>
            {!showFloatCart ?
                <Col xs={2} onClick={() => setShowFloatCart(true)} className="col_cart_icon" >
                    <AiOutlineShoppingCart className="cart_icon" />
                </Col> :
                <FloatCart showFloatCart={showFloatCart} setShowFloatCart={setShowFloatCart} />
            }
        </React.Fragment>
    )
}

export default CartBtn;