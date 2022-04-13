using linkedInWebAPI.DataAccessLayer;
using linkedInWebAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace linkedInWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
 
    public class UserController : ControllerBase
    {

        [Route("getverifyuser/{emaild}/{password}")]
        public IActionResult GetVerifyUser(string emaild, string password)
        {
            try
            {
                UserOperation login = new UserOperation();
                var user_details = login.CheckUserExist(emaild, password);
                return Ok(user_details);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }


        [Route("postadduser")]
        public IActionResult PostAddUser(UserHelper user)
        {
            try
            {
                UserOperation signup = new UserOperation();
                var Id = Guid.NewGuid();
                var IsActive = true;
                var CreatedOn = DateTime.Now;
                bool add_users = signup.AddingUser(Id,user.emaild, user.password, user.name, user.mobileno, IsActive, CreatedOn);
                return Ok(add_users);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);

            }
        }
        [Route("getalluser")]
        public IActionResult GetAllUser()
        {
            try
            {
                UserOperation user = new UserOperation();
                var user_details = user.Userdata();
                return Ok(user_details);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
    public class UserHelper
    {
        public string emaild { get; set; }
        public string password { get; set; }
        public string name { get; set; }
        public string mobileno { get; set;}

    }

    

}

