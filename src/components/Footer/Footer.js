import ReworkLogo from "../../assests/images/ReworkLogo.png";
import Copyright from "../../assests/images/copyright.png";
import Mail from '../../assests/images/mail.png'
import SocialIcons from '../../assests/images/Social Icons.png'
import SocialIcons1 from '../../assests/images/Social Icons 1.png'
import SocialIcons2 from '../../assests/images/Social Icons 2.png'
import SocialIcons3 from '../../assests/images/Social Icons 3.png'
import "./Footer.css";

const Footer = ({ screenSize }) => {
  return (
    <div className="footer-dark">
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
              <input name="email" type="text" className="enter-email" placeholder="Enter Email" autoComplete="on"/>
            </div>
            <div className="free-send-mail-icon-2574-thumb-parent">
              <img
                className="free-send-mail-icon-2574-thumb"
                alt=""
                src={Mail}
              />
              <div className="subscribe">Subscribe</div>
            </div>
          </div>

          <div className="rectangle-parent">
            <input type="checkbox" className="rectangle-div" name="checkbox"/>
            <div className="i-agree-to">{`I agree to receive emails  from TalentFinder as per their Data & Privacy Policy.`}</div>
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
            <img className="social-icons" alt="" src={SocialIcons} />
            <img className="social-icons" alt="" src={SocialIcons1} />
            <img className="social-icons" alt="" src={SocialIcons2} />
            <img className="social-icons" alt="" src={SocialIcons3} />
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