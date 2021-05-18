class MyMath {
  static sum = (...args) => {args.reduce((acc, item) => acc + item, 0)};
}

console.log("test");
exports.MyMath = MyMath;