//import * as d3 from 'd3';

import { decompose } from '../index'

console.log(decompose('translate(20,100)'));
// { translate: 'translate(20,100)' }

console.log(decompose('translate(20,100) rotate(40) scale(12)', false));
// { translate: [ '20', '100' ], rotate: [ '40' ], scale: [ '12' ] }
