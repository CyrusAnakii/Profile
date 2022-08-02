import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardImgOverlay,
  Button,
} from "reactstrap";
import scroll from "../pictures/scroll.png";
import Header from "./Header";

function Reader() {
  var [currentText, setCurrentText] = useState(
    "These are just a few terrible things i've written that are mostly here because I wanted more coding practice. Plus I haven't really used state data anywhere else on this profile. Click one of the buttons below to choose something to read. I am not responsible for any vomiting that occurs due to reading them."
  );

  function poem2() {
    setCurrentText(
      `Another day another dollar
      When does my life begin?
      My dreams severed and hopes be dashed
      A life is borne with sin.
      
      A boy once looked upon the stars
      And did declare to god
      That he himself would sail the space
      Up where the angels trod.
      
      Yet did that boy then grow up
      And was forced to see
      His ambitions die and realize
      That it would never be.
      
      His faith in god abandoned then
      Once all was said and done
      That never would he see the sights
      Of a stellar sun.
      
      Instead he waits upon the earth
      With pen on paper writ
      His tears of glory long withheld
      Now shared through paltry wit
      
      “One day” he says
      “I shall go forth, the light forever towards”
      “Beyond the sight of all mankind”
      “If only in my words.”
      `
    );
  }
  function story1() {
    setCurrentText(
      `Albia is a land littered with mystery. Or rather, it has a lot of mysterious litter. For most, the strange objects hold no value. They have no discernable uses, which for a people who are mostly just worried about where the next meal is going to come from, a shiny useless object is still useless. And so the people tend to go about their daily business and pay no mind to what secrets may or may not lie buried just below their feet. Indeed life is hard in the land of Albia. The people toil their whole lives just to obtain the bare necessities. War is common between the many factions, for alas most of the land lacks any real order. Civilization is almost non-existent in many places, with the only law being that there IS no law. As such it is a dangerous life, often even in more settled places. Raids by lawless brigands is sadly the norm rather than the exception. There are stories that this was not always so. Stories that claim Albia was once a very different place. Yet that is all they are, stories. Each story seems to contradict the next, with the details always being more than a little fuzzy. There is no evidence to back up the stories, and as far back as anyone can remember: Albia has always been this way. But for some few, the allure of the unknown is too great to resist. It is those few who will decide the fate of Albia, for better or for worse.  
    `
    );
  }
  function story2() {
    setCurrentText(
      `
      Chip after chip gently cascaded to the soft pure snow beneath him as he deftly flintknapped his 
      new spearhead. It would be a magnificent tool, one that would bring him much game. He could tell 
      that this stone spearhead was special, its exalted destiny plain for all to see. It was going to 
      possibly be one of the greatest to ever exist, sheer perfection, and he had the distinct honor of 
      crafting this mythical weapon. He could see it in his mind: the beautiful form it would take, the 
      keen edge it would have. He would be the envy of his tribesmen, and his enhanced hunting skill with 
      this weapon would bring him ravishing women from all tribes to vie for his person. Truly, this spearhead 
      would be a new beginning in his life, and completion was only a few more surgical chips away.
      He rapped the hammerstone on the edge of the spearhead to sharpen the already deadly weapon, at which point 
      the entire head snapped into two uneven chunks, rendering it completely worthless. He stared mournfully at 
      his legendary broken weapon for a few moments and sighed before dropping the remnants to the ground and 
      picking up another wedge of flint. That last one had obviously been a test, surely, this spearhead would 
      be the one to redefine history!
      `
    );
  }
  function poem1() {
    setCurrentText(
      `A dream I had late last night,
    A dream I did despise,
    For in it’s world I had found
    A look into your eyes.
    
    Though long it’s been since you and I
    Cut our ties and fled,
    Your face still haunts my every sleep,
    A torture in my head!
    
    If I wanted to see you
    I could in just an hour,
    Yet never does my ‘wakend mind
    Consider such a power.
    
    So stay away from my rest,
    And withdraw from my mind,
    For dreams of you are the only place
    Where happiness I find.`
    );
  }
  return (
    <div>
      <Header />
      <Card key={scroll} text="black" color="black" style={{ fontSize: 20 }}>
        <CardImg height="700px" src={scroll} />
        <CardImgOverlay>
          <CardBody className="text-center scrollMargins">
            <CardText className="scrollMargins">{currentText}</CardText>
          </CardBody>
        </CardImgOverlay>
      </Card>
      <div className="row CenterThis3">
        <div className="col">
          <Button onClick={story1} color="primary">
            Story Idea 1
          </Button>
        </div>
        <div className="col">
          <Button onClick={poem1} color="primary">
            Poem 1
          </Button>
        </div>
        <div className="col">
          <Button onClick={poem2} color="primary">
            Poem 2
          </Button>
        </div>
        <div className="col">
          <Button onClick={story2} color="primary">
            Opening of Story 2
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Reader;
