using GameHubPortalApi.DataModels;
using System.ComponentModel.DataAnnotations;

namespace GameHubPortalApi.EntityModels
{
    public class GameEntityModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public string ImageUrl { get; set; }

        public string GameDescription { get; set; }

        public DateTime Date { get; set; }

        //[Range(1, 5)]
        public int Rating { get; set; }
        public string? Status { get; set; }

        public int GenreId { get; set; }

        public List<Genre> Genres { get; set; } = new List<Genre>();

        public int PlatformId { get; set; }

        public Platform Platform { get; set; }
    }
}
