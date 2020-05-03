import React from 'react'
import { Input, Icon } from 'semantic-ui-react'
import {Row, Col, Form} from 'react-bootstrap'
import styles from './styles/productlist.module.css'

const Filter = () => 

<Row>
    <Col md={5} className={styles.search} >
        <Input fluid icon='search' placeholder='Search...' />
    </Col>
    <Col className={styles.filter} md={5}>
        <Form>
        <Form.Group controlId="formBasicRangeCustom">
            <Form.Label className={styles.label}>Price Range :</Form.Label>
            <Form.Control type="range" custom />
        </Form.Group>
        </Form>
    </Col>
</Row>

export default Filter