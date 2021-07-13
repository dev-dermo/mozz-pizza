import FooterLogo from '../../assets/images/logo.png';

import { Facebook, Instagram, EnvelopeFill } from 'react-bootstrap-icons';

function Footer() {
	return (
		<footer className="container-fluid p-5">
			<div className="row">
				<div className="col text-center">
					<img className="img img-fluid mb-3" src={FooterLogo} alt="" />
					<address>
						<p>
							The Village, Glengarriff, Co.&nbsp;Cork<br />
							{/* <a href="mailto:mozzpizzaglengarriff@gmail.com" target="_blank" rel="noreferrer">mozzpizzaglengarriff@gmail.com</a><br /> */}
							<a href="https://www.facebook.com/MozzPizzaGlengarriff" target="_blank" rel="noreferrer"><Facebook size="35" /></a>
							<a href="https://www.instagram.com/mozzpizzaglengarriff/" target="_blank" rel="noreferrer"><Instagram size="35" /></a>
							<a href="mailto:mozzpizzaglengarriff@gmail.com" target="_blank" rel="noreferrer"><EnvelopeFill size="35" /></a>
							<br />
						</p>
							
						<p>
							<a id="footer-phone" href="tel:+3532763905">+353 27 63905</a>
						</p>
					</address>
				</div>
			</div>
		</footer>
	);
}

export default Footer;