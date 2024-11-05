import React from "react"
import BgText from "../components/shared/BgText"
import Footer from "../components/layouts/Footer"
import Button from "../components/shared/Button"
import CssLogo from "../components/layouts/assets/cssLogo.svg"
import JsLogo from "../components/layouts/assets/jsLogo.svg"
import ReactJs from "../components/layouts/assets/reactjs.svg"
import HtmlIcon from "../components/layouts/assets/htmlIcon.svg"
import { AboutMe } from "../styles/AboutStyle"
import { AboutAniebo } from "../styles/HomeStyle"
import styled from "styled-components"

const About = () => {
  // Link to resume on google drive
  const url =
    "https://docs.google.com/document/d/e/2PACX-1vQ-XzGXGK4rCPZC07bvld98bH7UT7RiwG3lCLKKpcoQnynqeBq0SiQoterfYXT0_6xmv85Eag7HiMH4/pub"

  const downloadResume = () => {
    window.open(url, "_blank")
  }

  const AboutDavid = styled(AboutAniebo)`
    margin-top: 40px;

    @media ${({ theme }) => theme.mediaQueries.below768} {
      margin-top: 0;
    }
  `

  return (
    <>
      <AboutMe>
        <div className="pattern1"></div>
        <div className="pattern2"></div>
        <div className="pattern3"></div>
        <section className="aboutContainer">
          <BgText text={"About"} classname="AboutBgText" />
          <AboutDavid>
            <h1 className="aboutTitle">A bit about me</h1>
            <section className="aboutAniebo1">
              <div className="aboutText">
                <p>
                  I am a Software Engineer skilled in MongoDB, ExpressJS, ReactJS, and NodeJS (MERN Stack). I have a strong passion for building clean, user-friendly interfaces and contributing to the world of web development.
                </p>
                <p className="aboutText2">
                  Outside of programming, I enjoy reading, playing games, and taking walks with my dogs.
                </p>
                <p>
                  I am open to freelance and full-time opportunities in environments that offer engaging challenges and continuous growth.
                </p>

                <Button
                  text={"Download Resume"}
                  classname="downloadResumeButton"
                  handleClick={downloadResume}
                />
              </div>
              <div className="skillsCard">
                <div className="skillSet">
                  <img className="cssLogo" src={CssLogo} alt="CSS" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
                <div className="skillSet">
                  <img className="cssLogo" src={HtmlIcon} alt="CSS" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
                <div className="skillSet">
                  <img className="cssLogo" src={ReactJs} alt="CSS" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
                <div className="skillSet">
                  <img className="cssLogo" src={JsLogo} alt="CSS" />
                  <div className="skillSetRating">
                    <div className="skillRatingBar"></div>
                    <div className="skillRatingBar"></div>
                  </div>
                </div>
              </div>
            </section>
          </AboutDavid>
        </section>
        <Footer classname="aboutFooter socialIcon" />
      </AboutMe>
    </>
  )
}

export default About
