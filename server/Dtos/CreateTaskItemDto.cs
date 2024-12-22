using System.ComponentModel.DataAnnotations;

namespace TaskManager.Dtos
{
    public record CreateTaskItemDto([Required]string title);
}