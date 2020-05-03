import React from 'react'; 
import Link from 'next/link'
import {slide as Menu} from 'react-burger-menu';
import { Navbar, Nav, Row, Col} from 'react-bootstrap';
import styles from './styles/Header.module.css'
import { Icon } from 'semantic-ui-react'


var burgerstyles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '35px',
      height: '23px',
      margin: '1rem',
      left: '46px',
      top: '75px'
    },
    bmBurgerBars: {
      background: '#111420'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
    marginTop: '2.3rem',
    marginLeft: '-1.2rem',
    height: '24px',
    width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      height: '100vh',
      marginTop: '-1.5rem',
     
    },
    bmMenu: {
      background: 'linear-gradient(-180deg, rgb(255, 255, 255),rgb(255, 255, 255), rgb(184, 223, 255))',
      padding: '2em 0 1em 2rem',
      fontSize: '1em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8bad',
      padding: '0.5em'
    },
    bmItem: {
      display: 'inline-block',
      color: 'rgb(0, 0, 0)',
      fontFamily: "Montserrat, sans-serif",
      fontSize: "1.2rem"
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.4)',
      marginTop: '-1.7rem',
      height: '100vh'
    },
    bmMenuWrap: {
      bottom: '0',
      left: '0'
    }
  }

class Burgermenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }

    closeMenu() {
        this.setState({ menuOpen: false })
    }
    render () {
        return (
          <div>
              <Navbar>
                <Nav>
                <Menu 
                styles={burgerstyles}
                width={'20%'}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                >
                 <Nav.Link href="/home">
                    <div className={styles.burger} onClick={() => this.closeMenu()}>Home</div>
                </Nav.Link>

                <Nav.Link href="/index">
                    <div className={styles.burger} onClick={() => this.closeMenu()}>All Products</div>
                </Nav.Link>

                <Nav.Link href="../pages/colorblock">
                    <div className={styles.burger} onClick={() => this.closeMenu()}>Color Block</div>
                </Nav.Link>

                <Nav.Link href="../pages/traditional">
                    <div className={styles.burger} onClick={() => this.closeMenu()}>Traditional</div>
                </Nav.Link>

                <Nav.Link href="../pages/textart">
                    <div className={styles.burger} onClick={() => this.closeMenu()}>Text Art</div>
                </Nav.Link>

                <div className={styles.support_nav}>
                        <h4>Support</h4>

                        <Nav.Link href="">
                            <div onClick={() => this.closeMenu()}>Contact Us</div>
                        </Nav.Link>

                        <Nav.Link href="">
                            <div onClick={() => this.closeMenu()}>FAQ</div>
                        </Nav.Link>
                      <Row className="mt-4">
                        <Col>
                          <Link href="https://www.instagram.com/">
                            <Icon name="instagram" className={styles.social}/>
                          </Link>
                        </Col>
                        <Col>
                          <Link href="https://www.linkedin.com/farhan2018/">
                          <Icon name="linkedin" className={styles.social}/>
                          </Link>
                        </Col>
                        <Col>
                          <Link href="https://twitter.com/">
                           <Icon name="twitter" className={styles.social}/>
                          </Link>
                        </Col>
                        <Col>
                          <Link href="https://www.pinterst.com/">
                            <Icon name="pinterest"/>
                          </Link>
                        </Col>
                      </Row>

                    </div>
                </Menu>
                </Nav>
              </Navbar>

          </div>
        )
      }
}

export default Burgermenu;