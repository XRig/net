using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class ProjectsController : BaseApiController
    {
        private readonly DataContext _context;
        public ProjectsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Project>>> GetProjects() => await _context.Projects.ToListAsync();
        [HttpGet("{id}")]

        public async Task<ActionResult<Project>> GetProjects(Guid id) => await _context.Projects.FindAsync(id);
    }
}