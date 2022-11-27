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
    public class GenreController : Controller
    {
        private readonly IGameRepository rep;
        private readonly IMapper mapper;
        private readonly GameHubDbContext db;

        public GenreController(IGameRepository rep, IMapper mapper, GameHubDbContext db)
        {
            this.rep = rep;
            this.mapper = mapper;
            this.db = db;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> GetAllGenres()
        {
            var genres = await rep.GetAllGenres();

            return Ok(mapper.Map<List<GenreEntityModel>>(genres));
        }
    }
}
