import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";
import "./style.scss";

import Webpack from '../src/file.jpg';
let webp = document.createElement('img');
webp.src = Webpack;
document.body.appendChild(webp);


// import logoWebpack from "../src/images/logoWebpack.png";



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
