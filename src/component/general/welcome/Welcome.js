import React from "react";
import { Container } from 'react-bootstrap';
import welcome from './Welcome-PNG-Photo.png'

export default class Welcome extends React.Component {
    
    render() {
        return (
            <Container id="welcome">
                <img src={welcome} alt="Welcome"/>
            </Container>
        )
    }

}