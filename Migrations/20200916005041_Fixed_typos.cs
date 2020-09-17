using Microsoft.EntityFrameworkCore.Migrations;

namespace chiropractordashboard.Migrations
{
    public partial class Fixed_typos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_chiropractor",
                table: "chiropractor");

            migrationBuilder.DropColumn(
                name: "chiropactorId",
                table: "chiropractor");

            migrationBuilder.AddColumn<int>(
                name: "chiropractorId",
                table: "chiropractor",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_chiropractor",
                table: "chiropractor",
                column: "chiropractorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_chiropractor",
                table: "chiropractor");

            migrationBuilder.DropColumn(
                name: "chiropractorId",
                table: "chiropractor");

            migrationBuilder.AddColumn<int>(
                name: "chiropactorId",
                table: "chiropractor",
                type: "int",
                nullable: false,
                defaultValue: 0)
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_chiropractor",
                table: "chiropractor",
                column: "chiropactorId");
        }
    }
}
