using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Twitter.Model;

namespace Twitter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserloginController : ControllerBase
    {
        public UserloginController()
        {

        }

        [Route("getverifyusers/{username}/{password}")]

        public IActionResult GetVerifyusers(string username, string password)
        {
            try
            {
                UserOperation login = new UserOperation();
                var user_details = login.Userexist(username, password);
                return Ok(user_details);
            }
            catch (Exception ex)
            {
                
                return BadRequest(ex);
                //return NotFound();
            }
            
        }
        [Route("postverifysign")]
        public IActionResult PostVerifysign(AdduserHelper user)
        {
            try
            {
                UserOperation signup = new UserOperation();
                var id = Guid.NewGuid();
                var IsActive = true;
                var CreatedOn = DateTime.Now;
                var reg_Users = signup.Adduser(id,user.Email, user.Password, user.Fristname, user.Lastname);
                return Ok(reg_Users);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        public class AdduserHelper
        {
            

            public string Email { get; set; }

            public string Password { get; set; }

            public string Fristname { get; set; }

            public string Lastname { get; set; }


        }

    }

}