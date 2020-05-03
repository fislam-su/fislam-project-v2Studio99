import Link from 'next/link'
import { Item, Button, Loader, Message, Card, Image } from 'semantic-ui-react'
import {Container, Row, Col} from 'react-bootstrap'
import styles from './styles/orderconfirm.module.css'

export default ({ items, removeFromCart, loading, completed }) => {
  if (loading) return <Loader active inline="centered" />

  if (completed)
    return (
      <Message success className={styles.ordercon_wrapper}>
        <Message.Header className={styles.ordercon_header}>THANK YOU FOR YOUR ORDER</Message.Header>
        <p>THANK YOU FOR YOUR PURCHASE WE HOPE YOU ARE AS TRILLED AS WE ARE!
          YOU WILL RECIEVE AN EMAIL ONCE THE PAYMENT IS PROCESSED.</p>
      </Message>
    )

  if (items.length === 0)
    return (
      <Message warning>
        <Message.Header>Your cart is empty</Message.Header>
        <p>
          You'll need to add some items to the cart before you can checkout.
        </p>
      </Message>
    )

  const mapCartItemsToItems = items =>
    items.map(({ id, product_id, name, quantity, meta, image }) => {
      const price = meta.display_price.with_tax.unit.formatted || null
      const imageUrl = image.href || '/public/logo.svg'

      return {
        childKey: id,
        header: (
          <Link href={`/product?id=${product_id}`} passHref>
            <Card.Header as="a"><h2>{name}</h2></Card.Header>
          </Link>
        ),
        image: (
        <Image fluid src={imageUrl} ui={false}></Image>
        ),
        meta: (
          <Card.Meta as='a'><h5><br/>{quantity} x {price}</h5></Card.Meta>
        ),
        extra: (
          <Button
            inverted
            circular
            size="mini"
            color="red"
            content="Remove"
            icon="remove"
            floated="right"
            onClick={() => removeFromCart(id)}
          />
        )
      }
    })

  return (
  <React.Fragment>
  <Container fluid="true">   
    <div className={styles.checkoutheader}>
      Your Cart
    </div> 
    <div className={styles.checklist}>
      <Card.Group centered stackable left fluid items={mapCartItemsToItems(items)} itemsPerRow={3}/>
    </div>
  </Container>
  </React.Fragment>
  )
}
