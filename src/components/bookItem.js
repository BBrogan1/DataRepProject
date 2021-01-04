import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class BookItem extends React.Component {

constructor(){
    super();

    this.DeleteBook = this.DeleteBook.bind(this);
}

DeleteBook(e){
    e.preventDefault();
    console.log("Delete: "+this.props.book._id);

    axios.delete("http://localhost:4000/api/books/"+this.props.book._id)
    .then(()=>{
        this.props.ReloadData();
    })
    
    .catch();
}
//the cards in which all the book details and css are held
    render() {
        return (
            <div>
                <Card>
                    <Card.Header style={{backgroundColor:"darkgray", fontStyle: "italic", marginTop:"35px", borderStyle:"solid"}}><b>{this.props.book.Title}</b></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.book.Cover} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                            {this.props.book.Author}
                            </footer>
                            <footer className="blockquote-footer">
                                {this.props.book.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/"+ this.props.book._id} className="btn btn-info">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteBook}>Delete</Button>
                </Card>
            </div>
        );
    }
}