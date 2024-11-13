const UserDB = [];

//creating using object literal
const library = {
  books: [],
  addBook: () => {},
  getAvailableBooks: () => {},
};

//creating using Factory Functions
const Book = (title, author) => {
  return {
    title: title,
    author: author,
    isBorrowed: false,
  };
};

//using constructor function
function User(name) {
  this.name = name;
  this.borrowedBooks = [];
}
User.prototype.borrowBook = (title) => {
  this.borrowedBooks.push(title);
};
User.prototype.returnBook = (title) => {
  let books = this.borrowedBooks;
  for (let i = 0; i < books.length; i++) {
    if (books[i].title == title) {
      books.remove(i);
      break;
    }
  }
};
// Constructor function for LibraryMember, inheriting from User
function LibraryMember(name, membershipId) {
  User.call(this, name); // Call the User constructor
  this.membershipId = membershipId; // Additional property for LibraryMember
}

// Set up inheritance so LibraryMember inherits from User
LibraryMember.prototype = Object.create(User.prototype);
LibraryMember.prototype.constructor = LibraryMember;

// Method to display membership information - added to LibraryMember prototype
LibraryMember.prototype.getMembershipInfo = function () {
  console.log(`Name: ${this.name}, Membership ID: ${this.membershipId}`);
};

function createUser(e) {
  e.preventDefault();
  console.log(e);
}

function renderBooks() {
  document.getElementById("available_books");
  library.books.map((book) => {
  });
}
