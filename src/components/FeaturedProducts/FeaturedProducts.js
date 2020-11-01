import React from "react";
import "./FeaturedProducts.scss";
import dessert1 from "../../img/desserts/DSC09027.jpg";
import dessert2 from "../../img/desserts/DSC09888.jpg";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";
import Img from "gatsby-image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const FeaturedProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: true,
  };

  const images = useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { sourceInstanceName: { eq: "backgrounds" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fixed(height: 600, width: 1000, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);
  const bgImages = images.backgrounds.nodes;

  return (
    <section id="products" className="featured-products">
      <div className="product-container">
        <div className="product-info">
          <h2>Della Nonna Roche</h2>
          <p>
            Tasty cold dessert suitable for all season, made form milk chocolate
            mousse, shiny and crispy milk chocolate glaze with hazelnut, on
            spongy base. Best served defrosted.
          </p>
        </div>
        <img className="product-image" src={dessert1} />
      </div>
      <div className="product-container reverse">
        <img className="product-image" src={dessert2} />
        <div className="product-info">
          <h2>Bacio Bianco</h2>
          <p>
            Tasty cold dessert suitable for all season, made from white
            chocolate and hazelnut mousse, with shiny white chocolate glaze on a
            spongy biscuit base. Best served defrosted.
          </p>
        </div>
      </div>
      <Slider {...settings} className="overflow-hidden slider">
        {bgImages.map((image, index) => {
          return (
            <Img
              imgStyle={{ objectFit: "cover" }}
              key={index}
              objectFit="fill"
              fixed={image.childImageSharp.fixed}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default FeaturedProducts;
