const tweeter =    TweeterModule()//Tweeter()
const renderer = Renderer()


renderer.renderPostsk(tweeter.getPostsK())



  const post = function () {
    const value =  $("#input").val()
    $("#input").empty()
     tweeter.addPostK(value) 
     renderer.renderPostsk(tweeter.getPostsK())
}

const deletePost =function (){
    // let postId = $(this).closest(".posts").find(".post").data().id
    let postId = $(this).closest(".post").data().id
     console.log(postId)
    tweeter.removePostK(postId) 
    renderer.renderPostsk(tweeter.getPostsK())
}
const deletecomment =function (){
  // let commentId = $(this).closest(".posts").find(".comments").data().id
  let commentId = $(this).closest(".comment").data().id
   console.log(commentId)
  tweeter.removeCommentk(commentId) 
  renderer.renderPostsk(tweeter.getPostsK())
}
/*const comment = function () {
  const value =  $(this).find("#input-comment").val();//$("#input-comment").val()
   tweeter.addCommentk(value) 
   renderer.renderPostsk(tweeter.getPostsK())
}*/

const comment = function () {
	let postId=$(this).closest('div').data().id
	console.log($(this).closest('div').data().id)
  const value =  $(this).closest('div').find('input').val();//$("#input-comment").val()
   tweeter.addCommentk(postId,value)
   renderer.renderPostsk(tweeter.getPostsK())
}
$("body").on("click", ".post",post);
$("body").on("click", ".delete",deletePost);
$("body").on("click", ".comments",comment);
$("body").on("click", ".delete-comment",deletecomment);

