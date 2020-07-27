import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import "./style.scss";
import WEbpackJpg from "../src/images/file.jpg";

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Hello World</h1>
                <div id="imag">HI hi hi</div>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
