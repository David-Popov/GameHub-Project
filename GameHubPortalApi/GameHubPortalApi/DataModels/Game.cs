using System.ComponentModel.DataAnnotations;

namespace GameHubPortalApi.DataModels
{
    public class Game
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public string ImageUrl { get; set; }

        public DateTime Date { get; set; }
        public string GameDescription { get; set; }

        [Range(1,5)]
        public int Rating { get; set; }
        public string? Status { get; set; }

        public int GenreId { get; set; }

        public List<Genre> Genres { get; set; } = new List<Genre>();

        public int PlatformId { get; set; }

        public Platform Platform { get; set; }

    }
}
