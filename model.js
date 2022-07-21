

const TweeterModule = function()
 {

 const posts =[
    {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]
 let postIdCounter = 3
 let commentIdCounter = 7
  
 const getPosts = function (){
    return posts
 }

 const addPost = function(text){
     posts.push({ id:"p"+ postIdCounter++ , text:text , comments:[] })
 }

 const removePost = function(postID){
 
 for (let index = 0; index < posts.length; index++) {
     if(posts[index].id === postID)
        posts.splice(index,1)
 }

}
 /*tweeter.addCommentk("Damn straight it is!", "p3")*/
 const addComment = function(postID,text){
    for (let post in posts) {
        if(posts[post].id === postID){ 
        posts[post].comments.push({id:"c" + commentIdCounter++,text:text})
   
    }}
 
}
/*tweeter.removeComment("p2", "c6")*/
 const removeComment = function ( postID , commentID){
    for(let post of posts) {
        if( post.id === postID)
        {   for(let comment in post.comments) {
                if(post.comments[comment].id === commentID)
                 post.comments.splice(comment,1)
        }

    }
 }
 }


  return {
   
    addPostK    : addPost ,
    getPostsK   : getPosts ,
    removePostK : removePost ,
    addCommentk   :  addComment ,
    removeCommentk : removeComment
    
  }

 }



