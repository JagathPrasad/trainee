var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}



app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
//app.UseCors(builder =>
//{
//    builder.SetIsOriginAllowed(x => _ = true)
//    .AllowAnyMethod()
//    .AllowAnyHeader()
//    .AllowCredentials();
//});


//app.UseCors(options =>
//    {
//        options.(name: "CorsPolicy",
//            builder => builder.WithOrigins("https://localhost:44365/")
//            .AllowAnyMethod()
//            .AllowAnyHeader()
//            .WithMethods("POST", "PUT", "DELETE", "GET"));
//    });

//app.UseCors();

