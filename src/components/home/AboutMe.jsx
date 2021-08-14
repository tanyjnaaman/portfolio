import React from "react";
import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message_primary, message_secondary, message_tertiary, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row">
          <div className="col d-none d-lg-block align-self-center">
            <div className="text-center">
              <div className="d-grid gap-10">
                <div className="p-2 bg-transparent">
                  {showPic && (
                    <img
                      className="border border-secondary rounded-circle"
                      src={profilePicUrl}
                      alt="profilepicture"
                      width={imgSize}
                      height={imgSize}
                      margin="auto"
                      display="block"
                    />
                  )}
                </div>
                <div className="p-4 bg-transparent"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">   
          <div className={`col-lg-${showPic ? "12" : "12"}`}> 
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-left">{message_primary}</p>
            <p className="lead text-left">{message_secondary}</p>
            <p className="lead text-left">{message_tertiary}</p>
            {resume && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
