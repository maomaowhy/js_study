// 1.引入fs模块
const fs = require("fs");

// 2.调用方法读取文件
// fs.readFile("./resources/package.json", (error, data) => {
//   // 如果失败，则抛出错误
//   if (error) throw error;
//   // 如果没有出错，则输出内容
//   console.log(data.toString());
// });

// 3.使用Promise封装
const p = new Promise(function (resolve, reject) {
  fs.readFile("./resources/package.jso", (err, data) => {
    // 判断如果失败
    if (err) reject(err);
    // 如果成功
    resolve(data);
  });
});
p.then(
  function (value) {
    console.log(value.toString());
  },
  function (reason) {
    console.log("读取失败！！");
  }
);
