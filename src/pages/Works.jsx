import React from "react";
import BgText from "../components/shared/BgText";
import Footer from "../components/layouts/Footer";
import { ProjectSection } from "../styles/HomeStyle";
import { MyWorks } from "../styles/WorkStyle";
import aci from '../images/aci-holdings.png'
import fleetLink from '../images/fleetlink.png'
import fleetLinkDash from '../images/fleet-link-dash.png'
import shopCo from '../images/shopco.png'
import aibrid from '../images/aibrid.png'
import shopin from '../images/shop.png'
const projects = [
  {
    title: 'Aci-holdings',
    description: "Website for ACI Holdings, a company specializing in innovative solutions for the oil and agricultural industries.",
    imageUrl: aci,
    link: 'https://aciholdings.netlify.app/'
  },
  {
    title: 'ShopCO',
    description: "Interactive e-commerce site with seamless navigation, responsive design, and engagement.",
    imageUrl: shopCo,
    link: 'https://shopco.azurewebsites.net/'
  },
  {
    title: 'Feet Link',
    description: 'Streamlined vehicle tracking, real-time insights, and efficient fleet management solutions in one centralized platform',
    imageUrl: fleetLink,
    link: 'https://fleetmanager.tech/'
  },
  {
    title: 'Feet Link Dashboard',
    description: 'A comprehensive interface for monitoring vehicle performance, managing routes, and optimizing fleet operations with real-time analytics and user-friendly navigation',
    imageUrl: fleetLinkDash,
    link: 'https://fleetmanager.live/en'
  },
  {
    title: 'Aibrid',
    description: "User-friendly booking site for DJ Aibrid's events and performances.",
    imageUrl: aibrid,
    link: 'https://aibrid2.vercel.app/'
  },
  {
    title: 'ShopVista',
    description: "Dynamic shopping cart that enhances user experience with interactive features.",
    imageUrl: shopin,
    link: 'https://shop-vista-puce.vercel.app/'
  }
];

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
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px',
              padding: '20px'
            }}>
              {projects.map((project, index) => (
                <div key={index} style={{
                  background: '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease'
                }}>
                  <img src={project.imageUrl} alt={project.title} style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover'
                  }} />
                  <h3 style={{
                    fontSize: '1.2rem',
                    margin: '10px 0',
                    paddingLeft: '10px'
                  }}>{project.title}</h3>
                  <p style={{
                    padding: '10px',
                    fontSize: '0.9rem',
                    color: '#555'
                  }}>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 

                     style={{
                    display: 'inline-block',
                    margin: '10px',
                    padding: '8px 12px',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    background: 'black',
                    transition: 'background-color 0.3s ease'
                  }}>
                    
                    

                    Visit Site
                  </a>
                </div>
              ))}
            </div>
          </section>
        </ProjectSection>
      </section>
      <Footer classname="workFooter" />
    </MyWorks>
  );
};

export default Works;
