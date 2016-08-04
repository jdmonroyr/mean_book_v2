/* GET 'home' Page */
module.exports.homelist = function(req, res, next){
    res.render('locations-list', { title: 'Home' });
};

/* GET 'Location Info' Page */
module.exports.locationInfo = function(req, res, next){
    res.render('location-info', { title: 'Location Info' });
};

/* GET 'Add review' Page */
module.exports.addReview = function(req, res, next){
    res.render('location-review-form', { title: 'Add review' });
};