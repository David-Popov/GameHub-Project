using GameHubPortalApi.DataModels;

namespace GameHubPortalApi.EntityModels
{
    public class PlatformEntityModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public IEnumerable<Game> Games { get; set; } = new List<Game>();
    }
}
