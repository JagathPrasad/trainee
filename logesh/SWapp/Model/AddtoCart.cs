namespace SWapp.Model
{
    public class AddtoCart
    {
        public int Id { get; set; }
        public string Restarunt_Id { get; set; }

        public int Food_Id { get; set; }

        public int FoodName { get; set; }
        public int IsActive { get; set; }
        public int IsDelete { get; set; }
        public int CreatedOn { get; set; }
       public int UserId { get; set; }

    }
}
