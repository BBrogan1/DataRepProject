import React from 'react';

export class Content extends React.Component {


    //HTML and in-line CSS for front page aesthetics
    render() {
        return (
            <div>
                <h1>Welcome to Ben's Book Collection!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
                <hr></hr>
                <br></br>
                <p>Feel free to edit incorrect information, delete or add any books you like!</p>
                <p>Below you can visit the websites of some local Galway book stores:</p>
                <p>(click image to visit their website)</p>
                <a href="https://www.dubraybooks.ie/galway">
                    <img src={'https://pbs.twimg.com/profile_images/1145671979430764546/1ucW8Z9e.png'} width="200" height="200" style={{border:"solid black", margin:"30px"}}/>
                </a>
                <a href="https://www.abcbooks.ie/">   
                    <img src={'https://www.abcbooks.ie/media/200929/logo_2015s.jpg'} width="300" height="200" style={{border:"solid black", margin:"30px"}}/>
                </a>
                <a href="https://www.easons.com/">   
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmoBRoRlnq859jZHfpGzsnrjRzsvvmqsGEoQ&usqp=CAU'} width="200" height="200" style={{border:"solid black", margin:"30px"}}/>
                </a>
                <hr></hr>
                <div>
                        <h2>My Book of the Week!</h2>
                        <p>(click image to purchase)</p>
                        <a href="https://www.blacklibrary.com/all-products/the-master-of-mankind-ebook.html">
                            <img src="https://www.blacklibrary.com/Images/Product/DefaultBL/xlarge/BLPROCESSED-Master-of-Mankindcover.jpg" width="300" height="400" style={{border:"solid black", marginTop:"20px", marginBottom:"100px"}}/>
                        </a>
                        <h3>Please read the user guide in the wiki section of github to learn more about this application.</h3>
                </div>
            </div>

        );
    }
}