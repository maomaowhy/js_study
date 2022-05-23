// 引入fs模块
const fs = require("fs");
// 回调地狱
// fs.readFile("./resources/package.json", (err, data1) => {
//   fs.readFile("./resources/package2.json", (err, data2) => {
//     fs.readFile("./resources/package3.json", (err, data3) => {
//       let result = data1 + "\r\n" + data2 + "\r\n" + data3;
//       console.log(result);
//     });
//   });
// });

// --使用Promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile("./resources/package.json", (err, data) => {
    resolve(data);
  });
});
p.then((value) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./resources/package2.json", (err, data) => {
      resolve([value, data]);
    });
  });
})
  .then((value) => {
    return new Promise((resolve, reject) => {
      fs.readFile("./resources/package3.json", (err, data) => {
        value.push(data);
        resolve(value);
      });
    });
  })
  .then((value) => {
    console.log(value.join("_____"));
  });
