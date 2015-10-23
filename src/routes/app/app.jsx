import React from "react";
import Navigation from '../../components/navigation/navigation';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <Navigation></Navigation>
                </header>
                {this.props.children}
            </div>
        );
    }
}