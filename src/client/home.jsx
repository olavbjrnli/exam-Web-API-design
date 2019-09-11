import React from "react";
import HeaderBar from "./headerbar";
import PokemonList from "./PokemonList"

//Class is very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les08/authentication/src/client/home.jsx
export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMsg: null
    };
  }

  renderLoggedIn() {
    return (
        <div>
            <PokemonList/>
      </div>
    );
  }

  renderNotLoggedIn() {
    return (
      <div>



          <div>
              <p className="speech-bubble">
                  You need to log in to access the database and do something!
              </p>
              <img src="/imgs/ash.png" alt="Smiley face" height="500" width="250"></img>

          </div>
      </div>
    );
  }

  render() {
    const userId = this.props.userId;
    let pageContent;

    if (userId === null || userId === undefined) {
      pageContent = this.renderNotLoggedIn();
    } else {
      pageContent = this.renderLoggedIn();
    }

    let error = <div />;
    if (this.state.errorMsg !== null) {
      error = (
        <div className="errorMsg">
          <p>{this.state.errorMsg}</p>
        </div>
      );
    }

    return (
      <div>
        <HeaderBar
          userId={this.props.userId}
          updateLoggedInUserId={this.props.updateLoggedInUserId}
        />

        <div>
          <p className="logo">Pokemon rater</p>
        </div>
        <div>
        </div>
          <div className="ash">
          </div>
        <div className="mainContent">

          {pageContent}
          {error}

        </div>

      </div>
    );
  }
}