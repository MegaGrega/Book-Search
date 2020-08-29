import React from 'react'
import './style.css'
import DeleteBtn from '../DeleteBtn'
import Btn from '../Btn'
import API from '../../utils/API'

function SearchResult(props) {
    function databaseSave() {
        let bookObj = {
            title: props.title,
            description: props.description,
            authors: props.authors.join(', '),
            image: props.img,
            link: props.link
        }
        API.saveBook(bookObj)
    }

    return (
        <div>
            <div className="col-md-9">
                {/* for saved books, displays a delete btn */}
                {props.saved ? <DeleteBtn onClick={props.delete} data-id={props.id} /> : null}
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text"><small className="text-muted">{props.authors}</small></p>
                    <p className="card-text">{props.description}</p>
                    <a className="btn textBtn" role="button" href={props.link} target="blank">View on Google</a>
                    {/* for search results, displays a save button */}
                    {props.searched ? <Btn text={'Save me'} onClick={databaseSave} /> : null}
                </div>
            </div>
            <div className="col-md-3">
                <img src={props.img}/>
            </div>
        </div>
    )
}

export default SearchResult