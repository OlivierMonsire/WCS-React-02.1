import React from "react";

const Contact = (props) => {

    return <div className="Contact">
        <img className=" avatar" src={props.avatar}  alt={props.name}/>
        <div>
            <h4 className="name" >{props.name}</h4>
            <div className="status">
                <span className={props.isOnline === true ? "status-online" : "status-offline"} />
                <p className="status-text">{props.isOnline === true ? "online" : "offline"} </p>
            </div>
        </div>
    </div>
}

export default Contact