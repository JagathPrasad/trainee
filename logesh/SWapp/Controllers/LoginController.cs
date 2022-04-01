using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SWapp.Data;
using SWapp.Model;
namespace SWapp.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
   
    public class LoginController : Controller
    {

        [Route("getverifyuser/{name}/{password}")]
        public IActionResult CheckUser(string name, string password)
        {
            try
            {
                UserOperation login = new UserOperation();
                var user = login.CheckUserExist(name, password);

                return Ok(user);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
                //return NotFound(ex);

            }
        }
        [Route("postnewuser")]
        public IActionResult NewUser(RegisterHelper reg)
        {
            try
            {
                UserOperation login = new UserOperation();
                var user_id = Guid.NewGuid();
                var IsActive = true;
                var CreatedOn = DateTime.Now;
                bool user = login.Register(user_id, reg.name, reg.password,IsActive, CreatedOn, reg.mobile);
                return Ok(user);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);

            }

        }
    }

    public class RegisterHelper
    {
        public string name { get; set; }
        public string password { get; set; }

        public string mobile { get; set; }


    }



}