using GameHubPortalApi.DataModels;
using System.ComponentModel.DataAnnotations;

namespace GameHubPortalApi.EntityModels
{
    public class UpdateGameEntityModel
    {
        public string Name { get; set; }
        public double Price { get; set; }

        public string ImageUrl { get; set; }

        public DateTime Date { get; set; }

        public string GameDescription { get; set; }


        [Range(1, 5)]
        public int Rating { get; set; }
        public string? Status { get; set; }

        public int GenreId { get; set; }

        public int PlatformId { get; set; }

    }
}
