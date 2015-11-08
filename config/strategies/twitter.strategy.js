var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function(){
	passport.use(new TwitterStrategy({
		consumerKey: 'x3MK1OaYdIN2S4tckCZYTuoz6',
		consumerSecret: 'vfcnWCqOgP5M0DdDKAx3oiwRHlt1al0iKiMxHsy7qbw1FgufrF',
		callbackURL:'http://localhost:3000/auth/twitter/callback',
		passReqToCallback: true
	},
	function(req, token, tokenSecret, profile, done){
		var user = {};
		
			//user.email = profile.emails[0].value;
			// user.image = profile.image_url;
			user.displayName = profile.displayName;
			
			user.twitter = {};
			user.twitter.id = profile.id;
			user.twitter.token = token;
			
			done(null, user);
	}))
};