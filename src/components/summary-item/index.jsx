import { Link } from 'gatsby';
import React from 'react';

const classes = {
  container: 'flex flex-row',
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-light',
  imgWrapper: "w-max items-center overflow-hidden",
  img: "w-0 md:w-10 rounded-full md:my-1 md:mr-3 md:p-1 md:self-center "
};

const SummaryItem = ({ name, description, link = false, img = false, internal = false }) => {

  // 1. check nature of link
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link}>{name}</a>;
  }

  // 2. check if there is an image
  let imageContent;
  if (img) {
    imageContent = <img src={img} alt={name} className={classes.img}/>
  }

  return (
    <div className={classes.container}>
      <div className={classes.imgWrapper}>{imageContent}</div>
      <div className={classes.wrapper}>
        
        <h3
          className={`${classes.name} ${
            link ? 'hover:underline hover:text-black' : ''
          }`}
        >
          {link ? linkContent : name}
        </h3>
        {description.split('\n').map((line, index, array) => ( (index + 1) === array.length ?
          <p className={classes.description}>
            {line}
          </p> : <>
          <p className={classes.description}>
            {line}
          </p>
          <br></br>
        </>
        ))}
      </div>
    </div>
  );
};

export default SummaryItem;
