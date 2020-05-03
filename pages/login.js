import Router from 'next/router'
import {Form, Input, Button, Segment, Message, Icon} from 'semantic-ui-react'
import Layout from '../components/Layout'
import { login } from '../lib/moltin'
import styles from '../components/styles/loginin.module.css'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    errors: null
  }

  _handleSubmit = async e => {
    e.preventDefault()

    const { email, password } = this.state

    this.setState({
      loading: true,
      errors: null
    })

    try {
      const { id, token } = await login({ email, password })
      localStorage.setItem('customerToken', token)
      localStorage.setItem('mcustomer', id)
      Router.push('/myaccount')
    } catch (e) {
      console.log(e.message)
      this.setState({
        loading: false,
        errors: e
      })
    }
  }

  _handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  render() {
    const { loading, errors } = this.state

    return (
      <div className={styles.container}>
      <Layout title="Login">
        <h1 className={styles.logtitle} as="h1">Welcome back!</h1>
        <div className={styles.loginwrapper}>
        <Form onSubmit={this._handleSubmit} loading={loading} error={!!errors}>
          <Message
            error
            header="Sorry"
            content="Please check your login details and try again."
          />

          <div className={styles.form}>
            <Form.Field >
              <Input
                fluid
                autoFocus
                placeholder="Email"
                icon="mail"
                iconPosition='left'
                size="big"
                name="email"
                type="email"
                onChange={e => this._handleChange(e)}
              />
            </Form.Field>

            <Form.Field>
              <Input
                fluid
                autoFocus
                placeholder="Password"
                icon="key"
                iconPosition='left'
                size="big"
                name="password"
                type="password"
                onChange={e => this._handleChange(e)}
              />
            </Form.Field>

            <Button type="submit" color="orange">
              Login
            </Button>
          </div>
        </Form>
        </div>
      </Layout>
      </div>
    )
  }
}
