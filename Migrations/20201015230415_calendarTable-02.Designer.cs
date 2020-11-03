﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using chiropractordashboard.Data;

namespace chiropractordashboard.Migrations
{
    [DbContext(typeof(ChiropractorContext))]
    [Migration("20201015230415_calendarTable-02")]
    partial class calendarTable02
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("chiropractordashboard.Models.calendar", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("end_event")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("start_event")
                        .HasColumnType("datetime2");

                    b.Property<string>("text_color")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("calendar");
                });

            modelBuilder.Entity("chiropractordashboard.Models.chiropractor", b =>
                {
                    b.Property<int>("chiropractorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("emailAddress")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("phoneNumber")
                        .HasColumnType("int");

                    b.Property<DateTime>("timeCreated")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("datetime2");

                    b.HasKey("chiropractorId");

                    b.ToTable("chiropractor");
                });

            modelBuilder.Entity("chiropractordashboard.Models.order", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("chiropractorId")
                        .HasColumnType("int");

                    b.Property<int>("patientId")
                        .HasColumnType("int");

                    b.Property<string>("patientId1")
                        .HasColumnType("nvarchar(450)");

                    b.Property<decimal>("price")
                        .HasColumnType("decimal(18,2)");

                    b.Property<DateTime>("timeCreated")
                        .IsConcurrencyToken()
                        .ValueGeneratedOnAddOrUpdate()
                        .HasColumnType("datetime2");

                    b.Property<string>("title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("chiropractorId");

                    b.HasIndex("patientId1");

                    b.ToTable("order");
                });

            modelBuilder.Entity("chiropractordashboard.Models.patient", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("firstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("history")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("lastVisited")
                        .HasColumnType("datetime2");

                    b.Property<string>("symptoms")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("timeCreated")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("patient");
                });

            modelBuilder.Entity("chiropractordashboard.Models.order", b =>
                {
                    b.HasOne("chiropractordashboard.Models.chiropractor", "chiropractor")
                        .WithMany()
                        .HasForeignKey("chiropractorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("chiropractordashboard.Models.patient", "patient")
                        .WithMany()
                        .HasForeignKey("patientId1");
                });
#pragma warning restore 612, 618
        }
    }
}
