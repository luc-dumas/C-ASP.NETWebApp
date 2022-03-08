using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MongoDB.Bson;
using MongoDB.Driver;

namespace InterviewProject.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Books> Get()
        {
            var client = new MongoClient("mongodb+srv://lucdumas007:brandonborden@cluster0.msigl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
            var database = client.GetDatabase("myFirstDatabase");
            var collection = database.GetCollection<Books>("books");

            return collection.Find(s => s.Pages > 0).ToList();
             
        }
    }
}
