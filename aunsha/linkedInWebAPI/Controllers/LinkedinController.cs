using linkedInWebAPI.DataAccessLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace linkedInWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LinkedinController : ControllerBase
    {
    
        public IActionResult GetUser()
        {
            return Ok(true);

        }

        //[Route("getpostdetails/{Id:Guid}")]
        //public IActionResult GetPostDetails(Guid Id)
        //{
        //    try
        //    {
        //        PostDetails post = new PostDetails();
        //        var post_details = post.FetchPostDetails(Id);
        //        return Ok(post_details);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);
        //    }
        //}

        //[Route("getverifyuser/{emaild}/{password}")]
        //public IActionResult GetVerifyUser(string emaild, string password)
        //{
        //    try
        //    {
        //        VerifyUser verify = new VerifyUser();
        //        var user_details = verify.CheckUserExist(emaild, password);
        //        return Ok(user_details);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);
        //    }
        //}

        //[Route("getfollowersdetails/{Id:Guid}")]
        //public IActionResult GetFollowersDetails(Guid Id)
        //{
        //    try
        //    {
        //        FollowersDetails post = new FollowersDetails();
        //        var followers_details = post.FollowersList(Id);
        //        return Ok(followers_details);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex);
        //    }
        //}

    }

}

