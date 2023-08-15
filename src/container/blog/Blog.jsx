import React from "react";
import "./blog.css";
import { Article } from "../../components";
import {blog01, blog02, blog03, blog05, blog04} from "./import"

const Blog = () => {
  let day = new Date().getFullYear();
  let mainDay = new Date().getDate();
  let month = new Date().toLocaleString('default', {month: 'short'});
  

  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article  imgUrl={blog01}  date= {`${mainDay} ${month}, ${day}`}  title="GPT-3 and Open  AI is the future. Let us explore how it is?"   />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article  imgUrl={blog02} date= {`${mainDay} ${month}, ${day}`} title="GPT-3 and Open  AI is the future. Let us explore how it is?" /> 
          <Article imgUrl={blog03}  date= {`${mainDay} ${month}, ${day}`} title="GPT-3 and Open  AI is the future. Let us explore how it is?" /> 
          <Article imgUrl={blog04} date= {`${mainDay} ${month}, ${day}`}  title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
          <Article imgUrl={blog05} date= {`${mainDay} ${month}, ${day}`}  title="GPT-3 and Open  AI is the future. Let us explore how it is?" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
