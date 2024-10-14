using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NotefyAPI.Data;
using NotefyAPI.ViewModels;
using NotefyAPI.Models;
using NotefyAPI.Dtos;

namespace NotefyAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Notes")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        IAppRepository _appRepository;
        IMapper _mapper;
        public NotesController(IAppRepository appRepository,IMapper mapper)
        {
            _appRepository = appRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult GetNotes()
        {
            var notes = _appRepository.GetNotes();
            var notesToReturn = _mapper.Map<List<NoteForListDto>>(notes);
            return Ok(notesToReturn);
        }

        [HttpPost]
        [Route("add")]
        public ActionResult Add([FromBody]Notes note) 
        {
            _appRepository.Add(note);
            _appRepository.SaveAll();
            return Ok(note);
        }

        [HttpPost]
        [Route("edit")]
        public ActionResult Edit([FromBody] Notes note)
        {
            var unmodifiedNote = _appRepository.GetNoteById(note.Id);
            if (unmodifiedNote != null)
            {
                unmodifiedNote.Name = note.Name;
                unmodifiedNote.Note = note.Note;
                unmodifiedNote.NoteDate = note.NoteDate;
                _appRepository.Update(unmodifiedNote);
                _appRepository.SaveAll();
                return Ok(note);
            }
            return NotFound(note);
        }

        [HttpGet]
        [Route("detail")]
        public ActionResult GetNotesById(int id)
        {
            var note = _appRepository.GetNoteById(id);        
            var noteToReturn = _mapper.Map<NoteForDetailDto>(note);
            return Ok(noteToReturn);
        }


        [HttpGet]
        [Route("deleteNoteById")]
        public ActionResult DeleteNoteById(int noteId)
        {
            var note = _appRepository.GetNoteById(noteId);
            //foreach (var photo in city.Photos)
            //{
            //    _appRepository.Delete(photo);
            //}
            _appRepository.Delete(note);
            _appRepository.SaveAll();
            return Ok(noteId);
        }

        [HttpGet]
        [Route("getNotesByUserId")]
        public ActionResult GetCitiesByUserId(int userId)
        {
            var noteList = _appRepository.GetNotesByUserId(userId);
            List<NoteForListDto> noteForListDtos = new List<NoteForListDto>();
            foreach (var note in noteList)
            {
                noteForListDtos.Add(_mapper.Map<NoteForListDto>(note));
            }
            //var cityToReturn = _mapper.Map<CityForDetailDto>(cityList);
            return Ok(noteForListDtos);
        }

        //[HttpGet]
        //[Route("photos")]
        //public ActionResult GetPhotosByCity(int cityId)
        //{
        //    var photos = _appRepository.GetPhotosByCity(cityId);
        //    return Ok(photos);
        //}
    }
}
