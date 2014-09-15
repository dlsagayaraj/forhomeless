// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: 'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'your-consumer-key-here',
		'consumerSecret' 	: 'your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '886029990022-u3fhqq07c906kfo00cms566ivkk8ggg4.apps.googleusercontent.com',
		'clientSecret' 	: 'nE9B9dyVdYVh7RbGRapg5SX5',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
