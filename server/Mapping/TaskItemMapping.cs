using TaskManager.Entities;
using TaskManager.Dtos;

namespace TaskManager.Mapping
{
    public static class TaskItemMapping
    {
        // Map CreateTaskItemDto to TaskItem (Entity)
        public static TaskItem ToEntity(this CreateTaskItemDto crtTaskItmDto)
        {
            return new TaskItem
            {
                Title = crtTaskItmDto.title
            };
        }

        // Map TaskItem (Entity) to ReadTaskItemDto
        public static ReadTaskItemDto ToReadDto(this TaskItem taskItem)
        {
            return new ReadTaskItemDto(taskItem.Id, taskItem.Title);
        }

        // Map UpdateTaskItemDto to TaskItem (Entity)
        public static TaskItem ToEntity(this UpdateTaskItemDto updTaskItmDto)
        {
            return new TaskItem
            {
                Id = updTaskItmDto.id,
                Title = updTaskItmDto.title
            };
        }

        // Map TaskItem (Entity) to UpdateTaskItemDto
        public static UpdateTaskItemDto ToUpdateDto(this TaskItem taskItem)
        {
            return new UpdateTaskItemDto(taskItem.Id, taskItem.Title);
        }

        // No explicit mapping needed for DeleteTaskItemDto since it only contains the Id
        public static DeleteTaskItemDto ToDeleteDto(this TaskItem taskItem)
        {
            return new DeleteTaskItemDto(taskItem.Id);
        }
    }
}
