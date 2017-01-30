/**
 * Created by will on 2017/1/29.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import $ from 'jquery';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: ["news", "label", "artist", "album", "media", "form", "layout"]
        }
    }

    componentDidMount() {
        $.getJSON('/auth', {}, res => {
            console.log(res);
        });
    }

    render() {
        return <div>
            <Header roles={this.state.roles}/>
            <div className="container">
                <h1>欢迎管理</h1>
            </div>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
