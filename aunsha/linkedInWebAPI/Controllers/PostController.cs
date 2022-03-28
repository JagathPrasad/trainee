using linkedInWebAPI.DataAccessLayer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace linkedInWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        [Route("getpostdetails/{Id:Guid}")]
        public IActionResult GetPostDetails(Guid Id)
        {
            try
            {
                PostOperation post = new PostOperation();
                var post_details = post.FetchPostDetails(Id);
                return Ok(post_details);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [Route("postaddcomments")]
        public IActionResult PostAddComments(CommentHelper comments)
        {
            try
            {
                PostOperation comment = new PostOperation();
                bool post_comment = comment.CommentsUser(comments.user_id, comments.post_id, comments.comment_text);
                return Ok(post_comment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        


        [Route("postaddlikes")]
        public IActionResult PostAddLikes(LikeHelper like)
        {
            try
            {
                PostOperation likes = new PostOperation();
                bool post_like = likes.LikedUser(like.user_id, like.post_id, like.liked);
                return Ok(post_like);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        

        [Route("postinsertpost")]
        public IActionResult PostInsertPost(PostHelper post)
        {

            try
            {
                PostOperation posts = new PostOperation();
                var post_id = Guid.NewGuid();
                bool isCreated = posts.AddPost(post.user_id,post.hashtags, post.description, post.image_name);
                return Ok(isCreated);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);

            }

        }
    }

    public class CommentHelper
    {
        public Guid user_id { get; set; }
        public Guid post_id { get; set; }
        public string comment_text { get; set; }
    }

    public class LikeHelper
    {
        public Guid user_id { get; set; }
        public Guid post_id { get; set; }
        public bool liked { get; set; }
    }

    public class PostHelper
    {
        public Guid user_id { get; set; }
        public string hashtags { get; set; }
        public string description { get; set; }
        public string image_name { get; set; }

    }
}
