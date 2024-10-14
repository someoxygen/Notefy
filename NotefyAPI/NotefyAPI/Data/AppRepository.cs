using Microsoft.EntityFrameworkCore;
using NotefyAPI.Models;

namespace NotefyAPI.Data
{
    public class AppRepository : IAppRepository
    {
        DataContext _context;
        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }

        public List<Notes> GetNotes()
        {
            var notes = _context.Notes.ToList();
            return notes;
        }

        public Notes GetNoteById(int cityId)
        {
            var note = _context.Notes.FirstOrDefault(c => c.Id == cityId);
            return note;
        }
        public List<Notes> GetNotesByUserId(int userId)
        {
            var notes = _context.Notes.Where(c => c.UserId == userId).ToList();
            return notes;
        }
        public User GetUserById(int userId)
        {
            var user = _context.Users.FirstOrDefault(c => c.Id == userId);
            return user;
        }

        //public Photo GetPhoto(int id)
        //{
        //    var photo = _context.Photos.FirstOrDefault(p => p.Id == id);
        //    return photo;
        //}

        //public List<Photo> GetPhotosByCity(int cityId)
        //{
        //    var photos = _context.Photos.Where(p => p.CityId == cityId).ToList();
        //    return photos;
        //}

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }
    }
}
