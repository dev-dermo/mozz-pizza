import { useState } from 'react';

import { TelephoneForwardFill } from 'react-bootstrap-icons';

window.addEventListener('scroll', event => {
	console.log(event.path[1].scrollY);
});

function CallToAction() {
	const [scroll, setScroll] = useState(0);

	return (
		<div className="call-to-action">
			<a href="tel:+3532763905">
				Order Now
				<TelephoneForwardFill color="#fff" />
			</a>
		</div>
	);
}

export default CallToAction;