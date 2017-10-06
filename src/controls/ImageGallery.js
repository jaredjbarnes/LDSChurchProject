import React, { Component } from "react";
import "./ImageGallery.css";

export default class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedIndex: 0, ...props };
    }

    _getChildren() {
        let children = this.props.children;

        if (children == null) {
            children = [];
        }

        if (!Array.isArray(children)) {
            children = [children];
        }

        return children;
    }

    _getSelectedImage() {
        let children = this._getChildren();
        let selectedImage = children[this.state.selectedIndex];
        if (selectedImage != null) {
            return React.cloneElement(selectedImage, {
                style: {
                    width: "100%"
                }
            });
        }
        return null;
    }

    _createThumbnails() {
        return this._getChildren().map((child, index) => {
            let onClick = () => {
                this.setState({
                    selectedIndex: index
                });
            }

            let style = {
                backgroundImage: `url(${child.props.src})`
            };

            return (
                <div key={index} className={"image-gallery-thumbnail"}
                    onClick={onClick}
                    style={style}
                ></div>
            );
        });
    }

    render() {
        let selectedImage = this._getSelectedImage();

        return (
            <figure className={"image-gallery"}>
                <div className={"image-gallery-screen"} >
                    {this._getSelectedImage()}
                </div>
                <div className={"image-gallery-menu"}>
                    <div className={"image-gallery-info"}>
                        <div className={"image-gallery-title"}>
                            {selectedImage.props.title || "Unknown"}
                        </div>
                        <figcaption className={"image-gallery-caption"}>
                            {selectedImage.props.caption || "Unknown"}
                        </figcaption>
                    </div>
                    <div className={"image-gallery-thumbnails"}>
                        {
                            this._createThumbnails()
                        }
                    </div>
                </div>
            </figure>
        );
    }
}