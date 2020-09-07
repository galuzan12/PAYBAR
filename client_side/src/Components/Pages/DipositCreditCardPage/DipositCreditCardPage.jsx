import React, { useState } from 'react';
import './DipositCreditCardPage.css';
import { Row, Col, Container } from 'react-bootstrap';

function DipositCreditCardPage(props) {

    const [creditCardDetails, setCreditCardDetails] = useState({
        cardNumber: '',
        exp: '',
        cvv: '',
        cardOwnerId: ''
    })

    return (
        <Container fluid>
            <Row className="logoImg_row">
                <img className="logo_img" src={require('../../../img/logo.png')} />
            </Row>
            <Row className="dipositCreditCardPage_row">
                <Col xs={12} className="dipositCreditCardPage_col_header_explaination">
                    הכנס אשראי ביטחון, אנחנו לא נחייב אלא אם כן תברחו
                </Col>
                <Col md={12} className="dipositCreditCardPage_col">
                    <Col md={12}>
                        <Col className="dipositCreditCardPage_text" md={6}>מספר כרטיס אשראי</Col>
                        <Col className="dipositCreditCardPage_text" md={6}><input className="form-control" id="cardNumber" value={creditCardDetails.cardNumber} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                    </Col>
                    <Col md={12}>
                        <Col className="dipositCreditCardPage_text" md={6}>תוקף</Col>
                        <Col className="dipositCreditCardPage_text" md={6}><input className="form-control" id="exp" value={creditCardDetails.exp} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                    </Col>
                    <Col md={12}>
                        <Col className="dipositCreditCardPage_text" md={6}>CVV</Col>
                        <Col className="dipositCreditCardPage_text" md={6}><input className="form-control" id="cvv" value={creditCardDetails.cvv} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                    </Col>
                    <Col md={12}>
                        <Col className="dipositCreditCardPage_text" md={6}>ת.ז</Col>
                        <Col className="dipositCreditCardPage_text" md={6}><input className="form-control mb-3" id="cardOwnerId" value={creditCardDetails.cardOwnerId} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                    </Col>
                    <Col md={12}>
                        <Col className="dipositCreditCardPage_text" md={6}> <button onClick={() => props.setCreditCardDeposit(true)} className="btn btn-primary btnCardDeposit btn-block">המשך לתפריט המסעדה</button> </Col>
                    </Col>

                </Col>
            </Row>
        </Container>

    );
}

export default DipositCreditCardPage;
