import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const handleChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="search characters"
          autoFocus
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
