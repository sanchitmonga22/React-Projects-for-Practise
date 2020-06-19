import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./approvalCard";
import faker from "faker";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sanchit"
                    time="5:00pm"
                    comment="I like the subject"
                    image={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector("#root"));
