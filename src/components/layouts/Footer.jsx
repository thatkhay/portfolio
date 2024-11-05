import React from "react"
import { FooterSection } from "../../styles/footerStyle"
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"

const Footer = ({ classname }) => {
  const footerYear = new Date().getFullYear()

  return (
    <FooterSection className={classname}>
      <div className="horizontalLine"></div>
      <div className="contactAddresses">
        <section className="copyRight">
          <p className="myInfo">&copy; Dev-khay {footerYear} </p>
          <p className="myInfo myRole">Software Engineer</p>
          <a className="myEmail" href="mailto:johnkingsleyegeonu@gmail.com">
            johnkingsleyegeonu@gmail.com
          </a>
        </section>

        {/* social icons */}
        <div className="socialIcons">
          <a
            className="socialLink"
            href="https://github.com/thatkhay"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/john-kingsley-egeonu-a6225b255/"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://twitter.com/that_khayy"
            target="_blank"
            rel="noreferrer"
            className="socialLink"
          >
            <FiTwitter />
          </a>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
