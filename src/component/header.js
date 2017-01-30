/**
 * Created by will on 2017/1/29.
 */
import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
const Header = (props) => {
    const navItems = props.roles.map((e, i) => {
        switch (e) {
            case 'news':
                return <NavItem key={i}>新闻</NavItem>;
            case 'label':
                return <NavItem key={i}>厂牌</NavItem>;
            case 'artist':
                return <NavItem key={i}>艺人</NavItem>;
            case 'album':
                return <NavItem key={i}>专辑</NavItem>;
            case 'media':
                return <NavItem key={i}>音乐</NavItem>;
            case 'form':
                return (
                    <NavDropdown key={i} title="用户表单" id="nav-dropdown-form">
                        <NavItem>专业服务</NavItem>
                        <NavItem>音乐发行</NavItem>
                        <NavItem>联系我们</NavItem>
                    </NavDropdown>
                );
            case 'layout':
                return (
                    <NavDropdown key={i} title="版面管理" id="nav-dropdown-layout">
                        <NavItem>首页</NavItem>
                        <NavItem>专业服务</NavItem>
                        <NavItem>推广/合作</NavItem>
                        <NavItem>联系我们</NavItem>
                    </NavDropdown>
                )
        }
    });
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">XIRECORD</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav> {navItems} </Nav>
                <Nav pullRight>
                    <NavItem>注销</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};
export default Header;

