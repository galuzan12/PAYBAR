import React, { useState } from 'react';
import './DipositCreditCardPage.css';
import { Row, Col } from 'react-bootstrap';

function DipositCreditCardPage(props) {

    const [creditCardDetails, setCreditCardDetails] = useState({
        cardNumber: '',
        exp: '',
        cvv: '',
        cardOwnerId: ''
    })

    return (
        <Row className="dipositCreditCardPage_row d-flex align-content-center justify-content-center">
            <Col xs={12} className="dipositCreditCardPage_col_header_explaination">
                <h3>הכנס אשראי ביטחון, אנחנו לא נחייב אלא אם כן תברחו</h3>
            </Col>
            <Col xs={12} className="dipositCreditCardPage_col">
                <Col xs={12}>
                    <Col className="dipositCreditCardPage_text" xs={6}>מספר כרטיס אשראי</Col>
                    <Col className="dipositCreditCardPage_text" xs={6}><input className="form-control" id="cardNumber" value={creditCardDetails.cardNumber} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                </Col>
                <Col xs={12}>
                    <Col className="dipositCreditCardPage_text" xs={6}>תוקף</Col>
                    <Col className="dipositCreditCardPage_text" xs={6}><input className="form-control" id="exp" value={creditCardDetails.exp} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                </Col>
                <Col xs={12}>
                    <Col className="dipositCreditCardPage_text" xs={6}>CVV</Col>
                    <Col className="dipositCreditCardPage_text" xs={6}><input className="form-control" id="cvv" value={creditCardDetails.cvv} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                </Col>
                <Col xs={12}>
                    <Col className="dipositCreditCardPage_text" xs={6}>ת.ז</Col>
                    <Col className="dipositCreditCardPage_text" xs={6}><input className="form-control" id="cardOwnerId" value={creditCardDetails.cardOwnerId} onChange={e => setCreditCardDetails({ ...creditCardDetails, [e.target.id]: e.target.value })} /></Col>
                </Col>
                <Col xs={12}>
                    <Col className="dipositCreditCardPage_text" xs={12}> <button onClick={() => props.setCreditCardDeposit(true)} className="btn btn-primary btn-block">לתשתלום</button> </Col>
                </Col>

            </Col>
        </Row>
    );
}

export default DipositCreditCardPage;
