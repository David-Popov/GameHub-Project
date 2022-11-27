using GameHubPortalApi.DataModels;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;

namespace GameHubPortalApi.Repositories
{
    public class GameRepository : IGameRepository
    {
        private readonly GameHubDbContext db;

        public GameRepository(GameHubDbContext db)
        {
            this.db = db;
        }

        public async Task<Game> AddGame(Game request)
        {
            var game = await db.Game.AddAsync(request);
            await db.SaveChangesAsync();
            return game.Entity;
        }

        public void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using(var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }


        public async Task<List<Game>> GetAllGames()
        {
            var games = db.Game.Select(x => new Game
            {
                Name = x.Name,
                Date = x.Date,
                Id = x.Id,
                ImageUrl = x.ImageUrl,
                GameDescription = x.GameDescription,
                Status = x.Status,
                Price = x.Price,
                Rating = x.Rating,
                GenreId = x.GenreId,
                PlatformId = x.PlatformId
            }).ToListAsync();

            return await games;
        }

        public async Task<List<Genre>> GetAllGenres()
        {
            var genres = await db.Genre.Select(x => new Genre
            {
                Id = x.Id,
                Name = x.Name,
            }).ToListAsync();

            return genres;
        }

        public async Task<List<Platform>> GetAllPlatforms()
        {
            var platforms = db.Platform.Select(x => new Platform
            {
                Id = x.Id,
                Name = x.Name
            }).ToListAsync();

            return await platforms;
        }

        public async Task<List<Game>> GetGameByGenre(int genreId)
        {
            var gamesByGenre = db.Game.Select(x => new Game
            {
                Name = x.Name,
                Date = x.Date,
                Id = x.Id,
                ImageUrl = x.ImageUrl,
                GameDescription = x.GameDescription,
                Status = x.Status,
                Price = x.Price,
                Rating = x.Rating,
                GenreId = x.GenreId,
                PlatformId = x.PlatformId
            }).Where(x => x.GenreId == genreId)
            .ToListAsync();

            return await gamesByGenre;
        }

        public Game GetGameById(int id)
        {
            var gameById = db.Game.FirstOrDefault(x => x.Id == id);
            
            return gameById;
        }

        public async Task<List<Game>> GetGameByPlatform(int platformId)
        {
            var gamesByPlatform = db.Game.Select(x => new Game
            {
                Name = x.Name,
                Date = x.Date,
                Id = x.Id,
                ImageUrl = x.ImageUrl,
                GameDescription = x.GameDescription,
                Status = x.Status,
                Price = x.Price,
                Rating = x.Rating,
                GenreId = x.GenreId,
                PlatformId = x.PlatformId
            }).Where(x => x.PlatformId == platformId)
            .ToListAsync();

            return await gamesByPlatform;
        }

        public Game GetGameBySearchTerm(string term)
        {
            var gameByTerm = db.Game.FirstOrDefault(x => x.Name.Contains(term));
            
            if (gameByTerm == null)
            {
                throw new ArgumentNullException("There are no games with that term");
            }
            else
            {
                return gameByTerm;
            }
        }

        public async Task<List<Game>> GetGamesByGenre(int id)
        {
            var games = await db.Game.Where(x => x.GenreId == id)
                .ToListAsync();

            return games;
        }
    }
}
