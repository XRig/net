import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Project } from '../../../app/models/project'
import ProjectDetails from '../details/ProjectDetails'
import ProjectForm from '../forms/ProjectForm'
import ProjectList from './ProjectList'

interface Props {
  projects: Project[];
  selectedProject: Project | undefined;
  selectProject: (id: string) => void;
  cancelSelectProject: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEdit: (project: Project) => void
  deleteProject:(id:string) =>void
}

function ProjectDashboard(props: Props) {
  const { projects, selectedProject, selectProject, cancelSelectProject, editMode, openForm, closeForm, createOrEdit,deleteProject } = props

  return (
    <Grid>
      <Grid.Column width='10'>
        <ProjectList projects={projects} selectProject={selectProject} deleteProject={deleteProject} />
      </Grid.Column>
      <Grid.Column width='6'>
        {
          selectedProject && !editMode &&
          <ProjectDetails project={selectedProject}
            cancelSelectProject={cancelSelectProject}
            openForm={openForm}
          />
        }
        {editMode &&
          <ProjectForm
            closeForm={closeForm}
            project={selectedProject}
            createOrEdit={createOrEdit}
          />
        }
      </Grid.Column>
    </Grid>
  )
}

export default ProjectDashboard
