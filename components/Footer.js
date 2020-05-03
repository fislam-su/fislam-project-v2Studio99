import React, {Fragment} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { Image, Row, Col, Form, Container } from 'react-bootstrap'
import { Icon, Divider } from 'semantic-ui-react'
import styles from './styles/footer.module.css'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const Footer = () => (
  <Fragment>
    <Head>
      <link rel="stylesheet" type="text/css" href='./styles/layout.css'/>
    </Head>
    <Divider/>
    <Container className={styles.footerwrapper}>
    <Row>
    <Col>
       <Row className="footer_suscribe">
           <Image src="/logo.png" style={{width:'70%', marginBottom: '2rem'}}/>
       </Row>

       <Row className="footer_form">
           <Form>
               <Form.Label htmlFor="keepINtouch" style={{fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 500}}>Keep in Touch!</Form.Label><br/>
               <Form.Control type="email" id="keepINtouch" name="footer_subscribe" className="form-control validate[required]" placeholder="Enter your email address"/>
               <br />
               <Form.Control type="submit" defaultValue="Submit" />
           </Form> 
       </Row>
    </Col>
    <div className={styles.divider}/>

       <Col className={styles.supportmedia}>
        <Row className={styles.social}>
        <h3>SOCIAL MEDIA</h3>
            <div className={styles.footersocial}>
                <Link href="https://twitter.com/">
                    <Icon size='large' link name="twitter" className={styles.social}/>
                </Link>
                <Link href="https://www.instgram.com/">
                    <Icon size='large' link name="instagram" className={styles.social}/>
                </Link>
                <Link href="https://pinterest.com/">
                    <Icon  size='large' link name="pinterest" className={styles.social}/>
                </Link>
                <Link href="https://www.linkedin.com/in/farhanislam2018/">
                    <Icon  size='large' link name="linkedin" className={styles.social}/>
                </Link>
            </div>
        </Row>

        <Row className={styles.shopwrap}>
        <h3>SHOP</h3> 
          <div className={styles.footer_buttons}>
            <Link href="./colorblock.html"><a>Color Block</a></Link> 
            <Link href="./traditional.html"><a>Traditional</a></Link> 
            <Link href="./colorblock.html"><a>Text Art</a></Link> 
          </div>
        </Row>

        <Row className={styles.contact}>
        <h3>CONTACT US</h3> 
            <div className={styles.footerbuttons}>
                <Link href="./contactus.html"><a>Contact Us</a></Link> 
                <Link href="./contactus.html"><a>FAQ</a></Link> 
            </div>
        </Row>
        </Col>
</Row>
   </Container>
  </Fragment>
)

export default Footer