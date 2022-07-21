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
     let postId = $(this).closest(".posts").find(".post").data().id
     console.log(postId)
    tweeter.removePostK(postId) 
    renderer.renderPostsk(tweeter.getPostsK())
}

const comment = function () {
  const value =  $(this).find("#input-comment").val();//$("#input-comment").val()
   tweeter.addCommentk(value) 
   renderer.renderPostsk(tweeter.getPostsK())
}
$("body").on("click", "#post",post());
$("body").on("click", ".delete",deletePost());
$("body").on("click", ".comments",comment());