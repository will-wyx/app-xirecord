/**
 * Created by will on 2017/1/30.
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Login extends React.Component {
    render() {
        return (
            <div className="container">
                <form action="#" className="form-signin">
                    <h2 className="form-signin-heading">
                        系统管理员登录
                    </h2>
                    <input type="text" className="form-control" placeholder="登录名"/>
                    <input type="password" className="form-control" placeholder="密码"/>
                    <button className="btn btn-lg btn-primary btn-block">登录</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<Login/>, document.getElementById('app'));
