import React from "react";

//Class is very inspired by https://github.com/arcuri82/web_development_and_api_design/blob/master/les07/server_client_together/src/client/book.jsx
class Pokemon extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name ? this.props.name : "",
            type: this.props.type ? this.props.type : "",
            number: this.props.number ? this.props.number : "",
            details: this.props.details ? this.props.details: "",
            rating: this.props.rating ? this.props.rating: ""
        };

    }

    onRatingChanged = (event) => {
        this.setState({rating: event.target.value});
    };

    render() {

        return (
            <div>
                <div>
                    <p className="logo">Pokemon rater</p>
                </div>

            <ul className="listDetails">
                <li>{this.state.name}</li>
                <li>{this.state.type}</li>
                <li>{this.state.number}</li>
                <li>{this.state.details}</li>
                <li>{this.state.rating}</li>
            </ul>
                <form>
                    rate the pokemon
                    <input
                        placeholder={"the rating on the pokemon"}
                        onChange={this.onRatingChanged}
                        className="bookInput"
                    />
                </form>
            </div>
        );
    }
}
export default Pokemon;