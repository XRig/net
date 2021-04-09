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
                    Project_Name = "Bug Tracker",
                    Start_Date = DateTime.Now,
                    Target_End_Date = DateTime.Now.AddMonths(3),
                    Created_On = DateTime.Now,
                    Created_By = "Rex Righetti",
                },
                new Project
                {
                    Project_Name = "Spotify Clone",
                    Start_Date = DateTime.Now.AddMonths(-1),
                    Target_End_Date = DateTime.Now,
                    Created_On = DateTime.Now,
                    Created_By = "Rex Righetti",
                },
            };

            await context.Projects.AddRangeAsync(projects);
            await context.SaveChangesAsync();
        }
    }
}