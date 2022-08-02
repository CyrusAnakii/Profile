import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
  Button,
} from "reactstrap";
import temp from "../pictures/temp.jpg";
import Header from "./Header";
import Tevinter from "../pictures/tevinter.jpg";
import Resume from "../pictures/resume.pdf";

function MainPage() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-md-3 d-none d-lg-block">
          <img src={Tevinter} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <CardGroup className="CenterThis">
            <Card inverse color="primary">
              <CardImg src={temp} alt="A picture of me" />
              <CardBody className="text-center">
                <CardTitle>Matt Ramsey</CardTitle>
                <CardText>Lookin' to get this coding party started!</CardText>
              </CardBody>
            </Card>
            <Card inverse color="primary">
              <CardBody>
                <CardTitle className="text-center">Contact Info</CardTitle>
                <CardText>
                  <i className="fa fa-phone" />
                  Phone Number: 843-343-6741
                </CardText>
                <CardText>
                  <i className="fa fa-envelope" /> Email: Cairsiden@yahoo.com
                </CardText>
                <CardText>
                  Current Address: 7175 North Highway 17, Awendaw SC
                </CardText>
                <CardText>
                  <Button href="https://github.com/CyrusAnakii" color="warning">
                    Github: https://github.com/CyrusAnakii
                  </Button>
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
        <div className="col-md-3 d-none d-lg-block">
          <img src={Tevinter} alt="" />
        </div>
      </div>
      <div className="CenterThis2">
        <a className="btn btn-primary" href={Resume} role="button">
          Click here for my resume!
        </a>
      </div>
    </div>
  );
}

export default MainPage;
