import React from "react";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="./assets/img/logo.png" className="logo" alt="logo" />
          </div>
          <div className="col-md-6">
            <div className="social text-left text-md-end">
            <a className="btn" href="https://twitter.com/HamtonsPigs" target="_blank">
            <img src="./assets/img/twitter.png" alt="twitter" />
          </a>

              <a className="btn" href="https://discord.com/invite/nEfa4pmqDR" target="_blank">
            <img src="./assets/img/discord.png" alt="discord" />
              </a>
              <a className="btn"href="https://www.youtube.com/channel/UCL11HnSvsdSFNle78Iy46LQ" target="_blank">
            <img src="./assets/img/youtube.png" alt="youtube" />
          </a>
            </div>
          </div>
          <div className="col-md-6 mt-5">
            COPYRIGHT &copy; 2021, THE HAMTONS
          </div>
          <div className="col-md-6 mt-5 text-left text-md-end">
            INTERFACE AND IMPLEMENTATION CONTRACTS
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
