import { useState, useContext } from "react";
import $ from "jquery";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import "./About.css";
import { Mint } from "../Mint";
import { BlockchainContext } from "../context/BlockchainContext";

const About = () => {
  const [showMore, setShowMore] = useState(true);
  const { mint } = useContext(BlockchainContext);
  const [mintValue, setMintValue] = useState(0);

  const toggleShowMore = () => {
    $("#more").slideToggle();
    setShowMore((prevState) => !prevState);
  };

  const toggleVideo = () => {
    $("#video").toggleClass("active");
    $("#dark-overlay").toggleClass("active");
  };

  const incrementHandler = () => {
    if (mintValue >= 10) return;
    setMintValue(mintValue + 1);
  };

  const decrementHandler = () => {
    if (mintValue === 0) return;
    setMintValue(mintValue - 1);
  };

  const mintHandler = () => {
    mint({ amount: mintValue });
  };

  return (
    <div id="about">
      <video controls id="video" src="./assets/video/thp_story.mp4"></video>
      {/* <div className="our-story-text">
        <div
          style={{ border: "1.4625px solid #FFFFFF", filter: "blur(0.4875px)" }}
        >
          Our Story
        </div>
        <div
          style={{ border: "2.925px solid #C882FF", filter: "blur(0.73125px)" }}
        >
          Our Story
        </div>
        <div
          style={{
            mixBlendMode: "hard-light",
            border: "4.75313px solid rgba(97, 0, 255, 0.2)",
            textShadow:
              "0px 7.3125px 9.50625px #8300C1, 0px 4.75313px 3.65625px rgba(14, 0, 21, 0.7)",
          }}
        >
          Our Story
        </div>
        <div
          style={{
            mixBlendMode: "hard-light",
            border: "6.21562px solid #CC00FF",
            filter: "blur(7.3125px)",
          }}
        >
          Our Story
        </div>
        <div
          style={{
            mixBlendMode: "hard-light",
            border: "4.75313px solid #CC00FF",
            filter: "blur(21.9375px)",
          }}
        >
          Our Story
        </div>
      </div> */}

      {/* Mint */}
      <section className='row'>
        <div className='col center'>
          <img onClick={decrementHandler} src="./assets/minus.png" alt="" className="cal" />
          
          <div className="mint">
            <p className="selected text-5xl font-bold">{mintValue}</p>
          </div>
         <img onClick={incrementHandler} src="./assets/plus.png" alt="" className="cal" />
        </div>
      </section>
      <div className="d-flex justify-content-center ">
        <h1 style={{ fontSize: "2.2rem", fontWeight:"normal",color:"#feab2d" }}>75 MATIC/NFT</h1>
      </div>
      <div className="d-flex justify-content-center ">
       <img src="./assets/mint.png" onClick={mintHandler} alt="" className="cal" />
      </div>

      <div className="d-flex justify-content-center">
        <h1 style={{ fontSize: "1.6rem",fontWeight:"normal" }} id="total">0/10000 Minted</h1>
      </div>

      <img
        className="d-block mx-auto our-story"
        src="./assets/img/our-story.png"
        alt="our-story"
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="left-img"
              src="./assets/img/about.svg"
              alt="about"
            />
          </div>
          <div className="col-md-6 right-text">
            <p>
              We welcome you to the flavoursome town of ‘
              <span className="text-purple">The Hamtons</span>”, set in the
              great metropolis of New Pork. Here is the home to a unique
              community of pigs, who love nothing more than standing out with
              their wacky dress sense and quirky personalities.
            </p>
            <p>
              It is the place to be seen and somewhere you are guaranteed to
              never get boared.
            </p>
            <p>
              Accommodation matches the unique style of each resident pig, from
              small houses to the super sky risers! There really is{" "}
              <span className="text-purple">something for everyone.</span>
            </p>
          </div>
          <div className="col-md-12">
            <div className="mtop"></div>
            <div className="right-img-container">
              <img src="./assets/img/about-right.png" alt="story-2" />
            </div>
            <div>
              <p className="mt-3 mb-0">
                <span className="text-orange">Our story</span> starts some years
                back, when the original Founder of New Pork, Mr JP Morham,
                revealed on his death bed, that instead of depositing his{" "}
                <span className="text-orange">crypto coins</span> into the
                City’s PYG Bank savings corporation,
              </p>
              <p>
                he’d cleverly hidden it in a secret location buried beneath the
                city of The Hamtons.
              </p>
              <p className="lefted">
                Sadly, before he had time to snort the location, he died,
                leaving behind the story of the missing fortune. This quickly
                became an old pig’s ‘tail’ passed down from generation to
                generation, with many trying, without luck to find the
                <span className="text-orange"> missing treasures.</span>
              </p>
              <p className="lefted">
                That is until one day, a pig cunning and ruthless and so
                desperate to get his trotters on the fortune, set about a
                dastardly plan to claim it, intent on becoming the most
                <span className="text-orange"> powerful pig</span> in New Pork
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="more" style={{ display: "none" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5 ">
              <img
                className="left-img"
                src="./assets/img/hogfather.png"
                alt="judge"
              />
            </div>
            <div className="col-md-6 right-text ps-0 ps-md-2 mt-0 mt-md-5">
              <p>
                This pig in question is known as{" "}
                <span className="text-dark-purple">‘The Hogfather’</span>, he is
                the leader of a local swine syndicate, who runs the underbelly
                of The Hamtons, executed by his henchman, the dim-witted wolves
                willing to do everything at his beckon.
              </p>
              <p>
                He wasn’t always like this, having been the runt of his litter
                and ruthlessly bullied by his piglet siblings, he grew up
                wanting-revenge on all those that had taunted him, you could say
                he had a touch of a{" "}
                <span className="text-dark-purple">Napoleon-pig complex.</span>
              </p>
            </div>

            <img
              className="w-100"
              style={{ marginTop: "-1rem" }}
              src="./assets/img/sheep.png"
              alt="sheep"
            />

            <p className="pt-4">
              His plan was simple, take the land from the pigs at what ever
              cost! ‘leave no stone unturned’ he oinked mercilessly to the
              wolves.
            </p>

            <p>
              Although the stereotype of wolves would have you thinking they
              were ferocious beasts, actually these wolves had a softer side.
              Eager to please the Hogfather, they formed their own plan, which
              was to go door to door offering the pigs money for their homes.
              They knew that the pigs would be fearful of them, so as to not be
              intimidating, decided on a disguise.
            </p>

            <p>
              Ever heard the saying{" "}
              <span className="text-blue">‘wolf in sheep’s clothing’</span>…yep
              that’s what disguise they decided on. The pigs loved their
              community and their houses and declined the offer from the wolves.
              Pigsty to pigsty, house to house, high rise tower to high rise
              tower they went, but not one little pig wanted to sell.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 right-text ps-0 pe-2 ps-md-2 pe-md-0 d-flex align-items-center order-2 order-md-1">
              <p className="mb-0">
                The Hogfather was getting inpatient, and decided he needed to
                take matters into his own hands. That night as all the pigs
                slept contently in their beds, the Hogfather initiated his plan.
                The next morning, everyone woke up to a loud squealing and to
                discover a single link of sausages left menacingly on their
                pillows.
                <br /> This however didn’t get the results that the Hogfather
                wanted, and the pigs still refused to sell, this was when The
                Hogfather committed his{" "}
                <span className="text-red">
                  most wicked and audacious crime…. emergency Meating.
                </span>
              </p>
            </div>
            <div className="col-md-4 ps-0 ps-md-2 order-1 order-md-2">
              <img
                className="left-img"
                src="./assets/img/sleeping-pig.png"
                alt="sleeping"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="meeting col-md-6">
              <img
                className="left-img"
                src="./assets/img/meeting.png"
                alt="meeting"
              />
            </div>
            <div className="col-md-6 right-text ps-0 ps-md-2 d-flex align-items-center meeting">
              <p className="mb-0">
                Mr Chris P Bacon the Police Commissioner had failed to turn up
                to work, day by day more town people disappeared, including
                Detective Inspector Cumberland. After the 3rd night, the entire
                Hamtons police force had disappeared, the town was in uproar,
                fearful for their lives. With no police left, the town Mayor
                along with retired Veteran Captain Bacon decided to call an
                <span className="text-red"> emergency Meating.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container ps-2">
          <div className="row">
            <div className="col-md-6 right-text d-flex flex-column align-items-center justify-content-center order-2 order-md-1">
              <p className="text-center">
                All the pigs crammed into the tiny town hall, utter panic
                spreading throughout.
              </p>
              <p className="mb-0">
                <div className="text-center text-red">
                  ‘What are we going to do’ squealed one
                </div>
                <div className="text-center text-orange">
                  ‘I’m to young to die’ oinked another
                </div>
                <div className="mb-5 text-center text-dark-purple">
                  ‘We don’t feel safe’ grunted a third
                </div>
                <div className="text-center">
                  As if Captain Bacon was back on the battlefields, he quickly
                  came up with a plan, decided that they needed to beef up
                  security immediately, in the hopes to stop more pigs
                  disappearing.
                </div>
              </p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <img className="left-img" src="./assets/img/cow.png" alt="cow" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 ps-0 ps-md-2 pe-0 pe-md-5 mt-4">
              <img
                className="left-img"
                src="./assets/img/female-piggy.png"
                alt="cow"
              />
            </div>
            <div className="col-md-6 right-text d-flex flex-column align-items-center justify-content-center mt-4 ps-0 ps-md-2">
              <p className="">
                How will we afford this – shouted the pigs in chorus?
              </p>
              <p>
                “I know” said Amy Swinehouse, “how about we do a fundraiser? We
                can show case our style and sell our pictures on ONLY HAMS”. The
                pigs quickly gathered everyone in the town and set about taking
                pictures of their most unique styles, even the town celebrities
                Harry Trotter, Ham Solo and Swine Johnson came out to help.
              </p>
            </div>

            <p className="text-center mt-5 pt-4">
              With them now on sale, the pigs crossed their trotters and waited
              anxiously in the hope that they would sell enough, before the next
              pig goes missing.
            </p>

            <div className="col-md-6">
              <img
                src="./assets/img/studio.png"
                className="w-100"
                alt="studio"
              />
            </div>
            <div className="col-md-6">
              <img
                src="./assets/img/laptop.png"
                className="w-100"
                alt="laptop"
              />
            </div>

            <div className="col-12">
              <img
                src="./assets/img/can-you-help.png"
                className="d-block mx-auto"
                style={{ maxWidth: "635px", width: "100%" }}
                alt="help"
              />
            </div>

            <div className="col-12">
              <a href="#hero">
                <img
                  className="d-block mx-auto"
                  src="./assets/img/help-now.png"
                  style={{ width: "100%", maxWidth: "200px" }}
                  alt="help"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="btns d-flex justify-content-center">
        <button>
          <a href={`${showMore ? "#about" : "#more"}`}>
            <img
              src={`./assets/img/${showMore ? "read-more" : "read-less"}.png`}
              alt="see-more"
              onClick={toggleShowMore}
            />
          </a>
        </button>
        <button>
          <img
            src="./assets/img/watch-video.png"
            onClick={toggleVideo}
            alt="watch-video"
          />
        </button>
      </div>
    </div >
  );
};

export default About;
