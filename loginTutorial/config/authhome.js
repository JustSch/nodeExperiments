module.exports = {
    ensureAuthenticatedHome: function(req, res, next) {
        if(req.isAuthenticated()) {
            res.redirect('/dashboard');
        }
        res.render('welcome');
    
    }
}