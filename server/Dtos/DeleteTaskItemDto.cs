using System.ComponentModel.DataAnnotations;

namespace TaskManager.Dtos
{
    public record DeleteTaskItemDto([Required] int id);
}