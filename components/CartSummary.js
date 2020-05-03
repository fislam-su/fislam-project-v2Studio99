import StripeCheckout from 'react-stripe-checkout'
import { Segment, Divider, Header } from 'semantic-ui-react'
import {Button, Container} from 'react-bootstrap'
import styles from './styles/orderconfirm.module.css'

const stripekey = 'pk_test_Iyf0sSpwFqsAI1CIRqNACiQM00uuoA9CHz'

export default ({
  handleCheckout,
  display_price: {
    with_tax: { amount, currency, formatted }
  }
}) => (
  <React.Fragment>
    <Divider/>
    <Container>
      <div className={styles.total}>
        <h2>Sub total: {formatted}<br/></h2>
        </div>
      <StripeCheckout
        name="Studio99 Artist Shop"
        amount={amount}
        currency={currency}
        stripeKey={stripekey}
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
      <Button variant="outline-success" className={styles.buybutton} block size="lg">Check out</Button>
      </StripeCheckout>
    </Container>
  </React.Fragment>
)

