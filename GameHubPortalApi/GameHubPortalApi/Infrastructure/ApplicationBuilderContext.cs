using GameHubPortalApi.DataModels;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace GameHubPortalApi.Infrastructure
{
    public static class ApplicationBuilderContext
    {
        public static IApplicationBuilder PrepareDatabase(this IApplicationBuilder app)
        {
            using var scopedServices = app.ApplicationServices.CreateScope();

            var data = scopedServices.ServiceProvider.GetService<GameHubDbContext>();

            data.Database.Migrate();
            SeedGenres(data);
            SeedPlatforms(data);
            SeedGames(data);
            return app;

        }


        private static void SeedGenres(GameHubDbContext db)
        {
            if (db.Genre.Any())
            {
                return;
            }

            db.Genre.AddRange(new[]
            {
                new Genre {Name = "Action"},
                new Genre {Name = "Adventure"},
                new Genre {Name = "Fighting"},
                new Genre {Name = "FPS/TAS"},
                new Genre {Name = "Indie"},
                new Genre {Name = "MMO"},
                new Genre {Name = "Platform"},
                new Genre {Name = "Racing"},
                new Genre {Name = "Role playing"},
                new Genre {Name = "Simulation"},
                new Genre {Name = "Sports"},
                new Genre {Name = "Strategy"},
            });

            db.SaveChanges();
        }


        private static void SeedPlatforms(GameHubDbContext db)
        {
            if (db.Platform.Any())
            {
                return;
            }

            db.Platform.AddRange(new[]
            {
                new Platform {Name = "Steam"},
                new Platform {Name = "Xbox"},
                new Platform {Name = "PSN"},
                new Platform {Name = "Nintendo Switch"},
                new Platform {Name = "Origin"},
                new Platform {Name = "Ubisoft"},
                new Platform {Name = "Epic"},
                new Platform {Name = "GOG"},
                new Platform {Name = "Battle.net"},
                new Platform {Name = "Other"},
                new Platform {Name = "Upcoming"},
                new Platform {Name = "DLS's"},
            });

            db.SaveChanges();
        }

        private static void SeedGames(GameHubDbContext db)
        {
            if (db.Game.Any())
            {
                return;
            }


            db.Game.AddRange(new[]
            {
                new Game {Name = "Gotham Knights", Price = 130, ImageUrl = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Gotham_Knights_Cover.jpg/220px-Gotham_Knights_Cover.jpg", Date = new DateTime(2015,12,31),Status = "Global", GameDescription = "Gotham Knights is an open-world, action RPG set in the most dynamic and interactive Gotham City yet. In either solo-play or with one other hero, patrol Gotham five distinct boroughs and drop in on criminal activity wherever you find it.", GenreId = 4, PlatformId = 8, Rating = 5},
                new Game {Name = "Need for speed", Price = 110, ImageUrl = "https://upload.wikimedia.org/wikipedia/en/7/7f/Cover_Art_of_Need_for_Speed_Heat.png", Date = new DateTime(2022,11,24),Status = "Global", GameDescription = "Need for Speed (NFS) is a racing game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illicit street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.", GenreId = 10, PlatformId = 4, Rating = 3},
                new Game {Name = "World of Warcraft", Price = 30, ImageUrl = "https://upload.wikimedia.org/wikipedia/en/6/65/World_of_Warcraft.png", Date = new DateTime(2017,2,12),Status = "Europe", GameDescription = "Set in the fictional world of Azeroth, WoW allows players to create avatar-style characters and explore a sprawling universe while interacting with nonreal players—called nonplayer characters (NPCs)—and other real-world players (PCs).", GenreId = 7, PlatformId = 5, Rating = 2},
                new Game {Name = "Spiderman", Price = 60, ImageUrl = "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png", Date = new DateTime(2020,5,31),Status = "North America", GameDescription = "Marvel Spider-Man is an open-world third-person action-adventure game, in which the player controls Peter Parker, under his superhero identity Spider-Man, through Manhattan, New York City to fight crime.", GenreId = 9, PlatformId = 6, Rating = 3},
                new Game {Name = "Star Craft 2", Price = 40, ImageUrl = "https://image.api.playstation.com/vulcan/ap/rnd/202210/0213/iVhWnqD0Km2DXlpJKPooE7Sa.jpg", Date = new DateTime(2021,4,20),Status = "Korea", GameDescription = "Gotham Knights is an open-world, action RPG set in the most dynamic and interactive Gotham City yet. In either solo-play or with one other hero, patrol Gotham five distinct boroughs and drop in on criminal activity wherever you find it.", GenreId = 5, PlatformId = 7, Rating = 2},
                new Game {Name = "Overwatch", Price = 80, ImageUrl = "https://image.api.playstation.com/vulcan/ap/rnd/202210/0213/iVhWnqD0Km2DXlpJKPooE7Sa.jpg", Date = new DateTime(2022,1,4),Status = "USA", GameDescription = "Gotham Knights is an open-world, action RPG set in the most dynamic and interactive Gotham City yet. In either solo-play or with one other hero, patrol Gotham five distinct boroughs and drop in on criminal activity wherever you find it.", GenreId = 5, PlatformId = 8, Rating = 1},
                new Game {Name = "Counter Strike Global Offensive", Price = 30, ImageUrl = "https://upload.wikimedia.org/wikipedia/en/6/6e/CSGOcoverMarch2020.jpg", Date = new DateTime(2010,6,8),Status = "Global", GameDescription = "The game pits two teams, Terrorists and Counter-Terrorists, against each other in different objective-based game modes. The most common game modes involve the Terrorists planting a bomb while Counter-Terrorists attempt to stop them, or Counter-Terrorists attempting to rescue hostages that the Terrorists have captured.", GenreId = 2, PlatformId = 1, Rating = 4},
                new Game {Name = "Destiny 2", Price = 100, ImageUrl = "https://upload.wikimedia.org/wikipedia/en/0/05/Destiny_2_%28artwork%29.jpg", Date = new DateTime(2014,12,12),Status = "Global", GameDescription = "Similar to its predecessor, Destiny 2 is a first-person shooter game that incorporates role-playing and massively multiplayer online game (MMO) elements.", GenreId = 6, PlatformId = 4, Rating = 5},
                new Game {Name = "FIFA 2023", Price = 120, ImageUrl = "https://cdn.ozone.bg/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/73043c7324a5e9c837346d88fd64da6f/fifa-23---kod-v-kutiya-pc-30.jpg", Date = new DateTime(2019,9,15),Status = "Europe", GameDescription = "EA SPORTS™ FIFA 23 brings The World Game to the pitch, with HyperMotion2 Technology that delivers even more gameplay realism, both the men and women FIFA World Cup™ coming during the season, the addition of women club teams, cross-play features**, and more.", GenreId = 10, PlatformId = 11, Rating = 5},
                new Game {Name = "NBA 2K23", Price = 90, ImageUrl = "https://assets.2k.com/1a6ngf98576c/2RNTmC7iLr6YVlxBSmE4M3/11177cffa2bdbedb226b089c4108726a/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-CROSSGEN_EDITION-425x535.jpg", Date = new DateTime(2013,7,18),Status = "Global", GameDescription = "NBA 2K23 gameplay has a bevy of new improvements to complement any skill set. Flex on the rim, finesse your way to the rack, and experience more authentic animations. 9/15/2022. NBA 2K23 is nearly here and it features gameplay enhancements that elevate the competitive intensity in all facets.", GenreId = 11, PlatformId = 10, Rating = 2},
            });

            db.SaveChanges();
        }

        private static void SeedUsers(GameHubDbContext db)
        {
            db.User.AddRange(new[]
            {
                new User {Email = "admin@gmail.com", Password = "admin1234", Role = "Admin"},
                new User {Email = "user1@gmail.com", Password = "user1", Role = "User"},
                new User {Email = "user2@gmail.com", Password = "user2", Role = "User"},
            });

            db.SaveChanges();
        }
    }
}
