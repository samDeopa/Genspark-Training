enum BookGenre {
  FICTION,
  NON_FICTION,
  MYSTERY,
  SCIENCE_FICTION,
  BIOGRAPHY,
  FANTASY,
}

enum MemberRole {
  ORGANIZER,
  MODERATOR,
  MEMBER,
  GUEST,
}

function Book(title: string, author: string, genre: BookGenre) {
  this.title = title;
  this.author = author;
  this.genre = genre;
}

function Member(name: string, role: MemberRole) {
  this.name = name;
  this.role = role;
}

type BookObj = {
  title: string;
  author: string;
  genre: BookGenre;
};

type MemberObj = {
  name: string;
  role: MemberRole;
};
const memberDb: MemberObj[] = [];
const BookDb: BookObj[] = [];
//adding some books and memebers
for (let i = 0; i < 8; i++) {
  const genre = i % 6;

  BookDb.push(new Book(`Book ${i}`, `Author ${i}`, genre));
}

for (let i = 0; i < 4; i++) {
  const role = i % 4;
  memberDb.push(new Member(`Member ${i}`, role));
}
console.log(BookDb);
console.log(memberDb);

const getBooksByGenre = (booksList: BookObj[], genre: BookGenre) => {
  console.log(genre);
  return booksList.filter((item) => item.genre == genre);
};
console.log(getBooksByGenre(BookDb, BookGenre.BIOGRAPHY));

const getMembersByRole = (memberList: MemberObj[], role: MemberRole) =>
  memberList.filter((member) => member.role == role);
console.log(getMembersByRole(memberDb, MemberRole.GUEST));

const countBooksByGenre = (booksList: BookObj[]) => {
  let genreFreq = [0, 0, 0, 0, 0, 0];
  booksList.forEach((book) => {
    genreFreq[book.genre]++;
  });
  let freq = {};

  genreFreq.forEach((freq, ind) => {
    console.log(BookGenre[ind] + " " + freq);
  });
};
countBooksByGenre(BookDb);
