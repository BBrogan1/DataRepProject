import React from 'react';
import { Books } from './books';
import axios from 'axios';

export class Read extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        books: [],
        search: "" //search field
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
    }
//reloading data so that we dont need to hit refresh on delete or edit
        ReloadData(){
            axios.get('http://localhost:4000/api/books')
            .then((response) => {
                this.setState({ books: response.data })
            })
            .catch((error) => {
                console.log(error)
            });
        }
         
        //an onchange function will be triggered when the user types something
        onChange = e =>{
            this.setState({ search : e.target.value});
        }


    render() {

        const {books, search} = this.state;
        const filteredBooks = books.filter( book =>{
            return book.Title.toLowerCase().indexOf( search.toLowerCase())!== -1
        }) 

        return (
            <div>
                <h1>Book Collection</h1>
                {/* Search bar input field */}
                <input class="Search Book" icon="search" onChange={this.onChange} placeholder="Search Book Title"/>
                
                <Books books={filteredBooks} ReloadData={this.ReloadData}></Books>
            </div>
        );
    }
}

