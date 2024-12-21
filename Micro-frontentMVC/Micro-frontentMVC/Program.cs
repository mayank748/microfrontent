var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
builder.Services.AddCors(options =>
{
    options.AddPolicy("micro-frontend",policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

//app.Map("/Home/RedirectToCounterApp", proxyApp =>
//{
//    proxyApp.Run(async context =>
//    {
//        var targetUri = new Uri("http://localhost:3000" + context.Request.Path + context.Request.QueryString);

//        using var client = new HttpClient();
//        var requestMessage = new HttpRequestMessage(new HttpMethod(context.Request.Method), targetUri);

//        foreach (var header in context.Request.Headers)
//        {
//            requestMessage.Headers.TryAddWithoutValidation(header.Key, header.Value.ToArray());
//        }

//        var response = await client.SendAsync(requestMessage);

//        context.Response.StatusCode = (int)response.StatusCode;

//        foreach (var header in response.Headers)
//        {
//            context.Response.Headers[header.Key] = header.Value.ToArray();
//        }

//        foreach (var header in response.Content.Headers)
//        {
//            context.Response.Headers[header.Key] = header.Value.ToArray();
//        }

//        await response.Content.CopyToAsync(context.Response.Body);
//    });
//});

//app.MapWhen(ctx => ctx.Request.Path.StartsWithSegments("/Home/RedirectToCounterApp"), spa =>
//{
//    spa.Run(async context =>
//    {
//        context.Response.Redirect("http://localhost:3000"); // Redirect to React app
//    });
//});

app.UseCors("micro-frontend");


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
