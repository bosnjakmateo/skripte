import React, { Component } from 'react';
import '../App.css';
import classnames from 'classnames';
import close from "../Images/close.svg";

class SkriptaComments extends Component {
    constructor(props){
        super(props);
        this.state = { commentsToggled: false };
        this.state = { commentsToggledMobile: false};

        this.toggleComments = this.toggleComments.bind(this);
        this.toggleCommentsMobile = this.toggleCommentsMobile.bind(this);
    }

    toggleComments () {
        this.setState({ commentsToggled: !this.state.commentsToggled });
    }

    toggleCommentsMobile () {
        this.setState({ commentsToggledMobile: !this.state.commentsToggledMobile });
    }


    render() {
        return (
            <div className={classnames('skripta-comments ',{
                'toggled-comments' : this.state.commentsToggled,
                'skripta-comments-mobile-toggled' : this.state.commentsToggledMobile,
            })}>
                <div onClick={this.toggleCommentsMobile}  className={classnames('comments-mobile ',{
                    'make-invisible' : this.state.commentsToggledMobile,
                })}>
                    <p className="comments-toggle-button">KOMENTARI</p>
                </div>
                <div className={classnames('skripta-comments-content ',{
                    'make-visible' : this.state.commentsToggledMobile,
                })}>
                    <div>
                    <h1 className="skripta-comments-content-title">Komentari<span>(6)</span></h1>
                        <button className="toggle-comments-button" onClick={this.toggleComments}>Komentiraj</button>
                        <img src={close} className="mobile-close-comments-button" onClick={this.toggleCommentsMobile} />
                    </div>
                    <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper
                    </p>
                    <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consectetur
                    </p>
                    <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                    </p>
                    <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consectetur
                    </p>
                    <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                    </p>
                    <p><span className="bolded">ivanbalen666:</span> ivanbalen666: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consectetur,Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        vitae orci semper, tincidunt est quis,
                        semper est.Mauris consectetur
                    </p>
                    <form>
                        <label>
                            <textarea placeholder="Komentiraj..." className="comment-form" />
                        </label>
                        < br/>
                        <input className="post-comment" type="submit" value="Komentiraj" />
                    </form>
                </div>
            </div>
        );
    }
}

export default SkriptaComments;
