import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        connect: false
        }
    }


    render() {
        return <div className="Contact">
            <img onClick={
                event => {
                    const isConnect = !this.state.connect
                    this.setState({connect: isConnect})
                }
            } className=" avatar" src={this.props.avatar} alt={this.props.name}/>
            <div>
                <h4 className="name">{this.props.name}</h4>
                <div className="status">
                    <span className={this.state.connect === true ? "status-online" : "status-offline"}/>
                    <p className="status-text">{this.state.connect === true ? "online" : "offline"} </p>
                </div>
            </div>
        </div>
    }
}
export default Contact