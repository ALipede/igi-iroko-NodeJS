exports.get404 = (req, res, next) => {
  // res.status(404).render('404', { pageTitle: 'Page Not Found' });
  res.render('404', { path: '', pageTitle: '404 Not Found' });
};