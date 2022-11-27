using AutoMapper;
using GameHubPortalApi.DataModels;
using GameHubPortalApi.EntityModels;
using GameHubPortalApi.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace GameHubPortalApi.Controllers
{
    [ApiController]
    [EnableCors("AllowOrigin")]

    public class GameController : Controller
    {
        private readonly IGameRepository rep;
        private readonly IMapper mapper;
        private readonly GameHubDbContext db;

        public GameController(IGameRepository rep, IMapper mapper, GameHubDbContext db)
        {
            this.rep = rep;
            this.mapper = mapper;
            this.db = db;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> GetAllGames()
        {
            var games = await rep.GetAllGames();

            return  Ok(mapper.Map<List<GameEntityModel>>(games));
        }

        [HttpGet]
        [Route("[controller]/{gameId:int}"), ActionName("GetGameById")]
        public IActionResult GetGameById([FromRoute] int gameId)
        {
            var game = rep.GetGameById(gameId);

            if (game == null)
            {
                return NotFound();
            }
            return Ok(mapper.Map<Game>(game));
        }

        [HttpPut]
        [Route("[controller]/{gameId:int}")]
        public async Task<IActionResult> UpdateGame([FromRoute] int gameId, UpdateGameEntityModel gameUpdate)
        {
            var game = await db.Game.FindAsync(gameId);

            if (game == null)
            {
                return NotFound();
            }

            game.Name = gameUpdate.Name;
            game.Price = gameUpdate.Price;
            game.Date = gameUpdate.Date;
            game.ImageUrl = gameUpdate.ImageUrl;
            game.GameDescription = gameUpdate.GameDescription;
            game.Status = gameUpdate.Status;
            game.Rating = gameUpdate.Rating;
            game.PlatformId = gameUpdate.PlatformId;
            game.GenreId = gameUpdate.GenreId;

            await db.SaveChangesAsync();

            return Ok(game);
        }


        [HttpDelete]
        [Route("[controller]/{gameId:int}")]
        public async Task<IActionResult> DeleteGame([FromRoute] int gameId)
        {
            var gameForDelete = await db.Game.FindAsync(gameId);

            if (gameForDelete == null)
            {
                return NotFound();
            }

            db.Game.Remove(gameForDelete);
            db.SaveChanges();

            return Ok(gameForDelete);
        }

        [HttpPost]
        [Route("[controller]/Add")]
        public async Task<IActionResult> AddGame([FromBody] AddGameRequest request)
        {
            
            var game = await rep.AddGame(mapper.Map<DataModels.Game>(request));

            return CreatedAtAction(nameof(GetGameById), new { gameId = game.Id },
                mapper.Map<Game>(game));
            
        }

        [HttpGet]
        [Route("[controller]/Genre/{genreId:int}")]
        public async Task<IActionResult> GetGamesByGenre([FromRoute]int genreId)
        {
            var games = await rep.GetGameByGenre(genreId);

            return Ok(games);
        }

        [HttpGet]
        [Route("[controller]/Platform/{platformId:int}")]
        public async Task<IActionResult> GetGamesByPlatform([FromRoute] int platformId)
        {
            var games = await rep.GetGameByGenre(platformId);

            return Ok(games);
        }
    }
}
