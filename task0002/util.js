// // 判断arr是否为一个数组，返回一个bool值
// function isArray(arr) {
//     return Array.isArray(arr);
// }

// function isArray(arr) {
//     return arr instanceof Array;
// } // 当脚本拥有多个全局环境，例如html中拥有多个iframe对象，instanceof的验证结果可能不会符合预期,通过constructor判断也有同样的问题。

// function isArray(arr) {
//     return Object.prototype.toString.call(arr) === "[object Array]";
// }

// // 判断fn是否为一个函数，返回一个bool值
// function isFunction(fn) {
//     return typeof fn === "function";
// }

// function isFunction(fn) {
//     return Object.prototype.toString.call(fn) === "[object Function]";
// }

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
// function cloneObject(src) {
//     var o;
//     if (Object.prototype.toString.call(src) === "[object Array]") {
//         o = [];
//     } else {
//         o = {};
//     }
//     for (var i in src) {
//         if (src.hasOwnProperty(i)) {
//             if (typeof src[i] === "object") {
//                 o[i] = cloneObject(src[i]);
//             } else {
//                 o[i] = src[i];
//             }
//         }
//     }
//     return o;
// }

// function cloneObject(obj) {
//     var o = obj.constructor === Array ? [] : {};
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             o[i] = typeof obj[i] === "object" ? cloneObject(obj[i]) : obj[i];
//         }
//     }
//     return o;
// }

// 测试用例
// var srcObj = {
//     a: 1,
//     b: {
//         b1: ["hello", "hi"],
//         b2: "JavaScript"
//     }
// };
// console.log(cloneObject(srcObj));

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
// function uniqArray(arr) {
//     var newArr = [];
//     for (var i in arr) {
//         if (newArr.indexOf(arr[i]) == -1) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
// function simpleTrim(str) {
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) != " " && str.charAt(i) != "\t") { // str.charAt(i)等价于str[i]
//             break;
//         }
//     }
//     for (var j = str.length - 1; j >= 0; j--) {
//         if (str.charAt(j) != " " && str.charAt(j) != "\t") {
//             break;
//         }
//     }
//     return str.slice(i, j+1);
// }

// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 尝试使用一行简洁的正则表达式完成该题目
// function trim(str) {
//     return str.replace(/^\s+|\s+$/g, '');
// }
// var str = '   hi!  ';
// str = trim(str);
// console.log(str); 

// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// function each(arr, fn) {
//     for (var i in arr) {
//         fn(arr[i], i)
//     }
// }
// function output(item, index) {
//     console.log(index + ': ' + item)
// }

// var arr = ['java', 'c', 'php', 'html'];
// each(arr, output);

// 获取一个对象里面第一层元素的数量，返回一个整数
// function getObjectLength(obj) {
//     var count = 0;
//     for (var i in obj) {
//         if (obj.hasOwnProperty(i)) {
//             count++;
//         }
//     }
//     return count;
// }

// function getObjectLength(obj) {
//     return Object.keys(obj).length; // Object.keys(o)为Object的一个静态方法，参数是一个对象，返回一个包含o的所有可枚举自由（非继承）属性名字的数组。
// }

// 判断是否为邮箱地址
// function isEmail(emailStr) {
//     return /^(\w+\.)*\w+@\w+(\.\w+)+$/.test(emailStr)
// }

// function isEmail(emailStr) {
//     var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return pattern.test(emailStr)
// }

// 判断是否为手机号
// function isMobilePhone(phone) {
//     var pattern = /^(\+\d{1,4})?\d{7,11}$/;
//     return pattern.test(phone);
// }