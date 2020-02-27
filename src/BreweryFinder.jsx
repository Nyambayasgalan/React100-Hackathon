import React from "react";

class BreweryFinder extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <button type="button" className="btn btn-primary btn-md" onClick={this.props.handleBrewery}>Find Brewery</button>
                    </div>
                </div>
            </div>
        );
     }
}

export default BreweryFinder;