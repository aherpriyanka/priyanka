import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          isError: false
         };
    }
  
    static getDerivedStateFromError(error) {
      return { 
          isError: true 
        };
    }
  
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  
    render() {
      const { isError } = this.state;
      if (isError) {
        return <h5>Something went wrong here.</h5>;
      }
      return this.props.children; 
    }
  }
  export default ErrorBoundary;