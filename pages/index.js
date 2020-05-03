import Layout from '../components/Layout'
import ProductList from '../components/ProductList'
import { getProducts } from '../lib/moltin'
import {Row, Col} from 'react-bootstrap'
import styles from '../components/styles/productlist.module.css'

const Home = ({ products }) => (
  <Layout title="All Products">
    <Row>
    <Col>
    <ProductList products={products} className={styles.productlist} />
    </Col>
    </Row>
  </Layout>
)

Home.getInitialProps = async () => {
  const {data, included} = await getProducts()
  
  const products = data.map(product => {
    const imageId = product.relationships.main_image
      ? product.relationships.main_image.data.id
      : false

    return {
      ...product,
      image: imageId ? included.main_images.find(img => img.id === imageId).link.href: '/public/logo.svg'
    }
  })
  return {
    products,
  }
}

export default Home
