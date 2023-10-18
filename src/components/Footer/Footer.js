import ReworkLogo from "../../assets/images/ReworkLogo.png";
import Copyright from "../../assets/images/copyright.png";
import Mail from '../../assets/images/mail.png'
import SocialIcons from '../../assets/images/Social Icons.png'
import SocialIcons1 from '../../assets/images/Social Icons 1.png'
import SocialIcons2 from '../../assets/images/Social Icons 2.png'
import SocialIcons3 from '../../assets/images/Social Icons 3.png'
import { Tooltip } from "react-tooltip";
import "./Footer.css";

const Footer = ({ screenSize }) => {
  return (
    <div className="footer-dark bg-white">
      {
        (screenSize < 700) && 
        <div className="mobile-upper-footer">
          <div className="talentfinder2" style={{marginLeft: '30px'}}>
            <span style={{ color: 'var(--blue)'}}>Reinsure</span>
          </div>
          <div className="line1" style={{height: '10px'}}/>
        </div>
      }

      <div className="footer-row">
        {(screenSize >= 900) &&
          <div className="rectangle-group">
            <img src={ReworkLogo} alt="reworkLogo" />
          </div>
        }

        <div className="quick-links-parent">
          <div className="quick-links">Quick Links</div>
          <div className="mentorship-placement-parent">
            <div className="job-insurance">About Us</div>
            <div className="job-insurance">Contact Us</div>
            <div className="job-insurance">FAQs</div>
          </div>
        </div>

        <div className="more-by-rework-parent">
          <div className="quick-links">More By Rework</div>
          <div className="mentorship-placement-parent">
            <div className="job-insurance">Talent Finder</div>
            <div className="job-insurance">AI Recruitment Platform</div>
          </div>
        </div>

        <div className="join-our-mailing-list-parent">
          <div className="quick-links" id="join">Join our mailing list</div>

          <div className="frame-parent5">
            <div className="enter-email-wrapper">
              <input name="email" type="text" className="enter-email text-black" placeholder="Enter Email" autoComplete="on"/>
            </div>

            <div className="free-send-mail-icon-2574-thumb-parent bg-blue text-white">
              <img
                className="free-send-mail-icon-2574-thumb"
                alt=""
                src={Mail}
              />

              <button className="subscribe">Subscribe</button>
            </div>
          </div>

          <div className="rectangle-parent">
            <input type="checkbox" id="checkbox" className="rectangle-div" name="checkbox"/>
            <label className="i-agree-to cursor-pointer" htmlFor="checkbox" >{`I agree to receive emails  from TalentFinder as per their Data & Privacy Policy.`}</label>
          </div>
        </div>
      </div>
      
      <div className="lowerFooter">
        {
          screenSize < 700 &&
          <div className="line1"/>
        }
        
        <div className="talentfinder-row">
          {
            (screenSize >= 700) && 
            <div className="talentfinder2">
              <span style={{ color: 'var(--blue)'}}>Reinsure</span>
            </div>
          }

          <div className="social-icons-parent">
            <Tooltip id="tooltip" />

            <a data-tooltip-id="tooltip" data-tooltip-content="Facebook" href="#">
              <img className="social-icons" alt="" src={SocialIcons} />
            </a>

            <a data-tooltip-id="tooltip" data-tooltip-content="Twitter" href="#">
              <img className="social-icons" alt="" src={SocialIcons1} />
            </a>

            <a data-tooltip-id="tooltip" data-tooltip-content="Instagram" href="#">
              <img className="social-icons" alt="" src={SocialIcons2} />
            </a>

            <a data-tooltip-id="tooltip" data-tooltip-content="LinkedIn" href="#">
              <img className="social-icons" alt="" src={SocialIcons3} />
            </a>
          </div>
        </div>

        <div className="line1" />

        <div className="frame-parent4">
          <img src={Copyright} alt="c"/>
          <div className="talentfinder1">2023 Reinsure</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
