import React from 'react'
import {Button, Container, Menu } from 'semantic-ui-react'

interface Props {
  openForm:() => void
}

function NavBar(props: Props) {
  const {openForm} = props

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          
        </Menu.Item>
        <Menu.Item name="Projects"/>
        <Menu.Item>
          <Button onClick={()=>openForm()} positive content='Create Project' />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar
