var tape = require("tape"),
    glegend = require("../").legend;

tape("rem should equal 10.", function(test) {
  const legend = glegend();
  test.equal(legend.rem(), 10);
  test.end();
});
