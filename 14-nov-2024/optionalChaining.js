"use strict";
function getEmail(user) {
    var _a;
    return (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.city;
}
console.log(getEmail({ name: "sam", age: 22 }));
