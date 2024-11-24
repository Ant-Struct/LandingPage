import './App.css';

function App() {
  return (
    <>
        <div>
      <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
          <div class="container topnav">

              <div class="navbar-header">
                  <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span class="sr-only">Toggle navigation</span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  <a class="navbar-brand topnav" href="#">AntStruct</a>
              </div>

              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                      <li>
                          <a href="#about">About</a>
                      </li>
                      <li>
                          <a href="#services">Services</a>
                      </li>
                      <li>
                          <a href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>


      <a name="about"></a>
      <div class="intro-header">
          <div class="container">

              <div class="row">
                  <div class="col-lg-12">
                      <div class="intro-message">
                          <h1>Landing Page</h1>
                          <h3>A Template by Start Bootstrap</h3>
                          <hr class="intro-divider"/>
                          <ul class="list-inline intro-social-buttons">
                              <li>
                                  <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                              </li>
                              <li>
                                  <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                              </li>
                              <li>
                                  <a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>

      </div>

      <a  name="services"></a>
      <div class="content-section-a">

          <div class="container">
              <div class="row">
                  <div class="col-lg-5 col-sm-6">
                      <hr class="section-heading-spacer"/>
                      <div class="clearfix"></div>
                      <h2 class="section-heading">Death to the Stock Photo:<br/>Special Thanks</h2>
                      <p class="lead">A special thanks to <a target="_blank" href="http://join.deathtothestockphoto.com/">Death to the Stock Photo</a> for providing the photographs that you see in this template. Visit their website to become a member.</p>
                  </div>
                  <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                      <img class="img-responsive" src="./img/ipad.jpg" alt=""/>
                  </div>
              </div>

          </div>

      </div>

      <div class="content-section-b">

          <div class="container">

              <div class="row">
                  <div class="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                      <hr class="section-heading-spacer"/>
                      <div class="clearfix"></div>
                      <h2 class="section-heading">3D Device Mockups<br/>by PSDCovers</h2>
                      <p class="lead">Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by <a target="_blank" href="http://www.psdcovers.com/">PSDCovers</a>! Visit their website to download some of their awesome, free photoshop actions!</p>
                  </div>
                  <div class="col-lg-5 col-sm-pull-6  col-sm-6">
                      <img class="img-responsive" src=".img/dog.jpg" alt=""/>
                  </div>
              </div>

          </div>

      </div>

      <div class="content-section-a">

          <div class="container">

              <div class="row">
                  <div class="col-lg-5 col-sm-6">
                      <hr class="section-heading-spacer"/>
                      <div class="clearfix"></div>
                      <h2 class="section-heading">Google Web Fonts and<br/>Font Awesome Icons</h2>
                      <p class="lead">This template features the 'Lato' font, part of the <a target="_blank" href="http://www.google.com/fonts">Google Web Font library</a>, as well as <a target="_blank" href="http://fontawesome.io">icons from Font Awesome</a>.</p>
                  </div>
                  <div class="col-lg-5 col-lg-offset-2 col-sm-6">
                      <img class="img-responsive" src="img/phones.jpg" alt=""/>
                  </div>
              </div>

          </div>

      </div>

      <a  name="contact"></a>
      <div class="banner">

          <div class="container">

              <div class="row">
                  <div class="col-lg-6">
                      <h2>Connect to Start Bootstrap:</h2>
                  </div>
                  <div class="col-lg-6">
                      <ul class="list-inline banner-social-buttons">
                          <li>
                              <a href="https://twitter.com/SBootstrap" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name">Twitter</span></a>
                          </li>
                          <li>
                              <a href="https://github.com/IronSummitMedia/startbootstrap" class="btn btn-default btn-lg"><i class="fa fa-github fa-fw"></i> <span class="network-name">Github</span></a>
                          </li>
                          <li>
                              <a href="#" class="btn btn-default btn-lg"><i class="fa fa-linkedin fa-fw"></i> <span class="network-name">Linkedin</span></a>
                          </li>
                      </ul>
                  </div>
              </div>

          </div>

      </div>
      <footer>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                      <ul class="list-inline">
                          <li>
                              <a href="#">Home</a>
                          </li>
                          <li class="footer-menu-divider">&sdot;</li>
                          <li>
                              <a href="#about">About</a>
                          </li>
                          <li class="footer-menu-divider">&sdot;</li>
                          <li>
                              <a href="#services">Services</a>
                          </li>
                          <li class="footer-menu-divider">&sdot;</li>
                          <li>
                              <a href="#contact">Contact</a>
                          </li>
                      </ul>
                      <p class="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>
                  </div>
              </div>
          </div>
      </footer>


    </div>
    </>
  );
}

export default App;
