module.exports.PORT = 8888;

module.exports.CORS_OPTIONS = {
	origin: [
		'http://localhost:4200',
		/localhost/
	],
	methods: 'POST,GET,PUT,DELETE,PATCH,OPTIONS',
	exposedHeaders: 'Content-Range,X-Content-Range',
	credentials: true,
	allowedHeaders:
		'Cache-Control, Origin, Authorization, Content-Type, X-Requested-With, auth-token, tenant',
	preflightContinue: false,
	optionsSuccessStatus: 204,
	maxAge: 1400
};