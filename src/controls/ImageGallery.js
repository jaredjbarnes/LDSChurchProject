import React, { Component } from "react";
import "./ImageGallery.css";

export default class ImageGallery extends Component {
    render() {
        return (
            <div className={"image-gallery"}>
                <div className={"image-gallery-screen"} >
                    {this.props.children}
                </div>
                <div className={"image-gallery-thumbnails"}>
                    {this._createThumbnails}
                </div>
            </div>
        );
    }
}