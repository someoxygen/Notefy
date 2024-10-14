namespace NotefyAPI.ViewModels
{
    public class NoteForListDto
    {
        public int Id { get; set; }
        public string? Note { get; set; }
        public string? Name { get; set; }
        public DateTime NoteDate { get; set; }
    }
}
