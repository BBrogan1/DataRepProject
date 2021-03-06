import React from 'react';
import axios from 'axios';

export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);

        this.state = {
            Title: '',
            Author: '',
            Year: '',
            Cover: ''
        }
    }

    //creating the different headers for submission
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    onChangeAuthor(e) {
        this.setState({
            Author: e.target.value
        });
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangeCover(e) {
        this.setState({
            Cover: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Book: " + this.state.Title + " "
            + this.state.Author + " "
            + this.state.Year + " " +
            this.state.Cover);

            const newBook ={
                Title:this.state.Title,
                Author:this.state.Author,
                Year:this.state.Year,
                Cover:this.state.Cover
            };

        axios.post('http://localhost:4000/api/books', newBook)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));    

    }

    render() {
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Author}
                            onChange={this.onChangeAuthor}></input>
                    </div>
                    <div className="form-group">
                        <label>Add Book Year: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.onChangeYear}></input>
                    </div>
                    <div className='form-group'>
                        <label>Books Cover: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Cover}
                            onChange={this.onChangeCover}>
                        </textarea>
                    </div>


                    <div className="form-group">
                        <input type='submit'
                            value='Add Book'
                            className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}