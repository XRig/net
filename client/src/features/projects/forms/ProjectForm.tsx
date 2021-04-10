import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

interface Props {}

function ProjectForm(props: Props) {
  const {} = props

  return (
    <Segment clearing>
    <Form>
      <Form.Input placeholder='Title' />
      <Form.Input placeholder='Target Compleation' />
      <Form.Input placeholder='Discription' />
      <Button floated='right' positive type='submit' content='Submit'/>
      <Button floated='right' type='submit' content='Cancel'/>
    </Form>
    </Segment>
  )
}

export default ProjectForm
