import React, { Component } from "react";
import Header from "./Header";
import childhood1 from "../pictures/childhood1.jpg";

class Background extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <img
            src={childhood1}
            width="500"
            className="childhood"
            alt="Me as a Kid with Far Too Many Monitors"
          />
          <h1 className="FloaterTextRed2">A Brief History of....Me!</h1>
          <p className="textRed2">
            I was born just outside of Chicago and moved down to South Carolina
            when I was still young, a block from the beach. I'm one of eight
            kids. My father did coding as well, though most of it was for the
            government, so I was never really allowed to know exactly WHAT he
            did. Nevertheless it meant there were always computers in the house
            from as far back as I can remember. My first lessons in coding
            actually came back in elementary school. My school thought it
            important that we were given at least basic instruction in html and
            had us make very simple webpages back when geocities was still
            around.
          </p>
          <p className="textRed2">
            I grew up playing soccer every week at the YMCA, and later at the
            local recreation departments. I was a cub scout for a while, my mum
            having signed me up since my father was an eagle. It wasn't really
            something I was interested in, so eventually that died out. What did
            interest me however was computer games. Growing up my mother had a
            rule for us kids, we only got gifts on our birthday or christmas. So
            don't bother asking otherwise. There was an exception to this
            however. She would buy us any book we wanted, and so long as we
            could justify something, such as games, as educational she would
            usually buy us those as well. As such I played a lot of educational
            video games growing up. Specifically I very early on developed a
            love of games that were historical. I was one of those weirdos who
            would read the extras included with the games that explained
            historical context and such. That love of history remains with me
            still.
          </p>
          <p className="textRed2">
            I went to Wando High and focused my studies on Engineering and
            Sciences. Mostly chemistry and physics for the sciences, whereas my
            engineering scope was rather widespread. After graduating I was
            accepted to College of Charleston for Astrophysics, but switched at
            the end of my freshman year to the new Archaeology program that had
            just started. After obtaining my degree I was, unsurprisingly,
            unable to find a job actually using my degree. As such I started
            working at hotels to pay the bills, first as a night auditor but
            fairly quickly became the front office manager.
          </p>
          <p className="textRed2">
            I did pretty good in the hospitality industry, but it wasn't what I
            wanted to be doing and eventually I had the opportunity to try a new
            path forward. I took the Nucamp full stack web developer bootcamp
            and am now currently looking to apply what i've learned in the
            field. Right now I live in the middle of nowhere, so I am more than
            willing to relocate to really anywhere else.
          </p>
        </div>
      </div>
    );
  }
}

export default Background;
