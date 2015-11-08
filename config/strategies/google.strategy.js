var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function(){
	passport.use(new GoogleStrategy({
	  clientID: '14615984830-fvp1u7pmbu9q7hf8kgpuu102nm46tje3.apps.googleusercontent.com',
	  clientSecret: '_9iKmIxPghnIOQoR9qhwfoh1',
	  callbackURL: 'http://localhost:3000/auth/google/callback'},
	  function(req, accessToken, refreshToken, profile, done){
	    var user= {};

	    user.email = profile.emails[0].value;
	    user.image= profile._json.image.url;
	    user.displayName = profile.displayName;

	    user.google={};
	    user.google.id = profile.id;
	    user.google.token = accessToken;

	    done(null, user);
	  }
	));
};