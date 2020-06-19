import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";

class App extends React.Component {
    // this is the only time we do a direct assingment to the state
    // NO DIRECT ASSIGNMENT AFTET THIS POINT
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.state({ errorMessage: error.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error:{this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please accept the location request" />;
    }
    render() {
        return <div className="borderRed">{this.renderContent()}</div>;
    }
}
ReactDOM.render(<App />, document.querySelector("#root"));
