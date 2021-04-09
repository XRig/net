using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Projects.Any()) return;

            var projects = new List<Project>
            {
                new Project
                {
                    Project_name = "Bug Tracker",
                    Start_date = DateTime.Now,
                    Target_end_date = DateTime.Now.AddMonths(3),
                    Created_on = DateTime.Now,
                    Created_by = "Rex Righetti",
                },
                new Project
                {
                    Project_name = "Spotify Clone",
                    Start_date = DateTime.Now.AddMonths(-1),
                    Target_end_date = DateTime.Now,
                    Created_on = DateTime.Now,
                    Created_by = "Rex Righetti",
                },
            };

            await context.Projects.AddRangeAsync(projects);
            await context.SaveChangesAsync();
        }
    }
}