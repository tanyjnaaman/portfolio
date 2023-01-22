module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://tanyjnaaman.github.io`,
    // Your Name
    name: 'Naaman Tan',
    // Main Site Title
    title: `Naaman Tan | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Computer Science undergraduate with experience in full-stack development and NLP, CV and Geometric DL. If you need an engineer who can quickly prototype concepts and scale them up, I could be the person you’re looking for. `,
    // Optional: Twitter account handle
    author: ``,
    // Optional: email address
    email: `tannaaman@u.nus.edu`,
    // Optional: Github account URL
    github: `https://github.com/tanyjnaaman`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/tanyjnaaman/`,
    // Optional: link to resume
    resume: `https://drive.google.com/file/d/1Nn3kwaH1fpHfHhJzDk2OdnAj4D9M0Ziu/view?usp=share_link`,
    // Content of the About Me section
    about: `Hi! My name is Naaman. I'm a fourth year student studying Computer Science and Economics at the National University of Singapore.
      I used to study engineering. But three unhappy semesters and a couple of robotics projects convinced me to take a leap of faith and study Computer Science instead, and I've never looked back since. I've spent a lot of my time in university focused on deep learning systems and its adjacent fields - computer vision, natural language processing, graph machine learning, database systems, distributed systems etc., and I think it's pretty neat.
      Beyond computer science, I spend my time reading books, playing badminton and watching movies.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'NUS Notes and Reviews (Ongoing)',
        description: `A collection of my notes and reviews of the classes I take at NUS.`,
        link: 'https://github.com/tanyjnaaman/NUS-notes-and-reviews',
      },
      {
        name: 'Oxford Map The System 2021',
        description: `Map The System is a global competition that challenges teams to use a system's thinking approach to analyse socio-economic problems and propose solutions. I led an interdiscplinary team of 5 to investigate how meritocracy in Singapore worsens inequality. We won the national finals in May and placed 2nd in the global finals.`,
        link:
          'https://drive.google.com/drive/folders/1vPOx7h8YzcEcZcnynFKkvEsO0SHZP-pk?usp=sharing',
      },
      {
        name: 'DJI RoboMaster Robotics Competition 2021',
        description: `Led a team of 5 in developing 3 Standard Robots. Spearheaded design and implementation of object detection algorithms and mechanical launcher, gimbal and mobility systems.
          Team placed 4th globally (1st in SEA) for RoboMasters University Championship Online Competition. `,
        link: 'https://nusrobomaster.com/team',
      },
      {
        name: 'Asian Development Bank #DigitalAgainstCovid19 Hackathon 2020',
        description: `Led a team of four in prototyping a integrated waste management solution based on p2p services and a waste-classification machine learning model. Drew a wireframe in Figma and implemented a simple image classification model based on MobileNet.
          Our team was a Top 10 finalist among 140+ international teams. `,
        link:
          'https://drive.google.com/drive/folders/13EfbuLAxfF5ne-zDGhMn082mtWPils4G?usp=share_link',
      },
      {
        name: 'Shell ITF Scenarios Competition 2020',
        description: `Led a team of five in collaboration with faculty members from LKYSPP in charting out how different energy scenarios would impact Asia and the Middle East.`,
        link:
          'https://drive.google.com/drive/folders/1bIgIb5x4_caLx1UAguyDZMEh8IomUV5t?usp=share_link',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Palantir Technologies (London)',
        description: 'Software Engineer Intern, June 2023 - Present',
        link: 'https://www.palantir.com/',
      },
      {
        name: 'Hypotenuse AI',
        description: 'Full-Stack Software Engineer Intern, May 2022 - Aug 2022',
        link: 'https://www.hypotenuse.ai/',
      },
      {
        name: 'Institute of Data Science, NUS',
        description: 'Undergraduate Researcher, Aug 2021 - Feb 2022',
        link: 'https://ids.nus.edu.sg/',
      },
      {
        name: 'DSO National Laboratories',
        description: 'Machine Learning Engineer, May 2021 - Aug 2021',
        link: 'https://www.dso.org.sg/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'Python, C/C++, R, Java, Javascript/Typescript, HTML/CSS, SQL, Rust',
      },
      {
        name: 'Engineering Frameworks/Tools/Libraries',
        description:
          'Express • FastAPI • React • Docker • Kubernetes • Redis • AWS (EC2, Sagemaker, SQS, SNS, DynamoDB) • Postgres',
      },
      {
        name: 'Machine Learning Frameworks/Tools/Libraries',
        description:
          'PyTorch • Tensorflow/Keras • Flax/Jax • Scikit-Learn • CUDA • WandB • DagsHub',
      },
    ],
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'National University of Singapore',
        description:
          'B.Comp. Computer Science (CAP: 4.82/5.00) & B.A. Economics (CAP: 4.89/5.00), 2019 - 2024',
        link:
          'https://drive.google.com/file/d/1lphCHCcE8nNz7W-wSfs_7ym0XaJOhwWw/view?usp=share_link',
      },
      {
        name: 'ETH Zurich',
        description: 'B.Comp. Computer Science (Grade: 6.0/6.0) 2023 - 2023',
        link: '',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
