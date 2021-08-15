import React from 'react';
import { 
    Col,
    Card,
    ListGroup,
    ListGroupItem
 } from "react-bootstrap";
const ExperienceCard = ({companyLogo, companyName, duration, role, description}) => {
    return ( 
        <Col lg="6">
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={companyLogo}/>
                <Card.Body>
                    <Card.Title>{companyName}</Card.Title>
                    <Card.Subtitle>{role}</Card.Subtitle>
                    <Card.Text>{duration}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>{description}</ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
     );
}
 
export default ExperienceCard;