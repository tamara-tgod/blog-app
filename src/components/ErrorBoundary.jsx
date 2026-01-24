import { Component } from "react";
import { useNavigate } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // update state so next render shows a fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  componentDidCatch(error, errorInfo) {
    console.log("Error caught by boundary:", error, errorInfo);
  }

  resetError = () => {
    this.setState({hasError: false})
  }


  // Fallback UI
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <h2>Oops! Something went wrong</h2>
          <p>We're sorry for the inconvenience</p>

           <button onClick={() => {
            this.resetError()
            this.props.navigate("/")
           }}>Go back to Home</button>
        </div>
      );
    }

    return this.props.children;
  }
}

function ErrorBoundaryWrapper(props) {
    const navigate = useNavigate()
    return <ErrorBoundary {...props} navigate={navigate}/>
}

export default ErrorBoundaryWrapper;
