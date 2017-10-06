import React, { Component } from "react";
import "./SmallVideo.css";
import Loading from "./../layouts/Loading";

export default class SmallVideo extends Component {
    constructor(props) {
        super(props);
        this.state = { isPlaying: false, ...props };
        this._onClick = this._onClick.bind(this);
    }

    _getClassName() {
        let classNames = ["small-video"];
        let className = this.props.className;

        if (typeof className === "string") {
            classNames.push(className);
        }

        return classNames.join(" ");
    }

    _getLoading() {
        if (this.state.isLoading) {
            return (
                <Loading />
            );
        }
        return null;
    }

    _onClick() {
        this.setState({
            isPlaying: true,
            isLoading: true
        });
    }

    render() {
        if (this.state.isPlaying) {
            return this.renderVideoPlaying();
        } else {
            return this.renderVideoThumbnail();
        }
    }

    renderVideoPlaying() {
        return (
            <figure className={this._getClassName()}>
                <div className={"small-video-player"}>
                    <video
                        controls
                        autoPlay="true"
                        src={this.props.src}
                        className={"small-video-player-video"}></video>
                </div>
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

    renderVideoThumbnail() {
        return (
            <figure className={this._getClassName()}>
                <div className={"small-video-player"} style={{
                    backgroundImage: `url(${this.props.thumbnail})`
                }}>
                    <div onClick={this._onClick} className={"small-video-play-circle"}>
                        <div className={"small-video-play"}>&#9658;</div>
                    </div>
                </div>
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
