using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace chiropractordashboard.Migrations
{
    public partial class calendarTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "calendar",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    start_event = table.Column<DateTime>(nullable: true),
                    end_event = table.Column<DateTime>(nullable: true),
                    color = table.Column<string>(nullable: true),
                    text_color = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_calendar", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "calendar");
        }
    }
}
