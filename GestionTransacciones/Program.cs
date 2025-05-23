using System.Globalization;
using GestionTransacciones.Data;
using Microsoft.AspNetCore.Localization;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();

builder.Services.Configure<RequestLocalizationOptions>(options =>
{
    options.DefaultRequestCulture = new RequestCulture("en-US");
    options.SupportedCultures = new[] { new CultureInfo("en-US") };
    options.SupportedUICultures = new[] { new CultureInfo("en-US") };
});


builder.Services.AddDbContext<TransaccionContexto>(o =>
{
    o.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    // Define tus políticas CORS aquí
    options.AddPolicy(name: "AllowAngularDevOrigin",
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200") // Tu origen de Angular en desarrollo
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });

    // Si necesitas una política para producción, defínela también
    options.AddPolicy(name: "AllowProductionOrigin",
                      policy =>
                      {
                          policy.WithOrigins("https://tu-dominio-angular-produccion.com") // Tu origen de Angular en producción
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });

    // O una política más laxa para pruebas, si es absolutamente necesario (¡NO PARA PRODUCCIÓN!)
    options.AddPolicy(name: "AllowAll",
                      policy =>
                      {
                          policy.AllowAnyOrigin()
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});


var app = builder.Build();
app.UseRequestLocalization();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseCors("AllowAngularDevOrigin");
}
else
{
    app.UseCors("AllowAngularDevOrigin");
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
