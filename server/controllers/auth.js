const register = (req, res) => {
  console.log(req.body);
  res.send("From the controller....");
};

module.exports = { register };
