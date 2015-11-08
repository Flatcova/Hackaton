var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy;



module.exports = function() {
	passport.use(new FacebookStrategy({
		clientID: '1668696730082162',
		clientSecret: '6ea957afa92973da941e8806a4cd23ae',
		callbackURL:'http://localhost:3000/auth/facebook/callback',
		passReqToCallback: true
	},
	function (req, accessToken, refreshToken, profile, done){

		var user = {};

		user.email = profile.emails[0].value;
		//user.image = profile._json.image.url;
		user.displayName = profile.displayName;

		user.facebook = {};
		user.facebook.id = profile.id;
		user.facebook.token = accessToken;

		done(null, user);
	}));
}