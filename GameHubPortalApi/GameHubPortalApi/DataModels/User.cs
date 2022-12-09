namespace GameHubPortalApi.DataModels
{
    public class User
    {
        public int Id { get; set; }

        public string? Email { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }

        public List<Game> FavouriteGames { get; set; } = new List<Game>();


    }
}
