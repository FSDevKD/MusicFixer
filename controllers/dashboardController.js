exports.viewPage = (req, res) => {
  console.log(req.user);
  res.render('dashboard', { user: req.user });
}
