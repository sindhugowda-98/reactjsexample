import React from 'react';
import ReactDom from 'react-dom';
//CSS
import './index.css';
const author = 'Sindhu';
const title = 'The Power of Your Subconscious Mind Paperback';
const img =
  'https://images-eu.ssl-images-amazon.com/images/I/8170Bj%2BbSOL._AC_UL200_SR200,200_.jpg';
function BookList() {
  return (
    <section className="booklist">
      <Book job='developer' />
      <Book title='random title' number={22} />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {/* <p>{let x =6 }</p> */}
      <p>{props.job}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById('root'));
