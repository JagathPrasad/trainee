using Microsoft.AspNetCore.Mvc;
using SWapp.Data;
using SWapp.Model;

namespace SWapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RestaurantController : Controller
    {
        
        public RestaurantController()
        {

        }
        [Route("getitems/{Id:Guid}")]
        public IActionResult GetItems(Guid Id)
        {
            try
            {
                Items items = new Items();
                var item_details = items.MenuDetails(Id);
                return Ok(item_details);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [Route("getallrestarants")]
        public IActionResult GetAllRestarants()
        {
            try
            {
                Restaurant restaurant = new Restaurant();
                var restaurent_details = restaurant.RestaruntDetails();
                return Ok(restaurent_details);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        //[HttpGet]
        //public ActionResult<IEnumerable<User>> GetUser()
        //{
        //    return _dbContest.User.ToList();
        //}

        //public IActionResult Index()
        //{
        //    return View();
        //}
    }
}
