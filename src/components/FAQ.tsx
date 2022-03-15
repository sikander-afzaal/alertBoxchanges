import { useEffect } from "react";
import $ from "jquery";

const FAQ = () => {
  useEffect(() => {
    $("#FAQ .item").click(function () {
      let $this = $(this);

      if ($this.hasClass("active")) {
        $this.removeClass("active");
        $("#FAQ .item .answer").slideUp();
      } else {
        $("#FAQ .item").removeClass("active");
        $("#FAQ .item .answer").slideUp();
        // $this.siblings().find(".answer").slideUp();
        $this.find(".answer").slideToggle();
        $this.addClass("active");
      }
    });
  }, []);
  return (
    <div id="FAQ">
      <div className="container">
        <img src="./assets/img/faq.png" className="d-block mx-auto" alt="faq" />

        <div className="faqs mt-4">
          <div className="row">
            <div className="col-lg-4 pe-lg-5">
              <img
                className="piggy"
                src="./assets/img/faq-piggy.png"
                alt="piggy"
              />
            </div>
            <div className="col-lg-8">
              <div className="item">
                <div className="question">
                  <p>What is A Hamton Pig?</p>
                </div>
                <div className="answer">
                  <p>
                    If you don’t know what a Hamton Pig is, you must be Stupig.
                    <br />
                    Hamton Pigs are the quirkiest of NFT characters. There are
                    10,000 in total and each has its own unique style,
                    characteristic and traits.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="question">
                  <p>Why Should I Help A pig?</p>
                </div>
                <div className="answer">
                  <p>
                    These pigs NEED your help. Every passing day without minting
                    one of these Pigs, and helping to beef up security, the
                    chances that the Hogfather turns another little pig into a
                    link of sausages, soars!
                    <br />
                    As well as adopting your digital friend, there are a number
                    of benefits to minting a Hamton Pig, including adopting a
                    real pig, supplying over 17000 meals to hungry children,
                    giving large amounts to charity, as well as being in with a
                    chance to win MATIC in our many planned giveaways.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="question">
                  <p>How to Help (Mint) A Pig?</p>
                </div>
                <div className="answer">
                  <p>
                    This question is usually asked by them Dim Witted Wolves!
                    You probably all already know this one, but I’l drop it in
                    here for them anyway. Hamton Pig.
                    <br />
                    With the MetaMask plug-in installed, unlock and authorize
                    MetaMask to log in to the Polygon Matic mainnet, and click the
                    ‘Mint’ button to get your very own
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="question">
                  <p>Is my Pig Unique?</p>
                </div>
                <div className="answer">
                  <p>
                    Each and every Pig is 100% unique, like a Fingerprint.
                    <br />
                    All our wonderful Pig NFT’s are unique and programmatically
                    generated creating each character from hundreds of hand
                    drawn assets ensuring that no 2 pigs will ever be the same.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="question">
                  <p>How are the Hamton Pigs created and Stored?</p>
                </div>
                <div className="answer">
                  <p>
                    Each unique Hamton Pig NFT is a randomized computer
                    generated art picture, with its traits and original picture
                    data stored on IPFS, which cannot be tampered with. 50 of
                    the 10,000 Hamton Pig NFT’s are NOT randomized and are
                    hand-crafted, they are main characters from the story, or
                    special themed Pigs intended for giveaway marketing
                    purposes, or retained for members of the team.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="question">
                  <p>How much will it cost to Mint? </p>
                </div>
                <div className="answer">
                  <p>
                    What a Boar-ing question. The cost to Mint an Pig is 75
                    MATIC and gas fee per transaction. If you are looking to mint
                    more than 1 Pig, then make sure you do it in the same
                    transaction to save yourself on gas fees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
