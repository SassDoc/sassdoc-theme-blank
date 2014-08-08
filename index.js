var themeleon = require('themeleon')().use('swig');

module.exports = themeleon(__dirname, function (t) {
  t.copy('assets');
  t.swig('views/index.html.swig', 'index.html');
});