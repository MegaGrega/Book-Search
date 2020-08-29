import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Saved() {
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };
    function deleteBook(id) {
        // add code here to remove a book using API
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }
    return (
        <Container fluid>
            <Row>
                <Col size="md-12 sm-12">
                    <Jumbotron>
                        <h1>Saved Books</h1>
                    </Jumbotron>
                    {books.length ? (
                        <List>
                            {books.map(book => {
                                return (
                                    <ListItem key={book._id}>
                                        <img src={book.image}></img>
                                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                                        <a href={book.link} target="blank">
                                            <strong>
                                                {book.title} by {book.authors}
                                            </strong>
                                        </a>
                                        <p>{book.description}</p>
                                        <br></br>


                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}

export default Saved;
