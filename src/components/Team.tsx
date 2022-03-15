const Team = () => {
  return (
    <div id="team">
      <img
        src="./assets/img/team.png"
        className="d-block mx-auto heading"
        alt="team"
      />

      <div className="container mt-5 pt-4 pb-4">
        <div className="row">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="mem">
              <img src="./assets/img/mem-1.png" alt="mem" />
              <h2>MAYOR HAMMELTON</h2>
              <h3>
                <span className="text-dark-blue">MAYOR &amp; MARKETING</span>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="mem">
              <img src="./assets/img/mem-2.png" alt="mem" />
              <h2>CAPTAIN BACON </h2>
              <h3>
                <span className="text-pink">DEVELOPER</span>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="mem">
              <img src="./assets/img/mem-3.png" alt="mem" />
              <h2>SOW WHITE </h2>
              <h3>
                <span className="text-orange ">STORY WRITER</span>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="mem">
              <img src="./assets/img/mem-4.png" alt="mem" />
              <h2>AVOCADO LOHAM</h2>
              <h3>
                <span className="text-pink">ILLUSTRATOR</span>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="mem">
              <img src="./assets/img/mem-5.png" alt="mem" />
              <h2>EIN-SWINE</h2>
              <h3>
                <span className="text-sea-grean">
                  DEVELOPER &amp; WEB DESIGNER
                </span>
              </h3>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="mem">
              <img src="./assets/img/mem-6.png" alt="mem" />
              <h2>BARBIE-Q</h2>
              <h3>
                <span className="text-pink">TESTER</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
