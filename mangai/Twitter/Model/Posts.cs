using System;

namespace Twitter.Model
{
    public class Posts
    {

        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Description { get; set; }
        public string Comment_text { get; set; }
        public string Reply { get; set; }
        public string Islike { get; set; }
        public string Image { get; set; }
    }
}