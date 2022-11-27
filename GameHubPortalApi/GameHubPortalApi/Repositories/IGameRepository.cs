﻿using GameHubPortalApi.DataModels;

namespace GameHubPortalApi.Repositories
{
    public interface IGameRepository
    {
        Task<List<Game>> GetAllGames();
        Game GetGameById(int id);
        Game GetGameBySearchTerm(string term);
        Task<List<Game>> GetGameByPlatform(int platformId);
        Task<List<Game>> GetGameByGenre(int genreId);
        //public Game RemoveGameById(int id);
        Task<List<Platform>> GetAllPlatforms();
        Task<List<Genre>> GetAllGenres();
        Task<List<Game>> GetGamesByGenre(int id);
        Task<Game> AddGame(Game request);


        public void CreatePasswordHash(string password, out byte[]passwordHash,out byte[]passwordSalt);

    }
}