import React from 'react';
import { 
    Col,
    Card,
    ListGroup,
    ListGroupItem
 } from "react-bootstrap";

const ProjectCard = ({projectName, projectLogo, imgSize, duration, role, description, skills, links}) => {
    return ( 
        <Col md={6}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" 
                    width = {imgSize}
                    height = {imgSize}
                    object-fit = "cover"
                    src={projectLogo}/>
                <Card.Body>
                    <Card.Title>{projectName}</Card.Title>
                    <Card.Subtitle>{role}</Card.Subtitle>
                    <Card.Text>{duration}</Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroupItem>
                        <p>
                        {description}
                        </p>
                        <p>
                        {
                            links.map(pairs => {
                                return <p><a href = {pairs.link}>{pairs.words}</a> </p>
                            })
                        }
                        </p>
                    </ListGroupItem>
                    <ListGroupItem>
                        {skills}
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
     );
}

export default ProjectCard;
