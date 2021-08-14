import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  repos,
  leadership,
  skills,
  projects,
  getInTouch,
  experiences,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import GitHubProject from "./components/home/GitHubProject";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/home/Skills";
// import { Blog } from "./components/blog/Blog";
// import BlogPost from "./components/blog/BlogPost";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Leadership from "./components/home/Leadership.jsx";
import Projects from "./components/home/Projects.jsx";
import Experience from "./components/home/Experience";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={mainBody.title}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message_primary={about.message_primary}
          message_secondary={about.message_secondary}
          message_tertiary={about.message_tertiary}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}

      {experiences.show && (
        <Experience experiences={experiences}/>
        )
      }

      {projects.show  && (
        <Projects projects={projects}/>
        )
      }

      {repos.show && (
        <GitHubProject
          heading={repos.heading}
          username={repos.gitHubUsername}
          length = {repos.reposLength}
          specific={repos.specificRepos}
        />
      )}

      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}

      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}

    </>
  );
});

const App = () => {
  const titleRef = React.useRef();
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
