namespace linkedInWebAPI.Models
{
    public class User
    {
            public System.Guid Id { get; set; }
            public string Name { get; set; }
            public string Password { get; set; }
            public string MobileNo { get; set; }
            public string Emaild { get; set; }
            public Nullable<bool> IsActive { get; set; }
            public Nullable<System.DateTime> CreatedOn { get; set; }
        
    }
}
