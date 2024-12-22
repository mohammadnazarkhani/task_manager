using System.ComponentModel.DataAnnotations;

namespace TaskManager.Dtos
{
    public record ReadTaskItemDto([Required] int id, [Required] string title);
}