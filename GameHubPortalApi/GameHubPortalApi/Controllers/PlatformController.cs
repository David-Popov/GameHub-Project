using AutoMapper;
using GameHubPortalApi.EntityModels;
using GameHubPortalApi.Repositories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace GameHubPortalApi.Controllers
{
    [EnableCors("AllowOrigin")]

    public class PlatformController: Controller
    {
        private readonly IGameRepository rep;
        private readonly IMapper mapper;

        public PlatformController(IGameRepository rep, IMapper mapper)
        {
            this.rep = rep;
            this.mapper = mapper;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> GetAllPlatforms()
        {
            var platforms = await rep.GetAllPlatforms();

            return Ok(mapper.Map<List<PlatformEntityModel>>(platforms));
        }
    }
}
