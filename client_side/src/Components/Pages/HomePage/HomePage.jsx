import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../../../App.css';
import './HomePage.css';

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
            importantNotes:['ללא גלוטן' , 'פיקנטי'],
            isPopular: true,
        },
        {
            productName: 'שדגשדג',
            productPrice: '123',
            productDescription: 'שדגדשגד גדש דשג שדג שד ',
            importantNotes:['ללא גלוטן' , 'פיקנטי'],
            isPopular: true,
        },
        {
            productName: 'דשגש  שדבש',
            productPrice: '100',
            productDescription: 'שדגדשגד גדש דשג  שד שדששדשדד  דש דשדג שד ',
            importantNotes:[],
            isPopular: false,
        },
        {
            productName: 'שדגשדג',
            productPrice: '123',
            productDescription: 'שדגדשגד גדש דשג שדג שד ',
            importantNotes:[ 'פיקנטי'],
            isPopular: true,
        },
        {
            productName: 'דשגש  שדבש',
            productPrice: '100',
            productDescription: 'שדגדשגד גדש דשג  שד שדששדשדד  דש דשדג שד ',
            importantNotes:['ללא גלוטן' , 'פיקנטי'],
            isPopular: false,
        },
        {
            productName: 'שדגשדג',
            productPrice: '123',
            productDescription: 'שדגדשגד גדש דשג שדג שד ',
            importantNotes:[],
            isPopular: true,
        },
        {
            productName: 'דשגש  שדבש',
            productPrice: '100',
            productDescription: 'שדגדשגד גדש דשג  שד שדששדשדד  דש דשדג שד ',
            importantNotes:['ללא גלוטן' , 'טבעוני'],
            isPopular: false,
        }
    ]

    const TMP_CATAGOIRES = ['נודלס', 'מרקים', 'אורז', 'שתיה קרה', 'שתיה חמה', 'קינוחים']

    const handleClickIconBars = () => {
        setShowCatagories(!showCatagories);
    }


    return (
        <React.Fragment>
            <Row className="d-flex justify-content-center">
                <img className="image_header" src={process.env.PUBLIC_URL + '/Healthy-Food-Plate.jpg'} alt="" />
            </Row>

            <h2> תפריט </h2>

            <Row className="menu_row d-flex justify-content-center">
                <NavBar TMP_CATAGOIRES={TMP_CATAGOIRES} />
            </Row>
            <Row className="d-flex justify-content-center">
                {TMP_PRODUCTS.map((item, index) => <ItemCard key={index} item={item} />)}
            </Row>
        </React.Fragment >

    );
}

export default HomePage;
