import React from 'react'
import {Button, Container, Menu } from 'semantic-ui-react'

interface Props {}

function NavBar(props: Props) {
  const {} = props

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>
          
        </Menu.Item>
        <Menu.Item name="Projects"/>
        <Menu.Item>
          <Button positive content='Create Project' />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar
