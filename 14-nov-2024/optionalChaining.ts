type User = {
  name: string;
  age: number;
  address?: { city?: string };
};

function getEmail(user: User) {
  return user?.address?.city;
}

console.log(getEmail({ name: "sam", age: 22 }));

interface Vehicle {
  name: string;
}

type Car = {} | string;
enum Genre {
  "Sci-fi",
}
