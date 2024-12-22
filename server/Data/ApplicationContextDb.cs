using Microsoft.EntityFrameworkCore;
using TaskManager.Entities;

namespace TaskManager.Data
{
    public class ApplicationContextDb : DbContext
    {
        public DbSet<TaskItem> TaskItems { get; set; }

        public ApplicationContextDb(DbContextOptions<ApplicationContextDb> options) : base(options)
        {
            
        }
    }
}