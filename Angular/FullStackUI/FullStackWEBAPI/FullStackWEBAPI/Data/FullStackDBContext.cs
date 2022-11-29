using FullStackWEBAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FullStackWEBAPI.Data
{
    public class FullStackDBContext : DbContext
    {
        public FullStackDBContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Employee> Employee { get; set; }
    }
}
