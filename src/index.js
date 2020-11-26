import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {books} from "./books";
import SpecificBook from "./Book";

/*function Greeting() {
    return (
        <React.Fragment>
            <div>
                {/!*<h4>John Doe</h4>*!/}
                <Person />
                <Message />
            </div>
        </React.Fragment>);
}*/

/*const Greeting = () => {
    return React.createElement('div', {},
        React.createElement('h1', {}, 'Hello World'));
}*/

const BookList = () => {
    return (
        <section className='bookList'>{books.map((book, index) => {
            //spread out all the properties in the book
            return <SpecificBook key={book.id} {...book}></SpecificBook>
        })}
        </section>
    )
}

/*const Book = (props) => {
    console.log(props)
    return (
        <article className={'book'}>
            <img
                src={props.img}
                alt={''}/>
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    )
}*/

/*const Book = () => {
    return (
        <article className={'book'}>
            <Image></Image>
            <Title />
            <Author />
        </article>
    )
}

const Image = () => {
    return <img
        src={'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'}
        alt={'Book'}/>
}
const Title = () => <h1>I Love You to the Moon and Back</h1>
const Author = () => <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>Amelia Hepworth</h4>*/

/*const Person = () => <h4>John Doe</h4>
const Message = () => {
    return <p>This is my message</p>
}*/

ReactDom.render(<BookList/>, document.getElementById('root'));