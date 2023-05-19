exports.viewPage = (req, res) => {
  console.log("Index Controller Working");
  res.render('index', { error: 'Error' });
};
