import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  experience,
  skills,
  getInTouch,
  proyects
} from "./editable-stuff/config.js";
import MainBody from "./components/MainBody";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import GetInTouch from "./components/GetInTouch.jsx";
import Experience from "./components/Experience.jsx";
import BackTop from "./components/BacktoTop.jsx";
import Proyects from "./components/Proyects.jsx";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        subtitle={`${mainBody.titleSub}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
          {experience.show && (
        <Experience
         experience={experience}
         />
      )}
     
       {
        proyects.show && (
          <Proyects proyects={proyects}/>
        )
      }
     
   
      
      
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
<>
      {navBar.show && <Navbar ref={titleRef} />}
      <Routes>
        <Route path="/DeParaschuk" exact element={<Home ref={titleRef} />} />
      </Routes>
      <BackTop />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
      </>
  );
};

export default App;
