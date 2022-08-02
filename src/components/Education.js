import React, { Component } from "react";
import Header from "./Header";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import college from "../pictures/college.jfif";
import nucamp from "../pictures/nucamp.png";
import ARC from "../pictures/ARC.jfif";

class Education extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <div className="col-6">
            <Card text="black" color="danger" className="MakeItBig">
              <CardImg src={college} />
              <CardBody className="text-center">
                <CardTitle className="Boldify">College of Charleston</CardTitle>
                <CardText className="Boldify">
                  I have a B.S. in Archaeology and Anthropology with a minor in
                  Religious Studies from College of Charleston
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-3">
            <h1 className="FloaterTextRed">Fun Fact!</h1>
            <p className="textRed">
              I didn't really mean to get the religious studies minor. I
              personally enjoy learning about other cultures in general (hence
              the anthropology degree) and that includes religions. I hadn't
              realized how many courses I had taken until one of my professors
              asked how many more courses I was away from obtaining the major
              since I had taken multiple courses with her already. At that point
              I decided I might as well pick up the minor, since having a third
              major would have required me to take more overall hours, and I
              wasn't willing to pay for an additional semester just to pick up a
              third major. Let alone religious studies, which would have just
              given me the trifecta of useless degrees!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h1 className="FloaterTextAqua">Coding Bootcamp</h1>
            <p className="textAqua">
              I was nervous starting the bootcamp as my knowledge going into it
              was fairly limited. I knew I could probably teach myself just
              fine, as we all know google knows all, but I wanted to make sure
              that I would also learn coding best-practices and such in addition
              to just the coding itself. It's a decision I don't regret in the
              slightest. I would have gone back to college and gotten a whole
              degree instead of just a bootcamp certificate, but that would
              require more money and time than I have available to commit at the
              moment.
            </p>
            <p className="textAqua">
              I still have all my coursework saved so that I can use it as
              reference material whilst I still am getting started. This little
              mock-site is mostly just for me to get extra practice in, but will
              likely also be shown to anyone who wants to see that I at least
              know the basics. I'll likely try to input extras in here and
              there, again just for practice. I plan to implement a mock
              back-end for this as well, but won't likely set up a login
              function since there's really no arguable reason for it.
            </p>
          </div>
          <div className="col-3">
            <Card text="black" color="info" className="MakeItBig">
              <CardImg src={nucamp} />
              <CardBody className="text-center">
                <CardTitle className="Boldify">
                  Nucamp Coding Bootcamp
                </CardTitle>
                <CardText className="Boldify">
                  I have also finished a full-stack coding bootcamp provided by
                  Nucamp. I have learned Javascript, Bootstrap, React, React
                  Native, MongoDB, Express, NodeJS, Expo, and a little bit of
                  Redux.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col" />
        </div>
        <div className="row">
          <div className="col-4">
            <Card text="black" color="success" className="MakeItBig">
              <CardImg src={ARC} />
              <CardBody className="text-center">
                <CardTitle className="Boldify">Additional Training</CardTitle>
                <CardText className="Boldify">
                  While obtaining my college degree I have also taken courses on
                  ARC-GIS with a small amount of freelancing on the side for
                  practice. I have also completed an archaeological field school
                  excavating a parsonage house that dated back to the Yamasee
                  war. In addition I have completed an internship with the South
                  Carolina Historical Society working in their archives to
                  catalogue and preserve their visual materials collections.
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-5">
            <h1 className="FloaterTextGreen">What is ARC-GIS?</h1>
            <p className="textGreen">
              For those who aren't aware ARC-GIS is a program used to create
              maps. Usually maps that are interactive that give all sorts of
              information. For instance our final project was creating a map
              that would show the damage caused by a rogue asteroid impacting
              the city of Charleston including the monetary cost of rebuilding.
              We had all sorts of databases at our command, including some basic
              census data. My freelancing I did on the side was mostly for
              practice. I made a bunch of simple maps detailing locations of
              certain snail populations for a biology professor.
            </p>
            <h1 className="FloaterTextGreen">The Field School</h1>
            <p className="textGreen">
              My archaeological field school was actually a lot of fun, if a lot
              of work. We drove out every day into the middle of nowhere,
              marched out into the woods and started shoveling. We got hands on
              expirience with basic archaeological practices and a general idea
              of what it was like to work at a real dig. Ticks were a major
              problem in addition to the other bugs, and while I won't go into
              detail because it's disgusting and irrelevant, I will say I made
              sure I sprayed myself down with two different brands of spray
              every day because that was the LAST thing I wanted to deal with!
              In addition to the field school I have volunteered at one other
              dig though only for a short time before they closed it down for
              the season.
            </p>
            <h1 className="FloaterTextGreen">Internship</h1>
            <p className="textGreen">
              My internship at the historic society lasted through my last
              semester of college. It had it's ups and downs. I loved working
              with all the old documents, but dear gods is it difficult to read
              people's handwriting from a couple hundred years ago! I mostly
              catalogued photographs and pre-photograph pictures putting them
              into a searchable database. By which I mean an excel document. I
              hope they eventually intended to get a real user-friendly UI, but
              for all I know the massive excel sheet was all they wanted. At the
              very least I got hands on expirience in maintaining their
              archives, temperature/humidity controlled rooms and all to help
              preserve the documents as long as possible. It's not knowledge
              i'll likely ever get to use again, but you never know!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
