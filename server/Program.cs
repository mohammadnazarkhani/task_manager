using TaskManager.Data;
using TaskManager.Entities;
using TaskManager.Mapping;
using TaskManager.Dtos;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configuring EF Core to DI
builder.Services.AddDbContext<ApplicationContextDb>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigins",
        builder => builder.WithOrigins("http://localhost:3000")
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use CORS policy
app.UseCors("AllowSpecificOrigins");

app.UseHttpsRedirection();

// CRUD Endpoints
app.MapPost("/tasks", async (CreateTaskItemDto dto, ApplicationContextDb dbContext) =>
{
    var taskItem = dto.ToEntity();
    await dbContext.TaskItems.AddAsync(taskItem);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/tasks/{taskItem.Id}", taskItem.ToReadDto());
});

app.MapGet("/tasks/{id:int}", async (int id, ApplicationContextDb dbContext) =>
{
    var taskItem = await dbContext.TaskItems.FindAsync(id);
    if (taskItem is null) return Results.NotFound();
    return Results.Ok(taskItem.ToReadDto());
});

app.MapPut("/tasks/{id:int}", async (int id, UpdateTaskItemDto dto, ApplicationContextDb dbContext) =>
{
    var taskItem = await dbContext.TaskItems.FindAsync(id);
    if (taskItem is null) return Results.NotFound();

    taskItem.Title = dto.title;
    await dbContext.SaveChangesAsync();
    return Results.Ok(taskItem.ToReadDto());
});

app.MapDelete("/tasks/{id:int}", async (int id, ApplicationContextDb dbContext) =>
{
    var taskItem = await dbContext.TaskItems.FindAsync(id);
    if (taskItem is null) return Results.NotFound();

    dbContext.TaskItems.Remove(taskItem);
    await dbContext.SaveChangesAsync();
    return Results.NoContent();
});

app.MapGet("/tasks", async (ApplicationContextDb dbContext) =>
{
    var taskItems = await dbContext.TaskItems
                                   .Select(t => t.ToReadDto())
                                   .ToListAsync();
    return Results.Ok(taskItems);
});

app.Run();
