import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

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

const books = [
    {
        id: 1,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
        title: 'I Love You to the Moon and Back',
        author: 'Amelia Hepworth'
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/81GIvo3b02L._AC_UL200_SR200,200_.jpg',
        title: 'Paint by sticker',
        author: 'Workman Publishing'
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/91vtkaBWXeL._AC_UL200_SR200,200_.jpg',
        title: 'How to Catch a Unicorn',
        author: 'Adam Wallace'
    }
]

const BookList = () => {
    return (
        <section className='bookList'>{books.map((book, index) => {
            //spread out all the properties in the book
            return <Book key={book.id} {...book}></Book>
        })}
        </section>
    )
}

const Book = ({ img, title, author }) => {
    // const Book = (props) => {
    // destructuring props
    // const { img, title, author } = props;
    //attribute, eventHandler
    //onClick, onMouseHover
    const clickHandler = (e) => {
        console.log(e)
        console.log(e.target)
        alert('hello world')
    }
    const complexExample = (author) => {
        console.log(author)
    }
    return (
        <article className={'book'} onMouseOver={() => {
            console.log(title)
        }}>
            <img
                src={img}
                alt={''}/>
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type={"button"} onClick={clickHandler} style={{cursor: 'pointer'}}>
                Reference Example
            </button>
            <button type={"button"} onClick={() => complexExample(author)}>
                More Complex Example
            </button>
        </article>
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