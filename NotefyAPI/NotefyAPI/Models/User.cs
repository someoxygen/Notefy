namespace NotefyAPI.Models
{
    public class User
    {
        public User()
        {
            Notes = new List<Notes>();
        }
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public List<Notes> Notes { get; set; }
    }
}
