import React from 'react';
import ProjectCard from "./ProjectCard";
import {
    Container,
    Row,
    Jumbotron
} from "react-bootstrap";

const Projects = ({projects}) => {
    return (  
        <section className="bg-light">
            
            <Container>
                <Jumbotron fluid id="projects" className="bg-light">
                    <h2 className="display-4 mb-5 text-center">
                        {projects.heading}
                    </h2>
                    <Row>
                        {
                            projects.content.map(data => {
                                return <ProjectCard 
                                    projectName = {data.projectName}
                                    projectLogo = {data.projectLogo}
                                    imgHeight = {projects.imgSize}
                                    duration = {data.duration}
                                    role = {data.role}
                                    description = {data.description}
                                    skills = {data.skills}
                                    links = {data.links}
                                />
                            })
                        }
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Projects;