import React from "react";

const NFTs = () => {
  return (
    <div id="NFT">
      <div className="container">
        <div className="row">
          <div className="col-md-7 order-2 order-md-1">
            <h1 className="heading">UNIQUE COMPUTER GENERATED NFT’S.</h1>
            <p className="mb-2">
              The Hamton Pigs is a collection of 10,000 Hamton Pig NFT’s, unique
              digital collectibles living on the Ethereum blockchain. <br />
              Each one is randomly generated, and displays the crazy and quirky
              style of their unique personalities, characteristics and
              expressions.
              <br />
              Each NFT is unique and programmatically generated creating each
              character from hundreds of hand drawn assets ensuring that no 2
              pigs will ever be the same. Grab your one of a kind Pig today.
            </p>
          </div>
          <div className="col-md-5 piggy-container order-1 order-md-2">
            <img className="piggy" src="./assets/img/piggy.gif" alt="piggy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTs;
