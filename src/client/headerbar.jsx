import React from "react";
import { Link, withRouter } from "react-router-dom";

//Class is very very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les08/authentication/src/client/headerbar.jsx
class HeaderBar extends React.Component {
  constructor(props) {
    super(props);
  }

  doLogout = async () => {
    const url = "/api/logout";

    let response;

    try {
      response = await fetch(url, { method: "post" });
    } catch (err) {
      alert("Failed to connect to server: " + err);
      return;
    }

    if (response.status !== 204) {
      alert("Error when connecting to server: status code " + response.status);
      return;
    }

    this.props.updateLoggedInUserId(null);
    this.props.history.push("/");
  };

  renderLoggedIn(userId) {
    return (
      <div className="header">
        <h3 className="notLoggedInMsg">
          Welcome back {userId}
          !!!
        </h3>

        <div className="logOutBtn" onClick={this.doLogout}>
          Logout
        </div>
      </div>
    );
  }

  renderNotLoggedIn() {
    return (
      <div className="header">
        <div className="notLoggedInMsg">You are not logged in</div>
        <div className="btnPart">
          <Link className="btn" to="/login">
            LogIn
          </Link>
          <Link className="btn" to="/signup">
            SignUp
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const userId = this.props.userId;

    let content;
    if (userId === null || userId === undefined) {
      content = this.renderNotLoggedIn();
    } else {
      content = this.renderLoggedIn(userId);
    }

    return (
      <div className={"headerBar"}>
        <Link className="home btn" to={"/"}>
        Home
      </Link>
        {content}
      </div>
    );
  }
}

export default withRouter(HeaderBar);
