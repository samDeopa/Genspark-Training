var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["FICTION"] = 0] = "FICTION";
    BookGenre[BookGenre["NON_FICTION"] = 1] = "NON_FICTION";
    BookGenre[BookGenre["MYSTERY"] = 2] = "MYSTERY";
    BookGenre[BookGenre["SCIENCE_FICTION"] = 3] = "SCIENCE_FICTION";
    BookGenre[BookGenre["BIOGRAPHY"] = 4] = "BIOGRAPHY";
    BookGenre[BookGenre["FANTASY"] = 5] = "FANTASY";
})(BookGenre || (BookGenre = {}));
var MemberRole;
(function (MemberRole) {
    MemberRole[MemberRole["ORGANIZER"] = 0] = "ORGANIZER";
    MemberRole[MemberRole["MODERATOR"] = 1] = "MODERATOR";
    MemberRole[MemberRole["MEMBER"] = 2] = "MEMBER";
    MemberRole[MemberRole["GUEST"] = 3] = "GUEST";
})(MemberRole || (MemberRole = {}));
function Book(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
}
function Member(name, role) {
    this.name = name;
    this.role = role;
}
var memberDb = [];
var BookDb = [];
//adding some books and memebers
for (var i = 0; i < 8; i++) {
    var genre = i % 6;
    BookDb.push(new Book("Book ".concat(i), "Author ".concat(i), genre));
}
for (var i = 0; i < 4; i++) {
    var role = i % 4;
    memberDb.push(new Member("Member ".concat(i), role));
}
console.log(BookDb);
console.log(memberDb);
var getBooksByGenre = function (booksList, genre) {
    console.log(genre);
    return booksList.filter(function (item) { return item.genre == genre; });
};
console.log(getBooksByGenre(BookDb, BookGenre.BIOGRAPHY));
var getMembersByRole = function (memberList, role) {
    return memberList.filter(function (member) { return member.role == role; });
};
console.log(getMembersByRole(memberDb, MemberRole.GUEST));
var countBooksByGenre = function (booksList) {
    var genreFreq = [0, 0, 0, 0, 0, 0];
    booksList.forEach(function (book) {
        genreFreq[book.genre]++;
    });
    var freq = {};
    genreFreq.forEach(function (freq, ind) {
        console.log(BookGenre[ind] + " " + freq);
    });
};
countBooksByGenre(BookDb);
function fun(x, y) {
    return x;
}
