import React, { useState } from 'react';

import ipad from './img/ipad.jpg'
import image1 from './img/peakpx.jpg'
import image2 from './img/image2.jpg'

function HomePage() {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic to handle email submission
      console.log(email);
      setShowModal(false);
    };
  return (
<div>
<nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
    <div className="container topnav">

        <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand topnav" href="#">AntStruct</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                {/* <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#features">Features</a>
                </li> */}
                <li>
                    <a onClick={() => setShowModal(true)}>Join Our Waiting List</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


<a name="about"></a>
<div className="intro-header">
    <div className="container">

        <div className="row">
            <div className="col-lg-12">
                <div className="intro-message">
                    <h1>AntStruct is not another CRM System, it gives your business the structure for growth and sustainability</h1>
                    <h3>Simple to use, collaborate Seamlessly, Drive Performance</h3>
                    <hr className="intro-divider"/>
                    <ul className="list-inline intro-social-buttons">
                        <li>
                            <a href="https://twitter.com/antstruct" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                        </li>
                        <li>
                            <a href="https://github.com/antstruct" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://linkedin.com/antstruct" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>

<a  name="features"></a>
<div className="content-section-a">

    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-sm-6">
                <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">Simplify Your Business Operations with <br/>Antstruct</h2>
                <p className="lead">Antstruct is an all-encompassing, efficient management took. It cuts 
                    across the key life-cycle of your business, geared towards productivity and sustainability.</p>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img className="img-responsive" src={ipad} alt=""/>
            </div>
        </div>

    </div>

</div>

<div className="content-section-b">

    <div className="container">

        <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">Key Features List:</h2>
                <p className="lead">Seamless collaboration across key business life-cycle</p>
                <ul className="llist-none hover:list-disc">
                    <li className="lead2">HR</li>
                    <li className="lead2">Sales & Marketing</li>
                    <li className="lead2">Finance and Account</li>
                    <li className="lead2">project Management</li>
                    <li className="lead2">Customer Service</li>
                    <li className="lead2">Inventory</li>
                </ul>
            </div>
            <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                <img className="img-responsive" src={image1} alt="image1"/>
            </div>
        </div>

    </div>

</div>

<div className="content-section-a">

    <div className="container">

        <div className="row">
            <div className="col-lg-5 col-sm-6">
                <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">Unlock Business Growth</h2>
                <p className="lead">Drive and efficient business system, with a result oriented staff base</p>
                <p className="lead">Manage sales pipelines and forecasts</p>
                <p className="lead">Run targeted marketing campaigns</p>
                <p className="lead">Deliver exceptional customer experience</p>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                <img className="img-responsive" src={image2} alt="image2"/>
            </div>
        </div>

    </div>

</div>

<a  name="join"></a>
<div className="banner">

    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2>Be the first to know when Antstruct is available. Leave your email address below to join our waiting list.</h2>
                <button onClick={() => setShowModal(true)} className="btn btn-default btn-lg network-main"><span className="network-name">Join Our Waiting List</span></button>
            </div>
        </div>
    </div>

</div>
<footer>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <ul className="list-inline">
                    <li>
                        <a href="#about">Home</a>
                    </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li className="footer-menu-divider">&sdot;</li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <p className="copyright text-muted small">Copyright &copy; Anstruct 2024. All Rights Reserved</p>
            </div>
        </div>
    </div>
</footer>

{showModal && (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h2>Join Our Waiting List</h2>
        <button
          className="close-modal"
          onClick={() => setShowModal(false)}
        >
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="form-input"
        />
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  </div>
)}
</div>
  );
}

export default HomePage;