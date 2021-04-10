import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        console.log(response)
        setProjects(response.data)
      })
  }, [])



  return (
    <ul>
      { projects.map((projects: any) => (
        <li key={projects.id}>
          {projects.project_name}
        </li>
      ))}

    </ul>
  )
}

export default App
