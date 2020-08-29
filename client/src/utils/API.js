import axios from "axios";
const Url = "https://www.googleapis.com/books/v1/volumes?q="
const APIkey = "&key=AIzaSyDsqSTfw_IXwGrUPnue-vd09xOgr6zVJfU"

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },

  googleBookSearch: function (search) {
    return axios.get(Url + search + APIkey)
  }
};
