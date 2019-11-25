import React from 'react'
import {Form, Icon, Input, Button, Checkbox, message} from 'antd'
import md5 from 'blueimp-md5'
import logo from 'assets/logo.jpg'
import './index.css'

class LoginFrom extends React.Component{
  componentDidMount() {
    const token = sessionStorage.getItem('token')
    this.authCheck(token)
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <img src={logo} className="logo" alt=""/>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入账户名!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>记住我</Checkbox>)}
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      
        </div>
      );
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 校验通过之后
        // await api.postLogin({...req, password: md5(req.password)})
      }
      else{
        message.error(err)
      }
    });
  };
  authCheck = (token) => {
    // 路由劫持
    if (token) {
      this.props.history.replace('/auth')
      return
    }
    sessionStorage.clear()
  }
}
const Login = Form.create({ name: 'normal_login' })(LoginFrom);
export default Login

// 表单校验的三种方式: https://www.cnblogs.com/chaoxiZ/p/10136780.html
// 1.rules 2. 自定义方法  和 3. validateStatus