# D3-Decompose

**d3-decompose** takes SVG or CSS3 transform strings and converts them into usable values.

A use case for this project was manipulating the the rotation of a `<text>` without changing the translation.

## Installation

### HTML

```html
<script src="http://d3js.org/d3.v4.min.js"></script>
<script src="d3-decompose.js"></script>
```

### JS (Babel)

```javascript
import { decompose } from 'd3-decompose'
```

### Node

```javascript
const decompose = require('d3-decompose')
```


## Usage

The `decompose` function takes a string input `'translate(100)'` and returns an object of the values.

```javascript
decompose('translate(-200, 1) scale(1.5,1.2)');

{
  translate: 'translate(-200, 1)',
  scale: 'scale(1.5, 1.2)'
}
```

It can also be used to return the values in an array form instead of the default strings.

```javascript
decompose('translate(-200, 1) scale(1.5,1.2)', false);

{
  translate: ['-200', '1'],
  scale: ['1.5', '1.2']
}
```



### HTML

```javascript

// decompose available on the global d3 object
d3.decompose('translate(20,100) rotate(40) scale(12)')
```

### Node/JS (Babel)

```javascript
// decompose imported/required into project as function
decompose('translate(20,100) rotate(40) scale(12)')
```

**d3-decompose** allows you to manipulate transform strings on elements.

```javascript
  var svg = d3.select('svg.example');

  // Create a rectangle with an initial transform
  svg.selectAll('rect')
    .data([{ size: 5 }])
    .enter()
    .append('rect')
    .attr('fill', 'red')
    .attr('width', function(d) { return d.size })
    .attr('height', function(d) { return d.size })
    .attr('transform', 'translate(100, 100) scale(1)');

  // Create a new transform and use it, keeping the original translate transform
  svg.selectAll('rect')
    .transition()
    .attr('transform', function(d) {
      // Store the old transform decomposed to an object
      var existingTransform = d3.decompose(this.getAttribute('transform'));

      // Create a new transform
      var updateTransformString = d3.decompose('scale(10) rotate(90)');

      // Preserve the original transform translation, but overwrite with our new transformation properties
      var newTransformString = existingTransform.translate + ' ' + updateTransformString;

      console.log(existingTransform);
      console.log(updateTransformString);
      console.log(newTransformString);

      return newTransformString;
    })
    .duration(3000);
```

## Contributors

* Alex Coulcher [@moonthug](https://twitter.com/moonthug)