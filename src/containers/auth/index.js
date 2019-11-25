import React, { Component, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Button, Icon } from 'antd'
import Sider from './sider/sider'
import './index.css'
// import { getRedictRoute } from './utils'
// import { userPermission } from 'design/permission'


class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }
  componentDidMount() {}

  // 检查token
  checkToken = (token) => {
    // if (!token) this.props.history.replace('/login')
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const { match } = this.props
    // const { finnalPermission } = userPermission
    return (
      <div className="l-body">
        <Sider {...this.props} collapsed={this.state.collapsed}/>
        <div className="right">
          <div className="header">
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggleCollapsed} className="foldicon" />
            <div className="header-user-right">
              <Icon type="user" />
              <span>用户名</span>
            </div>
          </div>
          <div className="body">
            <Switch>
              {/* <Redirect exact={true} from={match.url} to={`${match.url}${getRedictRoute(finnalPermission) || '/no'}`} /> */}
              {/* <Route path={`${match.url}/order_details`} component={OrderDetails} /> */}
            </Switch>
          </div>
        </div>

      </div>
    )
  }
}
// todo: 组件的路由校验是否需要添加 ,防止手动输入路由（也会被踢）
export default Auth
