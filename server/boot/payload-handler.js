module.exports = function(app) {
  app.post('/api/payload', function(req, res) {
    console.log('received github payload');
    console.log(JSON.stringify(req.body));
    res.json({ success: true });
  });
}
