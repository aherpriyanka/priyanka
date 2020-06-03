import React, { Component } from "react";
import Header from "./Header";
import PostContent from "./PostContent";
import Footer from "./Footer";

class Fragment extends Component {
    constructor(props) {
        super(props);
        this.state = {}
  }
      
  render() {
    return (
       <div className="post">
           <Header/>
           <PostContent/>
           <Footer/>
      </div>
    );
  }  
}

export default Fragment;
