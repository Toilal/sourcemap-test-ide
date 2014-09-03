main = function() {
  var t = f1() * f2();
  return t;
};

clickMe = function() {
  var m = main();
  console.log("clickMe: " + m);
};

f1 = function() {
  var t = 1+1;
  return t;
};

f2 = function() {
  var t = 2+2;
  return t;
};

//# sourceMappingURL=sourcemap-test-ide.js.map