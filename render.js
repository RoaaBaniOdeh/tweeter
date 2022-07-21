const Renderer = function(){



    const renderPosts = function(posts){
       
        $(".posts").empty();
        let postBox
        let comm
        for(let post of posts)
         {



          for(let comment of  post.comments)
          
          {
            postBox = `<div class= post>
            <div class= post-text><div class="delete" onclick="deletePost()"> x</div> ${post.text}   </div>
 
              
            <div class="comments"> ${comment.text }</div>
             
          
           
            <input type='text' placeholder='Got sth to say?'  id="input-comment" >  
            <button class='comments'> add comment</button>
            </div>`  

            $(".posts").append(postBox)
           
          } 
           $(".posts").append(postBox)
  }

         /* for(let post of posts)
         {   
           for(let comment of  this.post.comments)
          
          {
         
          }*/
  }




       
   
          
  
    
 
  return {
    renderPostsk : renderPosts,
   
  }

}

