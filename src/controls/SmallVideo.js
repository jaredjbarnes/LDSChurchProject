import React, { Component } from "react";
import "./SmallVideo.css";

export default class SmallVideo extends Component {
    constructor(props) {
        super(props);
    }

    _getClassName() {
        let classNames = ["small-video"];
        let className = this.props.className;

        if (typeof className === "string") {
            classNames.push(className);
        }

        return classNames.join(" ");
    }

    render() {


        return (
            <figure className={this._getClassName()}>
                <video className={"small-video-player"}></video>
                <div className={"small-video-info"}>
                    <div className={"small-video-title"}>
                        {this.props.title || "Video Title"}
                    </div>
                    <figcaption className={"small-video-caption"}>
                        {this.props.caption || "video caption for some stuff"}
                    </figcaption>
                </div>
            </figure>
        );
    }
}
