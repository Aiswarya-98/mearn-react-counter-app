import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='danger'>
        <MDBContainer>
          <MDBNavbarBrand href='/'>
            <img
              src='https://cdn.dribbble.com/users/78672/screenshots/1174974/media/acb3baafa87cd036232099bb2e2eb5c2.gif'
              height='40'
              alt=''
              loading='lazy'
            />COUNTER APPLICATION
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
