interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const isLegal = (user: User): boolean => {
  if (user.age >= 18) {
    return true;
  }
  return false;
};
let user: User = {
  firstName: "sam",
  lastName: "chand",
  email: "sam@gmail.com",
  age: 22,
};
console.log(isLegal(user));

type Person = {
  gender: string;
  maritalStatus: string;
};

type Employee = User & Person;

let arr: (number | string)[] = [1, "2"];
export {};
