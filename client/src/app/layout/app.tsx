import { useState, useEffect } from 'react'
import axios from 'axios'
import { Project } from '../models/project';
import NavBar from './NavBar';
import './style.css'
import { Container } from 'semantic-ui-react';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';
import { v4 as uuid } from 'uuid'

function App() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)
  const [editMode, setEditMode] = useState<boolean>(false)
  useEffect(() => {
    axios.get<Project[]>('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data)
      })
  }, [])


  const handleSelectProject = (id: string) => {
    setSelectedProject(projects.find(project => project.id === id))
  }
  const handleCancelSelectProject = () => {
    setSelectedProject(undefined)
  }
  const handleFormOpen = (id?: string) => {
    id ? handleSelectProject(id) : handleCancelSelectProject();
    setEditMode(true);
  }
  const handleFormClose = () => {
    setEditMode(false);
  }

  function handleCreateOrEditProject(project: Project) {
    project.id
      ? setProjects([...projects.filter(x => x.id !== project.id), project])
      : setProjects([...projects, { ...project, id: uuid() }])
    setEditMode(false);
    setSelectedProject(project);
  }

  function handleDeleteProject(id: string) {
    setProjects([...projects.filter(x => x.id !== id)])
  }
  return (
    <>
      <NavBar openForm={handleFormOpen} />
      <Container style={{ marginTop: '7em' }}>

        <ProjectDashboard
          projects={projects}
          selectedProject={selectedProject}
          selectProject={handleSelectProject}
          cancelSelectProject={handleCancelSelectProject}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditProject}
          deleteProject={handleDeleteProject}
        />
      </Container>
    </>
  )
}

export default App
