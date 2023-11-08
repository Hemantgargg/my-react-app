import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imgUrl
                ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read full
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
