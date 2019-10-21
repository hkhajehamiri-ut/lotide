const head = require('../head');
const assertEqual = require('../assertEqual');


assertEqual(head([6,3,5]), 6);
assertEqual(head(["Hello","Lighthouse","Labs"]), "Hello");
assertEqual(head([15,20,31]), 20);
assertEqual(head([1]), 1);
assertEqual(head([]), 1);