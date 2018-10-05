import React from "react";
import ReactDOM from "react-dom";

// Note: I moved the React Components that represents content to its own js file
// pages.js
import {HomePage, AboutUsPage, ContactUsPage, BlogPost1Page} from "./pages.js"

class Header extends React.Component {
  render() {
    return (
      <header>This is a header</header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>This is a footer</footer>
    );
  }
}

class PageContainer extends React.Component {
// For now, render the home page. However this container would need to switch
// between content pages in the pages.js file
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

class App extends React.Component {
  // This component contains the entirety of your application
  render() {
   return (
     <div>
      <Header />
      <PageContainer />
      <Footer />
    </div>
   );
 }
}

// Render the App component, which contains instances of your Add and Subtract Components
ReactDOM.render(
  <App />,
  document.getElementById('root'));
