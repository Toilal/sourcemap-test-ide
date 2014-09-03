main = function() {
  var t = f1() * f2();
  return t;
};

clickMe = function() {
  var m = main();
  console.log("clickMe: " + m);
};
