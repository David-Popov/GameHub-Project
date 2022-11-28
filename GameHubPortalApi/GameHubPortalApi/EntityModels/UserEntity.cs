using GameHubPortalApi.DataModels;

namespace GameHubPortalApi.EntityModels
{
    public class UserEntity
    {
        public int Id { get; set; }

        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }


        public List<Game> FavouriteGames { get; set; } = new List<Game>();
    }
}
