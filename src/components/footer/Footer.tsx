import './Footer.scss';
import { ReactComponent as TwitterLogo} from './../../twitter.svg';
import { ReactComponent as FacebookLogo} from './../../facebook.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__copyright">Copyright © CSS Press 2021</div>
      <div className="footer__social">
        <TwitterLogo className="footer__social--twitter"/>
        <FacebookLogo className="footer__social--facebook"/>
      </div>
    </footer>
  );
}

export default Footer;
