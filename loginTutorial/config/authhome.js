module.exports = {
    ensureAuthenticatedHome: function(req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/dashboard');
            return next();
        }
        res.render('welcome');
    
    }
}