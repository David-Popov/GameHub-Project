using Microsoft.EntityFrameworkCore;

namespace GameHubPortalApi.DataModels
{
    public class GameHubDbContext : DbContext
    {
        public GameHubDbContext(DbContextOptions<GameHubDbContext>options): base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("GameHubDb");
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<Game> Game { get; set; }
        public DbSet<Platform> Platform { get; set; }
        public DbSet<Genre> Genre { get; set; }
        public DbSet<User> User { get; set; }
    }
}
