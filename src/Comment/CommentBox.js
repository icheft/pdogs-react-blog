import { useEffect, useState } from 'react';
// import { firestore } from './base';

const CommentBox = ({ blog }) => {
    return (
        <div className="comments-section">
            <h4 className="comments">COMMENTS</h4>
            <div id="comments-container">
                <div className="comment">
                    <div className="comment-user">
                        <span className="user-details">
                            <span className="username">Riccardo </span>
                            <span>on </span>
                            <span>MARCH 7, 2016</span>
                        </span>
                    </div>
                    <div className="comment-text">
                        "Draft.js is a framework for building rich text editors
                        in React, powered by an immutable model and abstracting
                        over cross-browser differences."
                        <br />
                        <br></br>
                        <a href="https://facebook.github.io/draft-js/">
                            Draft.js
                        </a>{' '}
                        home page.
                    </div>
                </div>
                <div className="comment">
                    <div className="comment-user">
                        <span className="user-details">
                            <span className="username">Riccardo </span>
                            <span>on </span>
                            <span>MARCH 7, 2016</span>
                        </span>
                    </div>
                    <div className="comment-text">
                        "Draft.js is a framework for building rich text editors
                        in React, powered by an immutable model and abstracting
                        over cross-browser differences."
                        <br />
                        <br></br>
                        <a href="https://facebook.github.io/draft-js/">
                            Draft.js
                        </a>{' '}
                        home page.
                    </div>
                </div>
                <div className="comment">
                    <div className="comment-user">
                        <span className="user-details">
                            <span className="username">Riccardo </span>
                            <span>on </span>
                            <span>MARCH 7, 2016</span>
                        </span>
                    </div>
                    <div className="comment-text">
                        "Draft.js is a framework for building rich text editors
                        in React, powered by an immutable model and abstracting
                        over cross-browser differences."
                        <br />
                        <br></br>
                        <a href="https://facebook.github.io/draft-js/">
                            Draft.js
                        </a>{' '}
                        home page.
                    </div>
                </div>
            </div>
            <div class="comment-editor">
                <h4>LEAVE A COMMENT</h4>
                <form id="comment-form">
                    <label>Name:</label>
                    <input></input>
                    <label>Message:</label>
                    <textarea rows="5"></textarea>

                    <button className="info">Leave Comment</button>
                </form>
            </div>
        </div>
    );
};

export default CommentBox;
