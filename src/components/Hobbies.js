import React, { Component } from "react";
import Header from "./Header";
import Book from "../pictures/book.jpg";
import Planet from "../pictures/planet.jpg";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardGroup,
} from "reactstrap";

class Hobbies extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row borderRed">
          <div className="col-6">
            <Card text="black" color="danger">
              <CardImg src={Book} height="200 px" />
              <CardBody className="text-center">
                <CardTitle className="Boldify2">Writing</CardTitle>
                <CardText className="Boldify">
                  Though it's not usually every day that I do so, I do enjoy
                  writing both fiction and the occasional bad poem when the mood
                  strikes.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-6">
            <h1 className="textRed">Amateur Hour</h1>
            <p className="textRed">
              My writing is just for my own amusement. Though there are some who
              would disagree with me, I personally don't think i'm particularly
              gifted at it. Back in high school I was published in the yearly
              school magazine and about a year ago I took third in a writing
              contest, but otherwise i've never truly published anything. I have
              a novel i've been working on for a while that I hope to publish
              some day, but I suppose we'll see about that.
            </p>
          </div>
        </div>
        <div className="row borderAqua">
          <div className="col-6">
            <Card text="black" color="info">
              <CardImg src={Planet} height="200 px" />
              <CardBody className="text-center">
                <CardTitle className="Boldify2">Modding</CardTitle>
                <CardText className="Boldify">
                  Recently i've gotten into modding some of the games I play.
                  For the most part they're just personal tweaks, but the more I
                  learn the more i'm able to accomplish!
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-6">
            <h1 className="textAqua">Amateur Hour 2: Electric Boogaloo</h1>
            <p className="textAqua">
              Most of my mods have been for the Paradox Interactive strategy
              games series. Imperator, Europa Universalis, Crusader Kings, and
              Stellaris specifically. I haven't published any of those anywhere
              since they're just personal tweaks for the most part. I do get a
              nice little rush of happiness whenever I finally manage to figure
              out problems I have while making them though. So not only do I get
              enjoyment from using them, but even just making them as well. I
              have posted two mods for Age of Wonders III, but those were made
              using their map/campaign editors rather than actually coding.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Hobbies;
