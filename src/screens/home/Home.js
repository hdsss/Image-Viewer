import React, { Component } from 'react';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { GridList } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';

const instaApiUrl = "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token="
const accessToken = sessionStorage.getItem("access-token");
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        minWidth: 240,
        maxWidth: 240
    },
    title: {
        color: theme.palette.primary.light,
    }
});
class Home extends Component {
    constructor() {
        super();
        this.state = {
            media: [],
        }
    }

    componentWillMount() {
        // if access-token not founf, redirect to login page
        console.log("accessToken: " + accessToken)
        if(accessToken == undefined){
            this.props.history.push('/');
        }

        // get images and media from API
        let mediaData = null;
        let xhr = new XMLHttpRequest();
        let that = this;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                that.setState({
                    media: JSON.parse(this.responseText).data
                });
            }
        });
        xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + instaApiUrl + sessionStorage.getItem("access-token"));
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.send(mediaData);
    }

    render() {
        return (<div>
            <Header showSearch="true" />
            <GridList cols={2}>
                {this.state.media.map(obj => (
                    <GridListTile key={"img" + obj.id}>
                        <img src={obj.media_url} className="image" alt={obj.caption} />
                    </GridListTile>
                )
                )}
            </GridList>
        </div>)
    }
}

export default withStyles(styles)(Home);