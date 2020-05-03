import React, {Fragment} from 'react'
import Link from 'next/link'
import styles from '../components/styles/homepg.module.css'
import {Container, Image, Row, Col} from 'react-bootstrap'
import { Button, Icon } from 'semantic-ui-react'

const Homepg = () => (
    <Fragment>
    <Container fluid={true} className={styles.container}>
      <Row noGutters={true}>
        <div className={styles.bros}>
          <Image fluid src="/COLORBLOCK/twoguys.png" className={styles.art} />
        </div>
        <div className={styles.green}>
          <Image fluid src="/ACRYLIC/green.jpg" className={styles.art} />
        </div>
      </Row>
      <Row noGutters={true}>
        <Col md={5} className={styles.lime}>
          <Image fluid src="/COLORBLOCK/Lime.png" className={styles.art}/>
        </Col>
        <Col md={7} className={styles.bio}>
          <div className={styles.bio_text}>
              <h2 className={styles.bio_header}>DIGITAL ART WITH CALORIES </h2>
            <p>But what does that even mean? It is art that is digestable and puts 
                a taste in your mouth whether it is good or bad. Now how about those
                extra calories. </p>
          </div>
        </Col>
      </Row>
      <Row noGutters={true}>
      <div className={styles.tradtxt} as="h2">TRADITIONAL <br/>
          <Link href='/index.js' passHref>
              <Button style={{marginLeft: "6rem", marginTop: "1rem"}} inverted color='blue' compact fluid size='big' animated>
                <Button.Content visible>Discover More</Button.Content>
                  <Button.Content hidden>
                      <Icon name='long arrow alternate right' />
                    </Button.Content>
                  </Button>
            </Link>
      </div>
        <Image src='/MAC.png' className={styles.macmiller}/>
      </Row>
      <Row noGutters={true}>
        <Col md={6}>
          <div className={styles.blocktxt} as="h2">COLOR BLOCK <br/>
              <Link href='/index.js' passHref>
              <Button inverted color='blue' compact size='big' animated>
                <Button.Content visible>Discover More</Button.Content>
                <Button.Content hidden>
                  <Icon name='long arrow alternate right' />
                </Button.Content>
              </Button>
              </Link>
          </div>
          <div className={styles.blur}>
            <Image src='/COLORBLOCK/beach.png' className={styles.artblur}/> 
          </div>
        </Col>

        <Col md={6}>
        <div className={styles.blocktxt} style={{marginLeft: "8rem"}} as="h2">TEXT ART<br/>
              <Link href='/index.js' passHref>
                <Button inverted color='blue' compact size='big' animated>
                  <Button.Content visible>Discover More</Button.Content>
                  <Button.Content hidden>
                    <Icon name='long arrow alternate right' />
                  </Button.Content>
                </Button>
              </Link>
        </div>
        <div className={styles.blur}>
          <Image src='/TEXTART/legs.jpg' className={styles.artblur}/>
        </div>
        </Col>
      </Row>
      <Row noGutters={true}>
          <div className={styles.biggertext} as="h2">MEET THE <br/>ARTIST <br/>
            <Link href='/colorblock.js' passHref>
              <Button inverted color='blue' compact size='big' animated>
                <Button.Content visible>Discover More</Button.Content>
              <Button.Content hidden>
                <Icon name='long arrow alternate right' />
                </Button.Content>
              </Button>
            </Link>
          </div> 
          <div className={styles.blur}>
            <Image fluid src="/meetartist.png" className={styles.meetart}/>
          </div>
       </Row>
      </Container>
    </Fragment>
)
  export default Homepg;
 