import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import './FloatCart.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const TMP_PRODUCTS_FOR_FLOAT_CART = [
    {
        productName: 'שם המנה',
        productPrice: '123',
        productDescription: ' תיאור המנה - תיאור ארוך בלה בלה בלה',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    },
    {
        productName: 'שדגשדג',
        productPrice: '123',
        productDescription: 'שדגדשגד גדש דשג שדג שד ',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    }, {
        productName: 'שם המנה',
        productPrice: '123',
        productDescription: ' תיאור המנה - תיאור ארוך בלה בלה בלה',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    },
    {
        productName: 'שדגשדג',
        productPrice: '123',
        productDescription: 'שדגדשגד גדש דשג שדג שד ',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    },
    {
        productName: 'שם המנה',
        productPrice: '123',
        productDescription: ' תיאור המנה - תיאור ארוך בלה בלה בלה',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    },
    {
        productName: 'שדגשדג',
        productPrice: '123',
        productDescription: 'שדגדשגד גדש דשג שדג שד ',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    },
    {
        productName: 'שם המנה',
        productPrice: '123',
        productDescription: ' תיאור המנה - תיאור ארוך בלה בלה בלה',
        importantNotes: ['ללא גלוטן', 'פיקנטי'],
        isPopular: true,
    },

]

const FloatCart = (props) => {

    const handleOrderClick = () => {
        // send the order details to server
        alert("send")
    }

    return (
        <Row className="float_cart">
            <Col xs={8} md={2} className="float_cart_productsshow">
                <Col xs={12}>
                    <Row className="float_cart_header_row">
                        <Col>
                            <h6 className="float_cart_header">פריטים שהוזמנו</h6>
                        </Col>
                    </Row>
                    <Row className="products_row_float_cart">
                        {TMP_PRODUCTS_FOR_FLOAT_CART.map((product, index) =>
                            <Col xs={12} className="products_float_cart" key={index}>
                                <Col xs={12}>
                                    <p>{product.productName}</p>
                                </Col>
                                <Col xs={12}>
                                    <p>כמות: {index + 1}</p>
                                </Col>
                                <Col xs={12}>
                                    <p>{product.productPrice * (index + 1)}</p>
                                </Col>
                            </Col>
                        )}
                        <Col className="products_float_cart products_float_cart_order_btn_col" xs={12}>
                            <button onClick={handleOrderClick} className="btn btn-block btn-dark btn_order">להזמנה</button>
                        </Col>
                    </Row>
                </Col>
            </Col>
            <Col xs={4} md={10} onClick={() => props.setShowFloatCart(false)} className="float_cart_restofscreen">
                aaa
            </Col>
        </Row>
    )
}

export default FloatCart;