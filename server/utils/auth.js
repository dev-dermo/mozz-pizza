const jwt = require('jsonwebtoken');

const secret = process.env.SECRET || 'secret';
const expiration = '2h';

module.exports = {
	signToken: function({ email, name, companyName, _id, isAdmin, isPartner }) {
		const payload = { email, name, companyName, _id, isAdmin, isPartner };

		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	},
	authMiddleWare: function({ req }) {
		// allows token to be sent via req.body, req.query or headers
		let token = req.body.token || req.query.token || req.headers.authorization;

		// separate "Bearer" from "<tokenvalue>"
		if (req.headers.authorization) {
			token = token
				.split(' ')
				.pop()
				.trim();
		}

		if (!token) {
			return req;
		}

		try {
			// decode and attach user data to request object
			const { data } = jwt.verify(token, secret, { maxAge: expiration })
			req.user = data;
		} catch {
			console.log('Invalid token');
		}

		// return updated request object
		return req;
	},
};