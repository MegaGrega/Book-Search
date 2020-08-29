import React from 'react'
import DeleteBtn from '../DeleteBtn'
import API from '../../utils/API'

function SearchResult(props) {
    function databaseSave() {
        let bookObj = {
            title: props.title,
            authors: props.authors.join(', '),
            description: props.description,
            image: props.img,
            link: props.link
        }
        API.saveBook(bookObj)
    }

    return (
        <div className="row">
            <div className="col-md-9">
                <div className="card-body">
                    <h2>{props.title}</h2>
                    <h4>{props.authors}</h4>
                    <p>{props.description}</p>
                    <a href={props.link} target="blank">Google Books</a>
                    <button onClick = {databaseSave}>Save Book</button>
                </div>
                
            </div>
            <div className="col-md-3">
                <img src={props.img}/>
            </div>
        </div>
    )
}

export default SearchResult