using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotefyAPI.Data;
using NotefyAPI.ViewModels;
using NotefyAPI.Models;

namespace NotefyAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Users")]
    [ApiController]
    public class UserController : ControllerBase
    {
        IAppRepository _appRepository;
        IMapper _mapper;
        public UserController(IAppRepository appRepository, IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("getUserById")]
        public ActionResult GetUserById(int id)
        {
            var user = _appRepository.GetUserById(id);
            var userToReturn = _mapper.Map<UserForReturnDto>(user);
            return Ok(userToReturn);
        }
    }
}
