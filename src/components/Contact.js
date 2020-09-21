import React from "react";

const Contact = () => {
    let online = 1

    return <div className="Contact">
        <img className=" avatar" src="https://randomuser.me/api/portraits/men/24.jpg"  alt="image"/>
        <div>
            <h4 className="name" >Derrick Simpson</h4>
            <div className="status">
                <span className={online === 1 ? "status-online" : "status-offline"} />
                <p className="status-text">{online === 1 ? "online" : "offline"} </p>
            </div>
        </div>
    </div>
}

export default Contact