import React, { Component } from "react";
import axios from "axios";
import { AccountCircle, LockRounded } from "@material-ui/icons";
import {
  Typography,
  Container,
  Box,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";

class SavedTweets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount = () => {
    this.getTweets();
  };

  getTweets = () => {
    axios
      .get("/api/tweets")
      .then((response) => {
        const data = response.data;
        console.log("Data Received!");
        this.setState({ posts: data });
        console.log(this.state.posts);
      })
      .catch(() => {
        console.log("Error with Database!");
      });
  };

  render() {
    return (
      <div className="savedList">
        {this.state.posts.map((post) => (
          <p className="name">{post.name}</p>
        ))}
      </div>
    );
  }
}

export default SavedTweets;
