namespace linkedInWebAPI.Models
{
    public class Followers
    {
        public System.Guid Id { get; set; }
        public Guid User_Id { get; set; }
        public Guid Post_Id { get; set; }
        public string Name { get; set; }

    }
}
