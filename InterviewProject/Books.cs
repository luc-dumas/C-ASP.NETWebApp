using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace InterviewProject
{
    [BsonIgnoreExtraElements]
    public class Books
    {
        
        public ObjectId Id { get; set; }

        [BsonElement("title")]
        public string Title { get; set; }

        [BsonElement("author")]
        public string Author { get; set; }

        [BsonElement("genre")]
        public string Genre { get; set; }

        [BsonElement("pages")]
        public int Pages { get; set; }

    }
}
