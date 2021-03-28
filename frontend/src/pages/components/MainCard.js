import React from "react";
import "./MainCard.css";

function MainCard({
  img,
  mainheading1,
  mainheading2,
  subheading1,
  subheading2,
  content,
  flag,
  link,
}) {
  return (
    <>
      <div className="maincard-maincont">
        <div className="maincard-mainheading-container">
          <h1 className="maincard-mainheading1-text">{mainheading1}</h1>
          <h1 className="maincard-mainheading2-text">{mainheading2}</h1>
        </div>
        <div className={flag === true ? "maincard-cont1" : "maincard-cont2"}>
          <div className="maincard-image-container">
            <img
              alt="GIF"
              className={
                flag === true
                  ? "maincard-image-wrapper1"
                  : "maincard-image-wrapper2"
              }
              src={img}
            />
          </div>
          <div className="maincard-subheading-content-container">
            <div>
              <h3 className="maincard-subheading1-text">{subheading1}</h3>
              <h3 className="maincard-subheading2-text">{subheading2}</h3>
              <p className="maincard-content-text">{content}</p>
              <a className="inside-anchor" href={link}>
                <button className="maincard-button" onClick="">
                  Learn more
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
