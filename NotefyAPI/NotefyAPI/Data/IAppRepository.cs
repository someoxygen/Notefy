using NotefyAPI.Models;

namespace NotefyAPI.Data
{
    public interface IAppRepository
    {
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        bool SaveAll();
        List<Notes> GetNotes();
        //List<Photo> GetPhotosByCity(int cityId);
        Notes GetNoteById(int noteId);
        List<Notes> GetNotesByUserId(int userId);
        User GetUserById(int userId);
        //Photo GetPhoto(int id);
    }
}
