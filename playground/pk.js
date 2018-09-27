var key = 'aZt2vMyVAn';

var jwt = require('jsonwebtoken');
var token = jwt.sign({ supplier_id: '5ad8917d18e397171aea7d32' }, key);
console.log(token);

// var decoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdXBwbGllcl9pZCI6IjVhZDg5MTdkMThlMzk3MTcxYWVhN2QzMiIsImlhdCI6MTUzNzg3NDAwMn0.IpFZUobapA5H507b_t_1Y0sbrcFowj_JIAO7Yt5ZXFg',
//                         key);
// console.log(decoded);

// if(jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdXBwbGllcl9pZCI6IjVhZDg5MTdkMThlMzk3MTcxYWVhN2QzMiIsImlhdCI6MTUzNzg3NDAwMn0.IpFZUobapA5H507b_t_1Y0sbrcFowj_JIAO7Yt5ZXFg', key)){
//   console.log('done')
// } else {
//   console.log('err');
// }
