import React from "react";
import Typist from "react-typist";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import MainPoster from "../../assets/img/poster2.jpg";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
          backgroundColor: "#121214"
        }}
        // className="title bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        className="bgstyle title text-center m-0 "
      >
        <div>
          <img className="ex-midea" alt="poster1" src={MainPoster} style={{ width: '800px', height: 'auto', overflow: 'hidden' }} />
        </div>
        {/* <div id="stars"></div> */}
        <Container className="text-center">
          <h1 ref={ref} className="display-1">
            {title}
          </h1>
          {/* <Typist className="lead typist" cursor={{
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 1000,
          }}>
            {" "}
            {message}
          </Typist> */}


        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
