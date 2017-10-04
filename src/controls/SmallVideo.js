import React, { Component } from "react";
import "./SmallVideo.css";

export default class SmallVideo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <figure className={"small-video"}>
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
