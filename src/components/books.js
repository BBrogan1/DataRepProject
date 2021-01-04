import React from 'react';
import {BookItem} from './bookItem';

export class Books extends React.Component{

    render(){
        return this.props.books.map( (book)=>{
            return <BookItem book={book} ReloadData={this.props.ReloadData}></BookItem>
            //passed down from read.js to child, which is books.js and is then passed to its children
        })
    }
}