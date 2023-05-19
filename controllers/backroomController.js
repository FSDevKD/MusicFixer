exports.viewPage = (req, res) => {
  console.log("Backroom Controller Working");
  console.log(req.user)
  res.render('backroom',{ user: req.user });
};
