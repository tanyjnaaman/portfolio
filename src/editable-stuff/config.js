// Navigation Bar SECTION
const navBar = {
  show: true,
};

// MAIN BODY SECTION
// Default background is an animated starry scene with gradient colours, set here.
// Set names here. They will be used in the brand in the Navbar.
// Title and subtitle are landing words.
// Set icons and links to your socials. To add more, just copy the template using the fa icons and your own url.
const mainBody = {
  gradientColors: "#560BAD, #480CA8, #3A0CA3, #3F37C9, #4361EE, #4895EF ", 
  firstName: "Naaman",
  middleName: "",
  lastName: "Tan",
  title: "Hello, World!",
  message: "My name is Naaman. Welcome to my website.",
  icons: [
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/tanyjnaaman/",
    },
    {
      image: "fa-github",
      url: "https://github.com/tanyjnaaman",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/notlameman",
    },
    {
      image: "fa-medium",
      url: "https://medium.com/@tanyjnaaman",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://...",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/assets/aboutMe/me.jpg"),
  imageSize: 375,
  message_primary:
    "Hi! My name is Naaman. I am a junior studying Computer Science and Economics at the National University of Singapore. I am also under the University Scholars Programme (USP).",
  message_secondary:
    "I used to study engineering. But three unhappy semesters, two robotics projects and one hackathon convinced me to take a leap of faith and study computer science instead. So I'm in my third year, but effectively starting my second year. I love what I'm doing now, especially the deep learning projects I'm working on as an undergraduate researcher. I'm a little behind, but I'll catch up.",
  message_tertiary:
    "Beyond computer science, I spend my time reading books, playing badminton and following international politics.",
  resume: require("./assets/aboutMe/myResume.pdf"),
};

// EXPERIENCES SECTION
const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {
      companyLogo: require('../editable-stuff/assets/experience/DSO.png'),
      companyName: "DSO National Laboratories",
      duration: 'May 2021 – Aug 2021',
      role: 'Machine Learning Engineer Intern',
      description: "Responsible for end-to-end research and development of deep-learning techniques for synthetic aperture radar (SAR) image processing. Designed and tuned multi-task learning architectures for image-to-image translation, image super-resolution and image segmentation tasks.",
    },
    {
      companyLogo: require('../editable-stuff/assets/experience/NYX.png'),
      companyName: "Nyx Intelligence",
      duration: 'Jun 2020 – Jul 2020',
      role: 'Part-time Software Engineer Intern',
      description: "Successfully developed a web application by using ASP.NET MVC4, Web API with Vue JS, Webapp leveraged Entity framework (EF) Core in the environment by using Visual Studio.",
    },
  ]
}

// GITHUB PROJECTS SECTION
// Setting up project length will automatically fetch up to that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "GitHub",
  gitHubUsername: "tanyjnaaman", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/assets/aboutMe/me.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/assets/aboutMe/me.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// PROJECTS SECTION
