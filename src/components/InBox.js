import React, { useState } from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

const InBox = (props) => {
  const [data, setData] = useState({ title: "", content: "" });
  const [isBig, setIsBig] = useState(true);
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
    setIsBig((preValue) => !preValue);
  };
  return (
    <form className="create-note" onSubmit={handleSubmit}>
      {isBig ? (
        <textarea
          onChange={handleChange}
          value={data.content}
          name="content"
          rows="1"
          placeholder="Type Content Here"
          onClick={() => setIsBig((preValue) => !preValue)}
        />
      ) : (
        <>
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
          <Zoom in={true}>
            <Fab type="submit">
              <PlaylistAddIcon />
            </Fab>
          </Zoom>
        </>
      )}
    </form>
  );
};

export default InBox;
