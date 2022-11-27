namespace GameHubPortalApi.DataModels
{
    public class Genre
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IEnumerable<Game> Games { get; set; } = new List<Game>();
    }
}
