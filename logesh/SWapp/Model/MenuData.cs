namespace SWapp.Model
{
    public class MenuData
    {
        public Guid Id { get; set; }

        public string FoodName { get; set; }
        public string Rating { get; set; }
        public string FoodImage { get; set; }
        public string Price { get; set; }
        public string Quantity { get; set; }
        public  Guid   Restaurant_Id { get; set; }
    }
}
