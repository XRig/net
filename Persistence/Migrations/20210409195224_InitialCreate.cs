using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Projects",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    Project_Name = table.Column<string>(type: "TEXT", nullable: true),
                    Start_Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Target_End_Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Actual_End_Date = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Created_On = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Created_By = table.Column<string>(type: "TEXT", nullable: true),
                    Updated_on = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Updated_by = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Projects", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Projects");
        }
    }
}
