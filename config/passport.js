const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/User");

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email", passReqToCallback: true }, (req, email, password, done) => {
            User.findOne({ email: email.toLowerCase() })
                .then(user => {
                    if (!user) {
                        return done(null, false, req.flash('error_msg', 'Email not registered'));
                    }

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, req.flash('error_msg', 'Incorrect password'));
                        }
                    });
                })
                .catch(err => console.log(err));
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
          .then((user) => {
            done(null, user);
          })
          .catch((error) => {
            done(error);
          });
    });
      
};
