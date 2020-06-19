import React from "react";
import SearchBar from "./searchBar";
import youtube from "../APIs/youtube";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

//TODO: Add API_KEY
const API_KEY = "";

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
    onTermSubmit = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                type: "video",
                maxResults: 5,
                key: API_KEY,
            },
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    componentDidMount() {
        this.onTermSubmit("random");
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
