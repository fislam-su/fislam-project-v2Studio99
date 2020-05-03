import {Fragment} from 'react'
import {Row, Col, Container, Image} from 'react-bootstrap'
import {Icon, Label, Divider} from 'semantic-ui-react'
import AddToCart from './AddToCart'
import styles from './styles/summary.module.css'

export default ({ id, image, name, meta, sku, description }) => (
    <Fragment>
      <Container fluid={true} className={styles.container}>
        <Row>
          <Col md={8}>
          <Image fluid={true} src={image}/>
          </Col>
          <Col className={styles.desWrapper} md={3}>
            <Row>
              <div as="h1" className={styles.name}>{name}</div>
            </Row>
            <Row>
            <h2 style={{color:'rgb(122, 122, 122)', marginBottom:'1.2rem'}}>{meta.display_price.with_tax.formatted}</h2>
            </Row>
            <Row>
            <Label size="small" as='p' tag>SKU: {sku}</Label>
            </Row>
            <Row className={styles.cart}>
              <AddToCart productId={id} />
            </Row>
            <Row>
            <div className={styles.des}>
            <h3>About this product</h3>
            <h5><ul style={{lineHeight: '1.7rem'}}>{description}</ul></h5>
            </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
)
