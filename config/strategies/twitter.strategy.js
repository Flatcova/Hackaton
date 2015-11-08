var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../../models/userModel');

module.exports = function(){
	passport.use(new TwitterStrategy({
		consumerKey: 'x3MK1OaYdIN2S4tckCZYTuoz6',
		consumerSecret: 'vfcnWCqOgP5M0DdDKAx3oiwRHlt1al0iKiMxHsy7qbw1FgufrF',
		callbackURL:'http://localhost:3000/auth/twitter/callback',
		passReqToCallback: true
	},
	function(req, token, tokenSecret, profile, done){
		var query = {
	    	'google.id': profile.id
	    };
		User.findOne(query, function(error, user){
	    	if(user){
	    		console.log('found');
	    		done(null, user);
	    	}
	    	else{
	    		console.log('not found');
	    		var user = new User;

	    		//user.email = profile.emails[0].value;
				// user.image = profile.image_url;
				user.displayName = profile.displayName;
				
				user.twitter.id = profile.id;
				user.twitter.token = token;
				
			    user.save();
			    done(null, user);
	    	}
	    });
	}))
};