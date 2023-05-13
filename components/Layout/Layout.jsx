import React, { Fragment } from 'react'
import HeaderComponent from '../Header/HeaderComponent'
import FooterComponent from '../Footer/FooterComponent'

const Layout = ({children}) => {
  return (
    <Fragment>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
    </Fragment>
  )
}

export default Layout