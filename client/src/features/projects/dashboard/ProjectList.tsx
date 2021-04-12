import React from 'react'
import { Button, Item, Segment } from 'semantic-ui-react'
import { Project } from '../../../app/models/project'

interface Props {
  projects: Project[];
  selectProject: (id: string) => void;
  deleteProject: (id: string) => void;
}

function ProjectList(props: Props) {
  const { projects, selectProject, deleteProject } = props

  return (
    <Segment>
      <Item.Group divided>
        {projects.map((project) => (
          <Item key={project.id}>
            <Item.Content>
              <Item.Header as='a'>{project.project_name}</Item.Header>
              <Item.Meta>Start Date: {project.start_date}</Item.Meta>
              <Item.Meta>Target Compleation: {project.target_end_date}</Item.Meta>
              <Item.Description>
                <div>{project.updated_on}</div>
                <div>{project.updated_by}</div>
              </Item.Description>
              <Item.Extra>
                <Button onClick={() => selectProject(project.id)} floated='right' content='View' color='blue' />
                <Button onClick={() =>deleteProject(project.id)} floated='right' content='Delete' color='red' />

              </Item.Extra>
            </Item.Content>
            {project.project_name}
          </Item>
        ))}
      </Item.Group>
    </Segment>
  )
}

export default ProjectList
