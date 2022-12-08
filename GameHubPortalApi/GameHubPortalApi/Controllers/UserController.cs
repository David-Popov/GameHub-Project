using AutoMapper;
using GameHubPortalApi.DataModels;
using GameHubPortalApi.EntityModels;
using GameHubPortalApi.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace GameHubPortalApi.Controllers
{
    [ApiController] 
    [EnableCors("AllowOrigin")]
    public class UserController: Controller
    {
        private readonly IGameRepository rep;
        private readonly IMapper mapper;
        private readonly GameHubDbContext db;
        private readonly IConfiguration config;


        public UserController(IGameRepository rep, IMapper mapper,GameHubDbContext db,IConfiguration config)
        {
            this.rep = rep;
            this.mapper = mapper;
            this.db = db;
            this.config = config;
        }

        public static UserEntity users = new UserEntity();

        [HttpPost("CreateUser")]
        [AllowAnonymous]
        public IActionResult AddUsers(User user)
        {
            if (db.User.Where(x => x.Email == user.Email).FirstOrDefault() != null)
            {
                return Ok("Already exists");
            }

            db.User.Add(user);
            db.SaveChanges();
            return Ok("Success");
        }

        [HttpPost("Login")]
        [AllowAnonymous]
        public IActionResult Login(LoginEntity login)
        {
            var userAvailable = db.User.Where(x => x.Email == login.Email && x.Password == login.Password).FirstOrDefault();
            if (userAvailable != null)
            {
                return Ok(new JwtService(config).GenerateToken(
                    userAvailable.Id.ToString(),
                    userAvailable.Email,
                    userAvailable.Password,
                    userAvailable.Role
                    ));
            }
            return Ok("Failure");
        }

        [HttpGet]
        [Route("[controller]/Favourite")]
        public IActionResult GetCurrentUser([FromQuery]string currentEmail)
        {
            var currUser = rep.GetCurrentUser(currentEmail);

            if (currUser != null)
            {
                return Ok(currUser);
            }

            return Ok("Failure");
        }
    }
}
