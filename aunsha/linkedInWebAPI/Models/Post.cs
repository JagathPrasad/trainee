namespace linkedInWebAPI.Models
{
    public class Post
    {
        public System.Guid Id { get; set; }
        public Nullable<System.Guid> User_Id { get; set; }
        public string HashTags { get; set; }
        public string Description { get; set; }
        public string Video_Name { get; set; }
        public string Image_Name { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<bool> Isdelete { get; set; }
        public Nullable<System.DateTime> CreatedOn { get; set; }
        public string Comment_text { get; set; }
        public string Reply { get; set; }
        public string Name { get; set; }
        public bool liked { get; set; }
        public string likeCount { get; internal set; }
    }
}

