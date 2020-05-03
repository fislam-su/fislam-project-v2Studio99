import Link from 'next/link'
import {Image, Container, Card, Input } from 'semantic-ui-react'
import Filter from './Filter'
import styles from './styles/productlist.module.css'

const mapProductsToItems = products =>
  products.map(({ id, name, image, meta, discription }) => {
    const price = meta.display_price.with_tax.formatted || null

    return {
      childKey: id,
      image: (
        <Link href={`/product?id=${id}`} passHref>
           <Image size="large" src={image} alt={discription} as='img'/>
        </Link>
      ),
      header: (
        <Link href={`/product?id=${id}`} passHref>
          <Card.Header as='a' className={styles.productname}>{name}</Card.Header>
        </Link>
      ),
      meta: (
        <Link href={`/product?id=${id}`} passHref>
          <Card.Meta as='a' className={styles.productmeta}>{price}</Card.Meta>
        </Link>
      )
    }
  })


export default ({ products }) => (
  <Container fluid={true} className={styles.container}> 
  <div as="h2" className={styles.header}>
    All Products
  </div>
  <Filter/>
    <Card.Group 
      className={styles.productlist}
      left={true} 
      items={mapProductsToItems(products)} 
      itemsPerRow={'3'}
      stacked="true"/>
  </Container>
)


