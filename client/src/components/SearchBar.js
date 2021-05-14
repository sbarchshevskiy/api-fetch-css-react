import React, { useState } from 'react';


export default function SearchBar({getQuery}) {

  const [text, setText] = useState('');

  const setInput = (q) => {
    setText(q);
    getQuery(q)
  }

  return(
    <section className="search">
      <form>
        <input type="text"
               className="form-control"
               placeholder="search"
               value={text}
               onChange={(event) =>
                 setInput(event.target.value)}
               autoFocus
        />
      </form>
    </section>
  )
}