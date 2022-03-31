using linkedInWebAPI.DataAccessLayer;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace linkedInWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors]
    public class FollowerController : ControllerBase
    {

        [Route("getfollowersdetails/{Id:Guid}")]
        public IActionResult GetFollowersDetails(Guid Id)
        {
            try
            {
                FollowersDetails follow = new FollowersDetails();
                var followers_details = follow.FollowersList(Id);
                return Ok(followers_details);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
