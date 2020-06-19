import React from "react";

const ApprovalCard = (props) => {
    return (
        <div className="ui Card">
            <div className="content"> {props.children}</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div
                        className="ui basic red butt
                    on"
                    >
                        Reject
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;
