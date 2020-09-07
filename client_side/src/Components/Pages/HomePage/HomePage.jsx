import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import '../../../App.css';
import './HomePage.css';
import CartBtn from '../../Cart/CartBtn/CartBtn';
import ItemCard from '../../Cards/ItemCard/ItemCard';
import Button_1 from '../../Buttons/Button_1/Button_1';
import { GoThreeBars } from 'react-icons/go';
import NavBar from './NavBar'

function HomePage() {

    const [showCatagories, setShowCatagories] = useState(false);

    const TMP_PRODUCTS = [
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
            productName: 'דשגש  שדבש',
            productPrice: '100',
            productDescription: 'שדגדשגד גדש דשג  שד שדששדשדד  דש דשדג שד ',
            importantNotes: [],
            isPopular: false,
        },
        {
            productName: 'שדגשדג',
            productPrice: '123',
            productDescription: 'שדגדשגד גדש דשג שדג שד ',
            importantNotes: ['פיקנטי'],
            isPopular: true,
        },
        {
            productName: 'דשגש  שדבש',
            productPrice: '100',
            productDescription: 'שדגדשגד גדש דשג  שד שדששדשדד  דש דשדג שד ',
            importantNotes: ['ללא גלוטן', 'פיקנטי'],
            isPopular: false,
        },
        {
            productName: 'שדגשדג',
            productPrice: '123',
            productDescription: 'שדגדשגד גדש דשג שדג שד ',
            importantNotes: [],
            isPopular: true,
        },
        {
            productName: 'דשגש  שדבש',
            productPrice: '100',
            productDescription: 'שדגדשגד גדש דשג  שד שדששדשדד  דש דשדג שד ',
            importantNotes: ['ללא גלוטן', 'טבעוני'],
            isPopular: false,
        }
    ]

    const TMP_CATAGOIRES = ['נודלס', 'מרקים', 'אורז', 'שתיה קרה', 'שתיה חמה', 'קינוחים']

    const handleClickIconBars = () => {
        setShowCatagories(!showCatagories);
    }


    return (
        <React.Fragment>
            <Row className="nav">
                <div><h2> תפריט </h2></div>
                <div><img className="logo_img" src={require('../../../img/logo.png')} /></div>
            </Row>
            <Row className="menu_row">
                <NavBar TMP_CATAGOIRES={TMP_CATAGOIRES} />
            </Row>
            <Row className="d-flex justify-content-center">
                {TMP_PRODUCTS.map((item, index) => <ItemCard key={index} item={item} />)}
            </Row>
            <CartBtn />
        </React.Fragment >

    );
}

export default HomePage;
