import "./seasonDisplay.css";
import React from "react";

const SeasonDisplay = (props) => {
    //return <div> Season Display</div>;
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`iconLeft massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`iconRight massive ${iconName} icon`} />
        </div>
    );
};

const seasonConfig = {
    summer: { text: "Lets hit the beach", iconName: "sun" },
    winter: { text: "Burr.. its cold", iconName: "snowflake" },
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

export default SeasonDisplay;
