import React, { Component } from "react";
import "./ImageGallery.css";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
    }

    _createThumbnails() {

    }

    render() {
        return (
            <figure className={"image-gallery"}>
                <div className={"image-gallery-screen"} >
                    {this.selectedImage}
                </div>
                <div className={"image-gallery-menu"}>
                    <div className={"image-gallery-info"}>
                        <div className={"image-gallery-title"}>
                            {this.props.title || "Image Title"}
                        </div>
                        <figcaption className={"image-gallery-caption"}>
                            {this.props.caption || "image caption"}
                        </figcaption>
                    </div>
                    <div className={"image-gallery-thumbnails"}>
                        <div className={"image-gallery-thumbnail"}></div>
                        <div className={"image-gallery-thumbnail"}></div>
                        <div className={"image-gallery-thumbnail"}></div>
                    </div>
                </div>
            </figure>
        );
    }
}