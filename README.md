<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Developer's Portfolio</h1>

  <p align="center">
    This is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. Site URL / Demo: 
    <a href="https://tanyjnaaman.github.io">tanyjnaaman.github.io</a>
    <br />
    <br />
  </p>
</p>

[![Site preview](/public/social-image.png)](https://tanyjnaaman.github.io/)

## Table of Contents

- [Technology Stack](#technology-stack-)
- [Sharing](#Sharing-)
- [Structure](#structure-)
- [Prerequisites](#prerequisites-)
- [Setup And Deployment](#setup-and-deployment-)
- [Credits](#credits-)
- [What's next](#What's-next-)

## Technology Stack 🛠️

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure ⚓

- Navigation bar
- Body
  - Name
  - Socials
- About Me
  - Display picture (optional)
  - About myself, what I'm doing now, my interests
  - Resume button
- Recent Projects (with descriptions) (optional)
- Recent Projects (using GitHub API) (optional)
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Footer
  - Footer Note


## Sharing

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume. Mark star ⭐ if you like the project.

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/home.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Add your resume as <myResume.pdf> in place of [src/editable-stuff/assets/aboutMe/myResume.pdf](./src/editable-stuff/assets/aboutMe)

5. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
6. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/home"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

7. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

8. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

   Or for deployment at \<username>.github.io, refer [READMEdocs/custom-deployment.md](./READMEdocs/custom-deployment.md) and [pages.js](./pages.js)

9. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/home
   ```

10. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it.   
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
   Next time if you make changes, repeat from step 8.

## Credits 
Most of this was picked up from medium.com guides and two other repos. They are linked here: 

- [Saad Pasta's developerFolio project](https://github.com/saadpasta/developerFolio)
- [Hashir Shoaib's Developer's portfolio project](https://github.com/hashirshoaeb/home)

## What's next

Next up I'm looking to focus on the following areas:
- [ ] Interactive word cloud section for feedback
- [ ] UI improvements (especially for showcase of experience/projects)
- [ ] Code optimization
- [ ] SEO


