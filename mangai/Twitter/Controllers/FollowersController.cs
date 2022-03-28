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
    public class FollowersController : ControllerBase
    {
        public FollowersController()
        {

        }
        [Route("getfollow/{User_Id:Guid}")]
        public IActionResult GetFollow(Guid User_Id)
        {
            try
            {
                FollowerOperation fetching = new FollowerOperation();
                var followerslist = fetching.Getfollowers(User_Id);
                return Ok(followerslist);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            
        }
    }
}