import React, { Component } from 'react';
import '../App.css';
import Navbar from "./Navbar";
import KolegijCard from "./KolegijCard";
import FavoriteKolegiji from "./FavoriteKolegiji";
import Headroom from 'react-headroom';
import classnames from 'classnames';


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            mounted: false
        };
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }


    render() {
        return (
            <div className="home-page">
                <Headroom disableInlineStyles={true}>
                    <Navbar/>
                <div className="second-navbar">
                    <h1 className="second-navbar-title">Moji Kolegiji</h1>
                    <div className="second-navbar-search">
                        <input className="second-navbar-search-input" type="text" placeholder="Pretraži kolegij..." />
                    </div>
                </div>
                </Headroom>
                <div className={classnames('main-container',{
                    'fade-in-keyframes' : this.state.mounted
                })}>
                    <div className="kolegij-card-container">
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                        <KolegijCard/>
                    </div>
                    <div className="favorite-kolegiji-container">
                        <FavoriteKolegiji/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
