using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace chiropractordashboard.Migrations
{
    public partial class added_relationships : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "patient",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    firstName = table.Column<string>(nullable: true),
                    lastName = table.Column<string>(nullable: true),
                    history = table.Column<string>(nullable: true),
                    symptoms = table.Column<string>(nullable: true),
                    lastVisited = table.Column<DateTime>(nullable: false),
                    timeCreated = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_patient", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "order",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    chiropractorId = table.Column<int>(nullable: false),
                    patientId = table.Column<int>(nullable: false),
                    title = table.Column<string>(nullable: true),
                    price = table.Column<decimal>(nullable: false),
                    timeCreated = table.Column<DateTime>(nullable: false),
                    patientId1 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_order", x => x.Id);
                    table.ForeignKey(
                        name: "FK_order_chiropractor_chiropractorId",
                        column: x => x.chiropractorId,
                        principalTable: "chiropractor",
                        principalColumn: "chiropractorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_order_patient_patientId1",
                        column: x => x.patientId1,
                        principalTable: "patient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_order_chiropractorId",
                table: "order",
                column: "chiropractorId");

            migrationBuilder.CreateIndex(
                name: "IX_order_patientId1",
                table: "order",
                column: "patientId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "order");

            migrationBuilder.DropTable(
                name: "patient");
        }
    }
}
