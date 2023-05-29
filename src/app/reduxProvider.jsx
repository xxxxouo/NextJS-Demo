"use client"
import { Provider } from 'react-redux'
import store from '@/state'
import React from 'react'

function Provider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Provider