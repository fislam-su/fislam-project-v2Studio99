import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Burgermenu from './Burgermenu'
import { Button, Image, Nav, Navbar, Row, Col } from 'react-bootstrap'
import {Icon} from 'semantic-ui-react'
import styles from './styles/Header.module.css'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Header = () => (
  <React.Fragment>
    <Head>
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
    </Head>
    <header>
    <Navbar fluid="true" expand="lg">
    <Row id="wrapper-navbar" className={styles.header}>
      <Col className={styles.col} md={'1'}>
        <Burgermenu className={styles.burger}/>
      </Col>

        <Nav className="mr-auto">
        <Col className={styles.col} md={'6'}>
          <Link href="/home" passHref>
            <Nav.Link className={styles.logo}>
              <Image src="/logo.png" className={styles.media_logo} fluid="true"/>
            </Nav.Link>
          </Link>
        </Col> 

        <Col className={styles.col} md={'3'}>
         
            <Link href="/login" passHref key="login">
              <Nav.Link>
              <Icon name="user" size="huge" className={styles.user} color="black"/>
              </Nav.Link>
            </Link>

            <Link href="/register" passHref key="register">
                <Nav.Link>
                <Icon name="add user" className={styles.newuser} size='huge' color="black"/>
                </Nav.Link>
            </Link>

        </Col>

        <Col className={styles.col} md={'2'}>
          <Link href="/cart" passHref>
            <Nav.Link>
              <Image src="/shopping.svg" className={styles.shopping_cart}/>
            </Nav.Link>
          </Link>
        </Col>

        </Nav>
        </Row>
    </Navbar>
  </header>
  </React.Fragment>
)

export default Header;
