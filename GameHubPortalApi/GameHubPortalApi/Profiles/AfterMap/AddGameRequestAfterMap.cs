using AutoMapper;
using GameHubPortalApi.DataModels;
using GameHubPortalApi.EntityModels;

namespace GameHubPortalApi.Profiles.AfterMap
{
    public class AddGameRequestAfterMap : IMappingAction<AddGameRequest, DataModels.Game>
    {
        public void Process(AddGameRequest source, Game destination, ResolutionContext context)
        {
            destination.Name = source.Name;
            destination.Price = source.Price;
            destination.Date = source.Date;
            destination.ImageUrl = source.ImageUrl;
            destination.Status = source.Status;
            destination.PlatformId = source.PlatformId;
            destination.GenreId = source.GenreId;
            destination.Rating = source.Rating;
        }
    }
}
