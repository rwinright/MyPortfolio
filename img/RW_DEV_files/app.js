var require = meteorInstall({"imports":{"ui":{"Components":{"Nav":{"Nav.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// imports/ui/Components/Nav/Nav.jsx                                                                        //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
module.exportDefault(Nav = props => {
  const scrollToRef = ref => {
    // window.scrollTo(0, ref.current.offsetTop)
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return React.createElement("div", {
    className: "Nav"
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("div", {
    className: "nav-container",
    onClick: () => scrollToRef(props.homeRef)
  }, React.createElement("span", null, "H"))), React.createElement("li", null, React.createElement("div", {
    className: "nav-container",
    onClick: () => scrollToRef(props.webRef)
  }, React.createElement("span", null, "H"))), React.createElement("li", null, React.createElement("div", {
    className: "nav-container",
    onClick: () => scrollToRef(props.mobileRef)
  }, React.createElement("span", null, "H"))), React.createElement("li", null, React.createElement("div", {
    className: "nav-container"
  }, React.createElement("span", null, "H"))), React.createElement("li", null, React.createElement("div", {
    className: "nav-container"
  }, React.createElement("span", null, "H"))), React.createElement("li", null, React.createElement("div", {
    className: "nav-container"
  }, React.createElement("span", null, "H")))));
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"Home":{"Home.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// imports/ui/Home/Home.jsx                                                                                 //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let Typed;
module.link("typed.js", {
  default(v) {
    Typed = v;
  }

}, 1);

const Home = props => {
  let typed;
  useEffect(() => {
    const options = {
      strings: ['<h1>Hello, my name is <span id="name">Roger</span></h1>', '<h1>I like to build cool stuff on the Internet.</h1>'],
      smartBackspace: false,
      typeSpeed: 60
    };
    typed = new Typed('.typed', options);
  }, []);
  return React.createElement("div", {
    className: "Home",
    ref: props.homeRef
  }, React.createElement("img", {
    src: "https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg",
    alt: "code background"
  }), React.createElement("div", {
    className: "content-container"
  }, React.createElement("span", {
    className: "typed"
  })));
};

module.exportDefault(Home);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Mobile":{"Mobile.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// imports/ui/Mobile/Mobile.jsx                                                                             //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const Mobile = props => {
  return React.createElement("div", {
    className: "Mobile",
    ref: props.mobileRef
  }, React.createElement("img", {
    src: "https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg",
    alt: "code background"
  }), React.createElement("div", {
    className: "content-container"
  }, React.createElement("h1", null, "Mobile Component")));
};

module.exportDefault(Mobile);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Web":{"Web.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// imports/ui/Web/Web.jsx                                                                                   //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const Web = props => {
  return React.createElement("div", {
    className: "Web",
    ref: props.webRef
  }, React.createElement("img", {
    src: "https://rw-portfolio.s3.us-east-2.amazonaws.com/code.jpg",
    alt: "code background"
  }), React.createElement("div", {
    className: "content-container"
  }, React.createElement("h1", null, "Web Component"), React.createElement("div", {
    className: "gallery"
  }), React.createElement("div", {
    className: "gallery-controls"
  })));
};

module.exportDefault(Web);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"App.jsx":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// imports/ui/App.jsx                                                                                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
module.export({
  default: () => App
});
let React, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 0);
let Nav;
module.link("./Components/Nav/Nav.jsx", {
  default(v) {
    Nav = v;
  }

}, 1);
let Home;
module.link("./Home/Home.jsx", {
  default(v) {
    Home = v;
  }

}, 2);
let Web;
module.link("./Web/Web.jsx", {
  default(v) {
    Web = v;
  }

}, 3);
let Mobile;
module.link("./Mobile/Mobile.jsx", {
  default(v) {
    Mobile = v;
  }

}, 4);

function App() {
  const homeRef = useRef(document.getElementsByClassName("Home"));
  const webRef = useRef(document.getElementsByClassName("Web"));
  const mobileRef = useRef(document.getElementsByClassName("Mobile"));
  return React.createElement(React.Fragment, null, React.createElement(Nav, {
    homeRef: homeRef,
    webRef: webRef,
    mobileRef: mobileRef
  }), React.createElement(Home, {
    homeRef: homeRef
  }), React.createElement(Web, {
    webRef: webRef
  }), React.createElement(Mobile, {
    mobileRef: mobileRef
  }));
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/main.js                                                                                           //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let App;
module.link("/imports/ui/App", {
  default(v) {
    App = v;
  }

}, 3);
module.link("./main.scss");
Meteor.startup(() => {
  render(React.createElement(App, null), document.getElementById('react-target'));
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.scss":function(){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// client/main.scss                                                                                         //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
// These styles have already been applied to the document.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".scss",
    ".css",
    ".sass",
    ".jsx"
  ]
});

var exports = require("/client/main.js");