var CommingSoon = React.createClass({
    render: function() {
      return (
  
        <div className="container">
          <div className="row">
            <div className="left-wrap col-12 col-md-5">
              <div className="left">
                <p><span className="days" /><span className="small"> days</span></p>
                <p><span className="hours" /><span className="small"> hours</span></p>
                <p>&nbsp;&nbsp;<span className="minutes" /><span className="small"> minutes</span></p>
                <p>&nbsp;&nbsp;<span className="seconds" /><span className="small"> seconds</span></p>
              </div>
            </div>
            <div className="col-12 col-md-7 right">
              <div className="mainInfso">
                <h1>COMING SOON</h1>
                <p className="slogan">Site under development.will updated soon</p>
                <form className="form-subscribe" action="#"> <input type="email" className="form" placeholder="Your email address1" required /> <button type="submit">Subscribe</button> </form>
                <form>Hwllo</form>
              </div>
              <ul className="icon-list">
                <li className="icon"><a className="twitter" href="google.com" /></li>
                <li className="icon"><a className="linkedin" href="google.com" /></li>
                <li className="icon"><a className="facebook" href="google.com" /></li>
                <li className="icon"><a className="instagram" href="google.com" /></li>
                <li className="icon"><a className="youtube" href="google.com" /></li>
                <li className="icon"><a className="github" href="google.com" /></li>
                <li className="icon"><a className="stackoverflow" href="google.com" /></li>
                <li className="icon"><a className="medium" href="google.com" /></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  });