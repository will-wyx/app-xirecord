/**
 * Created by will on 2017/1/30.
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit() {
        console.log(this.refs.name.value);
        console.log(this.refs.pass.value);
        return false;
    }
    render() {
        return (
            <div className="container">
                <form action="#" className="form-signin" onSubmit={this.handleSubmit}>
                    <h2 className="form-signin-heading">
                        系统管理员登录
                    </h2>
                    <input type="text" className="form-control" ref="name" name="name" placeholder="登录名"/>
                    <input type="password" className="form-control" ref="pass" name="pass" placeholder="密码"/>
                    <button className="btn btn-lg btn-primary btn-block">登录</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<Login/>, document.getElementById('app'));
