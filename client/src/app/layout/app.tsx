import { useState, useEffect } from 'react'
import axios from 'axios'
import { Project } from '../models/project';
import NavBar from './NavBar';
import './style.css'
import { Container } from 'semantic-ui-react';
import ProjectDashboard from '../../features/projects/dashboard/ProjectDashboard';

function App() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(undefined)
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

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: '7em' }}>

        <ProjectDashboard
         projects={projects} 
         selectedProject={selectedProject}
         selectProject={handleSelectProject}
         cancelSelectProject={handleCancelSelectProject}
         />
      </Container>
    </>
  )
}

export default App
