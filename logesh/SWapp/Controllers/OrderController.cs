using Microsoft.AspNetCore.Mvc;
using SWapp.Data;
using SWapp.Model;

namespace SWapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : Controller
    {
        [Route("postaddtocart")]
        public IActionResult AddTOCartList(AddToCarthelper Cart)
        {

            try
            {
                var Id = Guid.NewGuid();
                var IsActive = true;
                var IsDelete = false;
                var CreatedOn = DateTime.Now;
                AddToCartList addtocartlist = new AddToCartList();
                var add_cart = addtocartlist.CartData(Id, Cart.Food_Id, Cart.Restaurant_Id, Cart.FoodName, IsActive, IsDelete, CreatedOn, Cart.UserId);
                return Ok(add_cart);

            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }

        }
    }
    public class AddToCarthelper
    {
        public Guid Food_Id { get; set; }
        public Guid Restaurant_Id { get; set; }
        public string FoodName { get; set; }
        public Guid UserId { get; set; }
    }
}
