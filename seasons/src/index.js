import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./spinner";
import useLocation from "./useLocation";

const App = () => {
    const [lat, errorMessage] = useLocation();
    let content;
    if (errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />;
    } else {
        content = <Spinner message="Please accept the location request" />;
    }

    return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
