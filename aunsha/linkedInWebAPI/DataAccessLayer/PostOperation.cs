using linkedInWebAPI.DBConnection;
using linkedInWebAPI.Models;
using System.Data;
using System.Data.SqlClient;

namespace linkedInWebAPI.DataAccessLayer
{
    public class PostOperation
    {
        //string connectionString = "data source=LAPTOP-D4EI0KO2\\ANUSHA;initial catalog=LinkedIn;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework&quot;";

        //public bool AddPost(Guid User_Id, string HashTags, string Description, string Image_Name)
        //{
        //    bool isSuccess = false;

        //    try
        //    {
        //        using (SqlConnection con = new SqlConnection(connectionString))
        //        {
        //            // Insert query  
        //            using (SqlCommand cmd = new SqlCommand("AddPost"))
        //            {
        //                cmd.CommandType = System.Data.CommandType.StoredProcedure;
        //                cmd.Connection = con;
        //                // opening connection  
        //                con.Open();
        //                // Passing parameter values  
        //                cmd.Parameters.AddWithValue("@User_Id", User_Id);
        //                //cmd.Parameters.AddWithValue("@Post_Id", Post_Id);
        //                cmd.Parameters.AddWithValue("@HashTags", HashTags);
        //                cmd.Parameters.AddWithValue("@Description", Description);
        //                //cmd.Parameters.AddWithValue("@Video_Name", Video_Name);
        //                cmd.Parameters.AddWithValue("@Image_Name", Image_Name);
        //                int response = cmd.ExecuteNonQuery();
        //                if (response == 1)
        //                {
        //                    isSuccess = true;
        //                }
        //                else
        //                {
        //                    isSuccess = false;
        //                }

        //                // isSuccess = cmd.ExecuteNonQuery() == 1 ? true : false;


        //            }
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }

        //    return isSuccess;
        //}

        public bool AddPost(Guid User_Id, string HashTags, string Description, string Image_Name)
        {
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("AddPost");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);
            //sqlCommand.Parameters.AddWithValue("@Post_Id", Post_Id);
            sqlCommand.Parameters.AddWithValue("@HashTags", HashTags);
            sqlCommand.Parameters.AddWithValue("@Description", Description);
            //sqlCommand.Parameters.AddWithValue("@Video_Name", Video_Name);
            sqlCommand.Parameters.AddWithValue("@Image_Name", Image_Name);

            return dbOperation.SaveData(sqlCommand);
        }

        public bool LikedUser(Guid User_Id, Guid Post_Id, bool Liked)
        {
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("LikeUser");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);
            sqlCommand.Parameters.AddWithValue("@Post_Id", Post_Id);
            sqlCommand.Parameters.AddWithValue("@Liked", Liked);

            return dbOperation.SaveData(sqlCommand);
        }

        public bool CommentsUser(Guid User_Id, Guid Post_Id, string Comment_text)
        {
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("CommentUser");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);
            sqlCommand.Parameters.AddWithValue("@Post_Id", Post_Id);
            sqlCommand.Parameters.AddWithValue("@Comment_text", Comment_text);

            return dbOperation.SaveData(sqlCommand);
        }

        public List<Post> FetchPostDetails(Guid User_Id)
        {
            List<Post> post_data = new List<Post>();
            DBOperation dbOperation = new DBOperation();
            SqlCommand sqlCommand = new SqlCommand("ViewPost");
            sqlCommand.CommandType = CommandType.StoredProcedure;
            sqlCommand.Parameters.AddWithValue("@User_Id", User_Id);


            DataTable post_table = dbOperation.GetData(sqlCommand);

            if (post_table.Rows.Count > 0)
            {
                foreach (DataRow row in post_table.Rows)
                {

                    Post post = new Post();
                    post.Id = new Guid(Convert.ToString(row["Id"]));
                    post.Name = Convert.ToString(row["Name"]);
                    post.HashTags = Convert.ToString(row["HashTags"]);
                    post.Description = Convert.ToString(row["Description"]);
                    post.Video_Name = Convert.ToString(row["Video_Name"]);
                    post.Image_Name = Convert.ToString(row["Image_Name"]);
                    post.Comment_text = Convert.ToString(row["Comment_text"]);
                    post.Reply = Convert.ToString(row["Reply"]);
                    post.liked = Convert.ToString(row["liked"]) == "" ? false : true;
                    post.likeCount = Convert.ToString(row["likeCount"]);
                    post_data.Add(post);

                }
            }

            return post_data;
        }
    }
}
