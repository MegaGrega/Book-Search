import React, { useState} from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import SearchResult from "../components/SearchResult";

function Search() {
    const [books, setBooks] = useState({})
    const [Search, setSearch] = useState("")

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch(value)
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        API.googleBookSearch(Search)
            .then(res => setBooks(res.data.items))
            .catch(err => console.log(err))

    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>React Google Books Search</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            value={Search}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <FormBtn
                            disabled={!(Search)}
                            onClick={handleFormSubmit}
                        >
                            Search Book
              </FormBtn>
                    </form>
                </Col>
                <Col size="md-12">
                    {books ? (
                        <Col size={'sm-12'}>
                            {(books.length > 0) ? books.map(book => <SearchResult key={book.id} id={book.id} searched={true} title={book.volumeInfo.title} authors={book.volumeInfo.authors} description={book.volumeInfo.description} link={book.volumeInfo.infoLink} img={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.smallThumbnail :"https://via.placeholder.com/140x100" } />) : <h2>Can't find what you're looking for</h2>}
                        </Col>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default Search;
