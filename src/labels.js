/**
 * Created by will on 2017/2/8.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import $ from 'jquery';
import {Panel, Table, Button, Pagination} from 'react-bootstrap';
const panelHeader = (
    <div>
        厂牌
        <Button bsStyle="link" bsSize="xsmall" className="pull-right">新增</Button>
    </div>

);
const paging = (
    <Pagination bsSize="medium" items={10} />
);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roles: ['news', 'label', 'artist', 'album', 'media', 'form', 'layout']
        }
    }

    render() {
        return <div>
            <Header roles={this.state.roles}/>
            <div className="container">
                <Panel header={panelHeader} footer={paging}>
                    <Table striped condensed hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>名称</th>
                                <th>详细</th>
                                <th>发布时间</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                    </Table>
                </Panel>
            </div>
        </div>
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
