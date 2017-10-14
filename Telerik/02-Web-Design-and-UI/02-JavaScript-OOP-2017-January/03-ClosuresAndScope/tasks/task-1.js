/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [],
			titles = [],
		 	categories = [],
		 	isbns = [];

        // variant 2
		// function listBooks(obj) {
        //     var result = [];
        //     if (obj && obj.author) {
        //         result = books.filter(function (book) {
        //             return book.author === obj.author;
        //         });
        //     } else if (obj && obj.category) {
        //         result = books.filter(function (book) {
        //             return book.category === obj.category;
        //         });
        //     } else {
        //         result = books;
        //     }
        //     result = result.sort(function (firstBook, secondBook) {
        //         return firstBook.ID - secondBook.ID;
        //     });
        //     return result;
        // }

		function listBooks(obj) {
			if (obj) {
				var prop;
				for (prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						var result = books.filter(function(book) {
							return book[prop] === obj[prop];
						});
					}
				}
				result = result.sort(function (firstBook, secondBook) {
				return firstBook.ID - secondBook.ID;
				});
				return result;
				// var result = books.filter(function(book) {
				// return obj.category === book.category;
				// });
				// return result;
			}		
			return books;
		}

		function addBook(book) {
			if (!book.title || !book.author || !book.isbn || !book.category) {
				throw Error('Invalid parameters');
			}
			if (book.title.length < 2 || book.title.length > 100) {
				throw Error('Book title name must be between 2 and 100 characters');
			}
			if (titles.indexOf(book.title) !== -1) {
				throw Error('Duplicate title name');
			}
			if (isNaN(book.isbn) || !(book.isbn.toString().length === 10 || book.isbn.toString().length === 13) || isbns.indexOf(book.isbn) !== -1) {
				throw Error('Invalid or duplicate ISBN number');
			}
			if (book.author === '') {
				throw Error('Author name must be non-empty string');
			}
			if (book.category.length < 2 || book.category.length > 100) {
				throw Error('Book category name must be between 2 and 100 characters');
			}
			book.ID = books.length + 1;
			titles.push(book.title);
			isbns.push(book.isbn);
			if (categories.indexOf(book.category) === -1) {
				book.category.ID = categories.length + 1;
				categories.push(book.category);
			}
			books.push(book);
			return book;
		}
		function listCategories() {
			categories.sort(function(a,b){
				return a.ID - b.ID;
			});
			// if (obj) {
			// 	var result = categories.filter(function(category) {
			// 		return category.ID === obj.ID;
			// 	});
			// 	return result;
			// }
			return categories;
		}
		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
