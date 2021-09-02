import React from "react";
import { Link } from "gatsby";

const BlogCard = ({ data }) => {
  const { image, title, url, date, Slug } = data;
  // console.log(data)
  // {console.log({Slug})}

  // console.log(image.localFile.childrenImageSharp[0].gatsbyImageData.images.fallback.src)
  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img style = {{height:200}} src={image.localFile.childrenImageSharp[0].gatsbyImageData.images.fallback.src} alt={title} />
      </div>
      <div className="lbi_details">
        <Link className="lbid_date" to={url}>
          {date}
        </Link>
        <h2>
          <Link to={url}>{title}</Link>
        </h2>
        <Link className="learnM" to={Slug}>
          Learn More
          {/* {console.log({slug})} */}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
