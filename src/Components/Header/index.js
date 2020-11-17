import React from 'react'
import { useLocation } from 'react-router-dom'
import './index.scss'

const Header = () => {
  const location = useLocation()
  
  return (
    <nav>
      <a className='nav-item' href={'/'}>
        <h2>LOGO</h2>
      </a>
      <a className={'nav-item' + (location.pathname === '/' ? ' active-nav-item' : '')}
        href='/'>
        <h3>Home</h3>
      </a>
      <div className='nav-seperator' />
      <a className={'nav-item' + (location.pathname === '/view' ? ' active-nav-item' : '')}
        href='/view'>
        <h3>Live Chart</h3>
      </a>
    </nav>
  )
}

export default Header
