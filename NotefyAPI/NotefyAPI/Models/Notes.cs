namespace NotefyAPI.Models
{
    public class Notes
    {
        //public Notes()
        //{
        //    Name = "";
        //    Note = "";
        //    NoteDate = DateTime.Now;
        //}
        public int Id { get; set; }
        public string? Note { get; set; }
        public string? Name { get; set; }
        public DateTime NoteDate { get; set; }
        public int UserId { get; set; }
    }
}
