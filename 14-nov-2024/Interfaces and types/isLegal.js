"use strict";
const isLegal = (user) => {
    if (user.age >= 18) {
        return true;
    }
    return false;
};
let user = {
    firstName: "sam",
    lastName: "chand",
    email: "sam@gmail.com",
    age: 22,
};
console.log(isLegal(user));
