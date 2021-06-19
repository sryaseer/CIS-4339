module.exports = (req, res, next) => {
    if (!req.session.user) {
        res.send('Please log in first in order to see this content');
        return;
    }
    next();
};
