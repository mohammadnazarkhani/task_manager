using System.ComponentModel.DataAnnotations;

namespace TaskManager.Dtos
{
    public record UpdateTaskItemDto([Required] int id, [Required] string title);
}