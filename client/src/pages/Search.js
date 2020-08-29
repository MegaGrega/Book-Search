import React, { useState} from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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
                            {(books.length > 0) ? books.map(book => <p>Result</p>) : <h2>Can't find what you're looking for</h2>}
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
