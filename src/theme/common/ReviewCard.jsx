import { BsStarFill } from "react-icons/bs";
import { useState } from "react";
import Wrapper from "../../assets/wrapper/Reviews";
const ReviewCard = ({ title, desc, name, city, img, rating }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDesc = () => {
    setShowFullDescription(!showFullDescription);
  };
  return (
    <Wrapper>
      <div className="card-container">
        <div className="card-div">
          <div className="cards" />
          <div className="card-content">
            <div className="cards-blog">
              <div className="card-title-div">
                <div className="card-title">
                  {`"${title}"`}
                  <br />
                </div>

                <div className="card-description-div">
                  {showFullDescription ? (
                    <>
                      <div className="card-desc">{desc}</div>

                      <div className="more-btn" onClick={toggleDesc}>
                        View less
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="card-desc">{desc.slice(0, 100)}...</div>

                      <div className="more-btn" onClick={toggleDesc}>
                        View more
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="section-div">
                <div className="stars">
                  {Array.from({ length: rating }, (v, i) => (
                    <div className="star-icon" key={i}>
                      {<BsStarFill />}
                    </div>
                  ))}
                </div>

                <div className="rev-name-div">
                  <div className="rev-name">
                    <div className="name-review">{name}</div>
                    <div className="city-rev">{city}</div>
                  </div>

                  <div className="social">
                    <div className="social-icon">
                      <div className="google-icon">
                        <img
                          className="icon-image"
                          alt="Google"
                          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        />
                      </div>
                    </div>

                    <div className="text">Google</div>
                  </div>
                </div>
              </div>
            </div>

            <img className="rev-image" src={img} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ReviewCard;
