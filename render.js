const Renderer = function(){

  const renderPosts = function(posts){
    $(".posts").empty();
    let postBox
    let comm
    for(let post of posts)
     {
         $(".posts").append($(`<div class="post"  id =${post.id} data-id=${post.id}>  <span class="delete" >x</span> ${post.text}</div>`))
         for (let comment of post.comments){
  $(`#${post.id}`).append($(`<div id=${comment.id}> </div>`))
  $(`#${comment.id}`).append($(`<span class="delete-comment" > x </span>`))
  $(`#${comment.id}`).append($(`<span class="comments" data-id=${comment.id}> ${comment.text}</span>`))
}
$(`#${post.id}`).append($(`<div>  </div>`))
$(`#${post.id}`).append($(`<input type text class="#input-comment" placeholder="got something to say? ">  </input>`))
$(`#${post.id}`).append($(`<button type text class="comment"  ">Comment</button>`))
$(`#${post.id}`).append($(`<div>  </div>`))
}
}

  return {
    renderPostsk : renderPosts,
   
  }

}