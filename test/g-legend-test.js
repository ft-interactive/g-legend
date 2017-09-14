var tape = require('tape');
const glegend = require('../').legend;
const d3 = require('d3');

tape('rem should equal 10.', function(test) {
    const legend = glegend();
    test.equal(legend.rem(), 10);
    test.end();
});

tape('should accept arbitrary colour scales', function(test) {
    const colorScale = d3.scaleOrdinal();
    const legend = glegend().colourPalette(colorScale);
    test.equal(colorScale, legend.colourPalette());
    test.end();
});
