import React from 'react';
import axios from 'axios';

export class Edit extends React.Component {

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

    //same as create.js but editing the existing book
    componentDidMount(){
        console.log("load "+this.props.match.params.id);

        axios.get('http://localhost:4000/api/books/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title:response.data.Title,
                Author:response.data.Author,
                Year:response.data.Year,
                Cover:response.data.Cover,
                _id:response.data._id
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }


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
                Cover:this.state.Cover,
                _id:this.state._id
            };

            axios.put('http://localhost:4000/api/books/'+this.state._id,newBook)
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
                            value='Edit Book'
                            className='btn btn-info'></input>
                    </div>
                </form>
            </div>
        );
    }
}