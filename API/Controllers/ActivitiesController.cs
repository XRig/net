using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Projects;
using Domain;
using Microsoft.AspNetCore.Mvc;



namespace API.Controllers
{
    public class ProjectsController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Project>>> GetProjects() => await Mediator.Send(new List.Query());


        [HttpGet("{id}")]

        public async Task<ActionResult<Project>> GetProjects(Guid id) => await Mediator.Send(new Details.Query { Id = id });


        [HttpPost]
        public async Task<IActionResult> CreateProject([FromBody] Project project)
        {
            return Ok(await Mediator.Send(new Create.Command { Project = project }));
        }

        [HttpPut]
        public async Task<IActionResult> EditProject(Guid id, Project project) {
            project.Id = id;
            return Ok(await Mediator.Send(new Edit.Command{Project = project}));
        }
    }
}