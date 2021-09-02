import React, { Fragment } from "react";
import AuthorCard from "@/components/author-card";
import Comments from "@/components/comments";
import blogDetailsImage from "@/images/blog/7.jpg";
import ReactMarkdown from "react-markdown";

const SinglePostCard = (data) => {
  console.log(data.data.pageContext.data)
  // console.log(data.data.pageContext.data.image.localFile.childrenImageSharp[0].gatsbyImageData.images.fallback.src)
  return (
    <Fragment>
      <div className="single_blog">
        <div className="blog_thumb">
          <img src={data.data.pageContext.data.image.localFile.childrenImageSharp[0].gatsbyImageData.images.fallback.src} alt={data.data.pageContext.data.title} />
        </div>
        <div className="blog_headings">
          <span className="blog_date">20 nov</span>
          <h2>{data.data.pageContext.data.title}</h2>
        </div>
        <div className="blog_details">
          {/* <ReactMarkdown source = {data.data.pageContext.data.body}/> */}
          <ReactMarkdown children = {data.data.pageContext.data.body}/>
          
        </div>
        {/* <AuthorCard />
        <Comments /> */}
      </div>
    </Fragment>
  );
};

export default SinglePostCard;
