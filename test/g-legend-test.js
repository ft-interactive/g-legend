import tape from 'tape';
import * as d3 from 'd3';
import { legend as glegend } from '../';

tape('rem should equal 10.', (test) => {
    const legend = glegend();
    test.equal(legend.rem(), 10);
    test.end();
});

tape('should accept arbitrary colour scales', (test) => {
    const colorScale = d3.scaleOrdinal();
    const legend = glegend().colourPalette(colorScale);
    test.equal(colorScale, legend.colourPalette());
    test.end();
});
