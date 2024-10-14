using AutoMapper;
using NotefyAPI.ViewModels;
using NotefyAPI.Models;
using NotefyAPI.Dtos;

namespace NotefyAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            //CreateMap<City, CityForListDto>()
            //    .ForMember(dest => dest.PhotoUrl, opt =>
            //    {
            //        opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url);
            //    });
            CreateMap<Notes, NoteForDetailDto>();
            CreateMap<Notes, NoteForListDto>();
            CreateMap<User, UserForReturnDto>();
            //CreateMap<PhotoForCreationDto, Photo>();
            //CreateMap<Photo, PhotoForReturnDto>();
        }
    }
}
