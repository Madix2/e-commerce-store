import React from 'react'
import Container from '../components/container'
import CartClient from './cartclient'

function Cart() {
  return (
    <div className=' pt-8'>
      <Container>
        <CartClient/>
      </Container>
    </div>
  )
}

export default Cart