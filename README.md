# D3-Decompose

**d3-decompose** takes SVG or CSS3 transform strings and converts them into usable objects.

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

With **d3-transform**, you can rewrite the above code like this:

```javascript
var transform = d3.transform()
    .translate(function(d) { return [20, d.size * 10] })
    .rotate(40)
    .scale(function(d) { return d.size + 2 });

var svg = d3.select('svg').selectAll('g')
    .data([{ size: 5 }, { size: 10 }])
    .enter()
    .append('g')
    .attr('transform', transform);
```

## Contributors

* Alex Coulcher [@moonthug](https://twitter.com/moonthug)