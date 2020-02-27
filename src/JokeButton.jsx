import React from "react";

class JokeButton extends React.Component {

    constructor(props) {
        super(props);
    }
     render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-md" onClick={this.props.handleNewJoke}> New Joke</button>
                    </div>
                </div>
            </div>
  );
 }
}

export default JokeButton;