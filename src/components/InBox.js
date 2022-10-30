import React, { useState } from "react";

const InBox = (props) => {
  const [data, setData] = useState({ title: "", content: "" });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setData((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    props.add(data);
    setData({ title: "", content: "" });
    e.preventDefault();
  };
  return (
    <form className="create-note" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={data.title}
        name="title"
        placeholder="Enter Title"
      />
      <textarea
        onChange={handleChange}
        value={data.content}
        name="content"
        placeholder="Enter Content"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default InBox;
