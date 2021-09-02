import React from "react";
import {GatsbyImage , StaticImage , getSrc , getImage} from "gatsby-plugin-image";
import Image from "gatsby-image";
// import { _getStaticImage } from "gatsby-plugin-image/dist/src/components/static-image.server";

// const query = graphql`
// query {
//   allStrapiCsteam {
//     nodes {
//       image {
//         localFile {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// }
// `

const TeamCard = ({ data }) => {
  const { image, name, designation, url, sd } = data;
  // const image = getImage(data.allStrapiCsteam.nodes.image)
  // {console.log(image)}
  // {console.log(data.image)}
// {console.log(image[0].localFile.childImageSharp.gatsbyImageData.images.fallback.src)}

  return (
    <div className="singleTM">
      <div className="tm_img">
        <img style = {{height:520}} src={image[0].localFile.childImageSharp.gatsbyImageData.images.fallback.src} alt={name} />
        <div className="tm_overlay">
          <div className="team_social">
            {sd.map(({ LinkedinProfiles }, index) => (
              <a key={index} href={LinkedinProfiles}>
                <span>Linkedin</span>
              </a>
            ))}
          </div>
        </div>
      </div> 
      <div className="detail_TM">
        <h5>{name}</h5>
        <h6>{designation}</h6>
      </div>
    </div>
  );
  
};


export default TeamCard;
