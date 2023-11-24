import React, { useState } from "react";
import Wrapper from "../../../assets/wrapper/ReviewSectionwrapper";
import { Container, Box, Typography, Button } from "@mui/material";
import { people } from "../../../../src/data";
import { IoFlag } from "react-icons/io5";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ReviewsSection = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPeople = people.slice(indexOfFirstItem, indexOfLastItem);

  const totalPageCount = Math.ceil(people.length / itemsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPageCount) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Wrapper>
      <Container className="container">
        <Box className="box">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography className="text">Reviews</Typography>
            <Button className="btn">Give your reviews</Button>
          </div>

          <Box className="box2">
            <div>
              <Typography className="text" style={{ fontSize: "3.5rem" }}>
                4.2
              </Typography>
            </div>
            <div>
              <Typography className="text1">Very good</Typography>
              <Typography className="text2">371 verified reviews</Typography>
            </div>
          </Box>
        </Box>
      </Container>
      <Container style={{ height: "34rem" }}>
        {currentPeople.map((person, index) => (
          <div
            style={{
              borderBottom: "1px solid lightgrey",
              marginBottom: "1rem",
            }}
            key={index}
          >
            <div className="review">
              <div>
                <img
                  src={person.image}
                  alt={person.name}
                  className="person-img"
                />
              </div>
              <div
                className="info-container"
                style={{ flex: 1, marginLeft: "1rem" }}
              >
                <div className="info-line">
                  {" "}
                  <h5 className="rating">{person.rating}</h5>
                  <span>|</span>
                  <h5 className="name">{person.name}</h5>
                  <span style={{ marginLeft: "56rem" }}>
                    <IoFlag />
                  </span>
                </div>
                <div className="text3"> {person.text}</div>
              </div>
            </div>
          </div>
        ))}
      </Container>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => paginate(currentPage - 1)}
          startIcon={<NavigateBeforeIcon style={{ color: "black" }} />}
        ></Button>
        <Typography className="text2">{`${currentPage} of ${totalPageCount} pages`}</Typography>
        <Button
          onClick={() => paginate(currentPage + 1)}
          endIcon={<NavigateNextIcon style={{ color: "black" }} />}
        ></Button>
      </Box>
    </Wrapper>
  );
};

export default ReviewsSection;
