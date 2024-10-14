using Microsoft.EntityFrameworkCore;
using NotefyAPI.Models;

namespace NotefyAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        //public DbSet<Value> Values { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Notes> Notes { get; set; }
        //public DbSet<Photo> Photos { get; set; }
    }
}
