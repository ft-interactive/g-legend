# g-legend [![codecov](https://codecov.io/gh/ft-interactive/g-legend/branch/master/graph/badge.svg)](https://codecov.io/gh/ft-interactive/g-legend)

Pre styled and positioned legend for use with the FT's g-chartframe architecture as part of the Visual Vocabulary. As the name suggests it creates a legend that can be appended to the .plot obejct in the g-chartframe hopefully eliminating the need to code another standard legend for each template.

## Installing

Add this line of code to the head of your index.html file

``` html
<script src="https://rawgit.com/ft-interactive/g-legend/master/build/g-legend.js"></script>
```

# Getting started

Make sure you have these settings at the top of your index.html file with the rest of your chart settings

```
let legendAlign = "vert"//hori or vert, alignment of the legend
let legendType = 'rect' //rect, line or circ, geometry of legend marker
```

Add this code to your index.html file, this will define your legend and add it to your chart plot. The default for what the legend draws are your seriesNames.

```
const myLegend = gLegend.legend();

myLegend
  .seriesNames(seriesNames)
  .geometry(legendType)
  .rem(myChart.rem())
  .alignment(legendAlign)
  .colourPalette((frameName));  

currentFrame.plot()
  .append("g")
  .attr("id","legend")
  .selectAll(".legend")
  .data(seriesNames)
  .enter()
  .append("g")
  .classed("legend",true)
  .call(myLegend)
```

    
