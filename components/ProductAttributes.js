import {Fragment} from 'react'
import Link from 'next/link'
import {Divider, Button, Icon} from 'semantic-ui-react'
import {Row, Col, Container, Image} from 'react-bootstrap'
import styles from './styles/productlist.module.css'

export default ({ description}) => (
  <Fragment>
     <Container fluid={true}>
    <Divider/>
    <Row className={styles.recpic}>
    <Col className={styles.recommend} md={6}>
    <div as="h1" className={styles.txt}>You may<br/>also like <hr style={{width: '50%', marginLeft:'0.3rem'}}/></div>
    </Col>

    <Col noGutters={true} md={3}>
      <div className={styles.blur}>
        <Link href='/index.js' passHref>
          <Image src='/COLORBLOCK/beach.png' className={styles.artblur}/> 
        </Link>
      </div>
      <div className={styles.bigbeach}>
         Suits<br/>
          <Link href={`/product?id=e05d17c8-9364-43d9-b57b-282452654feb`} passHref>
              <Button inverted color='black' compact size='small' animated>
                <Button.Content visible>Discover More</Button.Content>
                <Button.Content hidden>
                  <Icon name='mouse pointer' />
                </Button.Content>
              </Button>
          </Link>
        </div>
    </Col>

    <Col  noGutters={true} md={3}>
    <Row noGutters={true}> 
    <div className={styles.blur}>
        <Link href='/index.js' passHref>
          <Image src='/COLORBLOCK/twoguys.png' className={styles.artrec}/> 
        </Link>
      </div>
      <div className={styles.row}>
        Five Feets<br/>
        <Link href='/colorblock.js' passHref>
              <Button inverted color='black' compact size='small' animated>
                <Button.Content visible>Discover More</Button.Content>
                <Button.Content hidden>
                  <Icon name='mouse pointer' />
                </Button.Content>
              </Button>
          </Link>
      </div>
    </Row>
    <Row noGutters={true}> 
    <div className={styles.blur}>
        <Link href='/index.js' passHref>
          <Image src='/COLORBLOCK/middlefinger.jpg' className={styles.artrec}/> 
        </Link>
      </div>
      <div className={styles.row}>
        Rings<br/>
        <Link href='/colorblock.js' passHref>
              <Button inverted color='black' compact size='small' animated>
                <Button.Content visible>Discover More</Button.Content>
                <Button.Content hidden>
                  <Icon name='mouse pointer'/>
                </Button.Content>
              </Button>
          </Link>
      </div>
      </Row>
    </Col>
    </Row>
    </Container>
  </Fragment>
)
