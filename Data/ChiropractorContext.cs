using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using chiropractordashboard.Models;
using System;

namespace chiropractordashboard.Data
{
    public class ChiropractorContext : DbContext
    {
        //an empty constructor
        public ChiropractorContext() { }
        public ChiropractorContext(DbContextOptions<ChiropractorContext> options) : base(options) { }
        public DbSet<chiropractor> chiropractor { get; set; }
        public DbSet<patient> patient { get; set; }
        public DbSet<order> order { get; set; }

        public static System.Collections.Specialized.NameValueCollection AppSettings { get; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
            .AddJsonFile("appsettings.json")
            .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("sqlDatabase"));
        }
    }
}
