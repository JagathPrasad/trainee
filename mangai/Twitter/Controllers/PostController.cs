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
    public class PostController : ControllerBase
    {
        public PostController()
        {

        }

        [Route("getpostdetails/{User_Id:Guid}")]

        public IActionResult GetPostDetails(Guid User_Id)
        {
            try
            {
                Postoperation post = new Postoperation();
                var postdetails = post.Getpost(User_Id);
                return Ok(postdetails);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
        [HttpPost]
        [Route("postaddcomment")]
        public IActionResult PostAddComment(CommentHelper comment)
        {
            
            try
            {

                Postoperation post = new Postoperation();
                bool post_comment = post.Insertcomment(comment.User_id, comment.Post_id, comment.Comment_text);
                return Ok(post_comment);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
        

        [Route("postlike")]
        public IActionResult Postlike(Likehelper like)
        {
            
            try
            {
                var User_id = Guid.NewGuid();
                Postoperation post = new Postoperation();
                var like_details = post.Insertlike(like.Post_id, like.User_id, like.Islike);
                return Ok(like_details);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
                //throw ex;
            }

        }
        

        [Route("postinsertpost")]
        public IActionResult PostInsertPost(PostHelper posts)
        {
         
            try
            {

                var Post_id = Guid.NewGuid();
                Postoperation post = new Postoperation();
                bool post_details = post.InsertPost(posts.user_id, Post_id, posts.Descrption, posts.Image);
                return Ok(post_details);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        
    }
    public class CommentHelper
    {
        public Guid User_id { get; set; }
        public Guid Post_id { get; set; }

        public string Comment_text { get; set; }
    }
    public class PostHelper
    {
        public Guid user_id { get; set; }
        public string Descrption { get; set; }

        public string Image { get; set; }
    }
    public class Likehelper
    {
        public Guid Post_id { get; set; }

        public Guid User_id { get; set; }

        public bool Islike { get; set; }
    }
}