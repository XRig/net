import React from 'react'
import { List, Grid } from 'semantic-ui-react'
import { Project } from '../../../app/models/project'
import ProjectDetails from '../details/ProjectDetails'
import ProjectForm from '../forms/ProjectForm'
import ProjectList from './ProjectList'

interface Props {
  projects: Project[];
  selectedProject: Project|undefined;
  selectProject: (id: string) => void;
  cancelSelectProject: () => void;
}

function ProjectDashboard(props: Props) {
  const { projects, selectedProject, selectProject, cancelSelectProject } = props

  return (
    <Grid>
      <Grid.Column width='10'>
        <ProjectList projects={projects} selectProject={selectProject} />
      </Grid.Column>
      <Grid.Column width='6'>
        {
         selectedProject &&
          <ProjectDetails project={selectedProject} cancelSelectProject={cancelSelectProject} />
        }
        <ProjectForm />
      </Grid.Column>
    </Grid>
  )
}

export default ProjectDashboard
