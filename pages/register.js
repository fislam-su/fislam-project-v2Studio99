import Router from 'next/router'
import { Header, Form, Input, Button, Segment } from 'semantic-ui-react'
import styles from '../components/styles/loginin.module.css'
import Layout from '../components/Layout'
import { register } from '../lib/moltin'

export default class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    loading: false
  }

  _handleSubmit = async e => {
    e.preventDefault()
    const { name, email, password } = this.state

    this.setState({
      loading: true
    })

    try {
      const { token } = await register({ name, email, password })
      localStorage.setItem('customerToken', token)
      Router.push('/myaccount')
      
    } catch (e) {
      this.setState({
        loading: false
      })
    }
  }

  _handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  render() {
    const { loading } = this.state

    return (
      <div className={styles.container}>
      <Layout title="Register">
      <h1 className={styles.logtitle} as="h1">Welcome to Studio99</h1>

        <Form onSubmit={this._handleSubmit} loading={loading}>
        <div className={styles.form}>
            <Form.Field>
              <Input 
              fluid 
              icon="add user"
              name="name" 
              placeholder="Name"
              iconPosition='left'
              size="big"
              autoFocus 
              onChange={e => this._handleChange(e)}/>
            </Form.Field>

            <Form.Field>
              <Input 
                fluid
                autoFocus
                placeholder="Email"
                icon="mail"
                iconPosition='left'
                size="big" name="email" 
                type="email" 
                onChange={e => this._handleChange(e)} />
            </Form.Field>

            <Form.Field>
              <Input 
                fluid
                placeholder="Password"
                icon="key"
                iconPosition='left'
                size="big"name="password" 
                type="password"
                 onChange={e => this._handleChange(e)}/>
            </Form.Field>

            <Button type="submit" color="orange"> Register </Button>
          </div>
        </Form>
      </Layout>
      </div>
    )
  }
}
