using AutoMapper;
using GameHubPortalApi.DataModels;
using GameHubPortalApi.EntityModels;
using GameHubPortalApi.Profiles.AfterMap;

namespace GameHubPortalApi.Profiles
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Game, GameEntityModel>()
                .ReverseMap();

            CreateMap<Genre, GenreEntityModel>()
                .ReverseMap();

            CreateMap<Platform, PlatformEntityModel>()
                .ReverseMap();

            CreateMap<User, UserEntity>()
                .ReverseMap();

            CreateMap<AddGameRequest, DataModels.Game>()
                .AfterMap<AddGameRequestAfterMap>();
        } 
    }
}
