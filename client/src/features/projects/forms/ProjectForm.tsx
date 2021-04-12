import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Project } from '../../../app/models/project'

interface Props {
  project: Project | undefined;
  closeForm: () => void;
  createOrEdit: (project: Project) => void;
}

function ProjectForm(props: Props) {
  const { project: selectedProject, closeForm, createOrEdit } = props


  const initialState = selectedProject ?? {
    id: '',
    project_name: '',
    start_date: '',
    target_end_date: '',
    actual_end_date: '',
    created_on: '',
    created_by: '',
    updated_on: '',
    updated_by: '',
  }

  const [project, setProject] = useState<Project>(initialState)

  const handleSubmit = () => {
    createOrEdit(project)
  }
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value })
    

  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} placeholder='title' value={project.project_name} name='project_name' />
        <Form.Input onChange={handleInputChange} placeholder='Target Compleation' value={project.target_end_date} name='target_end_date' />
        {/* <Form.TextArea onChange={handleInputChange} placeholder='title' value={project.project_name} name='Discription' /> */}
        <Button floated='right' positive type='submit' content='Submit' />
        <Button onClick={closeForm} floated='right' type='button' content='Cancel' />
      </Form>
    </Segment>
  )
}

export default ProjectForm