// for the links, provide them as links
// if you want to provide them as files, do so using require("../editable-stuff/assets/aboutMe/<file>")
const projects = ({
  show: true,
  heading: "Projects",
  content: [
    {
      projectName: "Map The System Competition 2021",
      projectLogo: require("../editable-stuff/assets/projects/MTS.jpg"),
      duration: "Jan 2021 - Jun 2021",
      role: "Team Lead",
      description: "Won the national finals in May and placed 2nd in the global finals. Map The System is a global competition that challenges teams to use a system's thinking approach to analyse socio-economic problems and propose solutions. I led an interdiscplinary team of 5 to investigate how meritocracy in Singapore worsens inequality.",
      skills: "Vensim, Adobe Premier Pro",
      links: [
        {
          words: "Competition website",
          link: "https://mapthesystem.sbs.ox.ac.uk/home"
        },
        {
          words: "Our report",
          link: "https://drive.google.com/file/d/1ZCGy2v8N7dGLjHK7ePltCTyK8wMpLOGb/view?usp=sharing"
        },
        {
          words: "Our video",
          link: "https://drive.google.com/file/d/1Ly_691WB86jGTKW4nPh9dr4-nx6kOIUc/view?usp=sharing"
        },
      ]
    },

    {
      projectName: "DJI RoboMaster Competition 2021",
      projectLogo: require("../editable-stuff/assets/projects/LumiNUS.png"),
      duration: "Jul 2020 - Jun 2021",
      role: "Project Manager | NUS RoboMaster Club, Team LumiNUS",
      description: "Team placed 4th globally (1st in SEA) for RoboMasters University Championship Online Competition. Led a team of 5 in developing 3 Standard Robots. Spearheaded design and implementation of object detection algorithms and mechanical launcher, gimbal and mobility systems.",
      skills: "TensorFlow 2.0, OpenCV2, SolidWorks | C++, python",
      links: [
        {
          words: "Competition website",
          link: "https://www.robomaster.com/en-US"
        },
        {
          words: "Team Website",
          link: "https://www.nusrobomasters.com/team"
        },
        {
          words: "Team midterm video ",
          link: "https://www.youtube.com/watch?v=HEtQSq7URns"
        },
      ]
    },

    {
      projectName: "R.io | ADB #DigitalAgainstCovid19 Hackathon",
      projectLogo: require("../editable-stuff/assets/projects/Rio.png"),
      duration: "Jun 2020 - Aug 2021",
      role: "Team Lead",
      description: "Top 10 finalist among 140+ teams. Led a team of four in prototyping a integrated waste management solution based on p2p services and a waste-classification machine learning model. Drew a wireframe in Figma and implemented a simple image classification model based on MobileNet.",
      skills: "TensorFlow 2.0, Figma, Adobe Creative Cloud | python",
      links: [
        {
          words: "Competition website",
          link: "https://challenges.adb.org/en/challenges/covid-19"
        },
        {
          words: "Pitch Deck",
          link: "https://drive.google.com/file/d/1v5v3P76ukELaeCzsCnEJ9__oh3VDgGw2/view?usp=sharing"
        },
        {
          words: "Pitch video 1",
          link: "https://www.youtube.com/watch?v=HMlTGldnnGE"
        },
        {
          words: "Pitch video 2", 
          link: "https://www.youtube.com/watch?v=9qRE9PQuQjI"
        },
        {
          words: "GitHub Repo",
          link: ""
        }
      ]
    },

    {
      projectName: "Semakau365 | NTU WSC Ideathon 2020",
      projectLogo: require("../editable-stuff/assets/projects/iti.png"),
      duration: "May 2020 - Jun 2021",
      role: "Team Lead",
      description: "Top 10 among 70+ teams. Led a team of three in designing an integrated waste management solution based on a waste-classification machine learning model. Drew a wireframe in Figma and Adobe XD.",
      skills: "Figma, Adobe Creative Cloud",
      links: [
        {
          words: "Competition website",
          link: "https://www.ntuwscgo.com/ideathon-impact-through-inspiration"
        },
        {
          words: "Pitch Deck",
          link: "https://docs.google.com/presentation/d/1wwxMAoDToQwb-GLz6cC2thNhhFn7i_Hr/edit?usp=sharing&ouid=117369393003173526991&rtpof=true&sd=true"
        },
        {
          words: "Pitch video",
          link: "https://drive.google.com/file/d/1vzU3hPeQhykl5qm7KUTs5Nyc_0qfSwYE/view?usp=sharing"
        },

      ]
    },
    {
      projectName: "NUS RoboMaster DarkNUS training program",
      projectLogo: require("../editable-stuff/assets/projects/DarkNUS.png"),
      duration: "Jun 2020 - Jul 2020",
      role: "Team Lead | NUS RoboMaster Club, Team DarkNUS",
      description: "Led a team of 5 in developing a semi-autonomous robot for presentation to faculty and public members on Kent Ridge Day. Spearheaded top-to-bottom design and implementation of all control, computer vision, power and mechanical (chassis/mobility/robotic arm) systems.",
      skills: "OpenCV2, SolidWorks | C++, python",
      links: []
    },



    {
      projectName: "University Rover Challenge 2020",
      projectLogo: require("../editable-stuff/assets/projects/rover.png"),
      duration: "Sept 2019 - Mar 2020",
      role: "Mechanical Engineer",
      description: "Worked on the rover's mobility system. Responsible for mechanical design of Rover's rocker-bogie suspension system.",
      skills: "SolidWorks",
      links: [
        {
          words: "Competition website",
          link: "http://urc.marssociety.org/"
        },
        {
          words: "Team Website",
          link: "https://nusseds.space/new-oppy/"
        },
      ]
    },

    {
      projectName: "Shell ITF Scenarios Competition",
      projectLogo: require("../editable-stuff/assets/projects/shell.jpg"),
      duration: "Sept 2019 - Feb 2020",
      role: "Team Lead",
      description: "Qualified for finals. Led a team of five in collaboration with faculty members from LKYSPP in charting out how different energy scenarios would impact Asia and the Middle East.",
      skills: "Adobe Creative Cloud",
      links: [
        {
          words: "Competition website",
          link: "https://www.shell.com.sg/energy-and-innovation/imagine-the-future-competition.html#vanity-aHR0cHM6Ly93d3cuc2hlbGwuY29tLnNnL2VuZXJneS1hbmQtaW5ub3ZhdGlvbi9tYWtlLXRoZS1mdXR1cmUtc2luZ2Fwb3JlL2ltYWdpbmUtdGhlLWZ1dHVyZS1jb21wZXRpdGlvbi5odG1s=true&iframe=L2Zvcm1zL2VuX3NnX2ltYWdpbmVfdGhlX2Z1dHVyZQ"
        },
        {
          words: "Our report",
          link: "https://drive.google.com/file/d/1JXRSzYM1X_tLbvjxkIe-jChZ9CzjoCcq/view?usp=sharing"
        },
        {
          words: "Our pitch deck",
          link: "https://drive.google.com/file/d/1xBLRdVAS88Hq40Q8lZ_g8lNfOwpYyT-E/view?usp=sharing"
        },

      ]
    },


  ],
  imgSize: {
    width: "512",
    height: "512"
  }
});

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "R", value: 80 },
    { name: "Java", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "CUDA C/C++", value: 70 },
    { name: "Algorithms/Data Structures", value: 75 },
    { name: "Deep Learning", value: 80 },
    { name: "Statistical modelling", value: 80 },
  ],
  softSkills: [
    { name: "Collaboration", value: 70 },
    { name: "Problem Solving", value: 90 },
    { name: "Initiative", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Time Management", value: 80 },
    { name: "Presentation/Writing", value: 90 },
    { name: "Leadership", value: 70 },
    { name: "Creativity", value: 75 },
  ],
};

// FEEDBACK WORDCLOUD SECTION

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "tannaaman@u.nus.edu",
};




export { navBar, mainBody, about, repos, skills, projects, leadership, getInTouch, experiences };

 