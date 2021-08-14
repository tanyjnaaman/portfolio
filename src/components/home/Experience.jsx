import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid id="experience" className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard 
                                    companyLogo = {data.companyLogo}
                                    companyName = {data.companyName}
                                    duration = {data.duration}
                                    role = {data.role}
                                    description = {data.description}
                                />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;