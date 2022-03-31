var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
//builder.Services.AddCors();

var app = builder.Build();

void ConfigureServices(IServiceCollection services)
{
    services.AddCors(option =>
    {
        option.AddDefaultPolicy(builder =>
        {
            builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();

        });

    });
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();

//app.UseCors(builder =>
//{
//   builder.SetIsOriginAllowed(x => _ = true)
//   .AllowAnyMethod()
//   .AllowAnyHeader()
//   .AllowCredentials();
//});

// void ConfigureServices(IServiceCollection services)
//{
//    services.AddCors(options =>
//    {
//        options.AddPolicy(name: "CorsPolicy",
//            builder => builder.WithOrigins("https://localhost:44365/")
//            .AllowAnyMethod()
//            .AllowAnyHeader()
//            .WithMethods("POST", "PUT", "DELETE", "GET"));
//    });
//}

