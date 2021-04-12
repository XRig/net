import React from 'react'
import { Button, Card} from 'semantic-ui-react'
import { Project } from '../../../app/models/project'

interface Props {
  project:Project
  cancelSelectProject:()=>void;
  openForm:(id:string) => void;
}

function ProjectDetails(props: Props) {
  const {project,cancelSelectProject, openForm} = props

  return (
    <Card fluid>
  
    <Card.Content>
      <Card.Header>{project.project_name}</Card.Header>
      <Card.Meta>
        <span className='Compleation Date'>{project.target_end_date}</span>
      </Card.Meta>
      <Card.Description>
        The Bug Tracker
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button.Group widths='2'>
        <Button onClick={()=>{openForm(project.id)}} basic color='blue' content='Edit'/>
        <Button onClick={()=>cancelSelectProject()} basic color='grey' content='Cancel'/>
      </Button.Group>
    </Card.Content>
  </Card>
  )
}

export default ProjectDetails
