import BgText from "../components/shared/BgText"
import Footer from "../components/layouts/Footer"
import { ProjectSection } from "../styles/HomeStyle"
import { MyWorks } from "../styles/WorkStyle"

const Works = () => {

  return (
    <MyWorks>
      <div className="pattern1"></div>
      <div className="pattern2"></div>
      <div className="pattern3"></div>
      <section className="workSection">
        <BgText text={"Project"} classname="WorkBgText" />
        <ProjectSection>
          <div className="projectSectionContainer">
            <h1 className="aboutTitle">My Portfolio</h1>
            <div className="projectParagraph">
              <p className="sectionDescription">
                Here are some select projects I have been excited to work on
                with amazing and talented people.
              </p>
              <p className="sectionDescription">
                This is just a glimpse of my capabilities as a developer. I
                would definitely like to add a touch of my magic to your
                project.
              </p>
            </div>
          </div>
          <section className="myProject myproject-works">
          
          </section>
        </ProjectSection>
      </section>
      <Footer classname="workFooter" />
    </MyWorks>
  )
}

export default Works
