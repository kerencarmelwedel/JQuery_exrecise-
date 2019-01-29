 fetch("http://localhost:3000/post", {
	headers: {
		"Content-Type": "application/json"
	},
})
	.then(res => res.json())
	.then(posts => {
        
        for (post of posts) {
            createElemFromPost(post)
            
        }
        $( "#posts-container" ).accordion({
          header: "> div > h3",
              collapsible: true,
              active: 2
        });
        $("#posts-container").accordion("refresh"); 

	})
	.catch(reason => console.log("rendering error", reason.message));
{
	const $postTemplate = document.querySelector("#post-template");
	const $postsContainer= document.querySelector("#posts-container");
	
  	document.querySelector(".invisible").classList.remove("invisible");

	function createElemFromPost(rawPost) {
		const $currPost = $postTemplate.cloneNode(true);
        $currPost.querySelector(".user-post-title").innerText = rawPost.title;
        $currPost.querySelector(".post-content").innerText = rawPost.content;
		$currPost.querySelector(".poster").innerText = rawPost.poster;
		$currPost.id = "user-post-id" + rawPost.id;
        $postsContainer.append($currPost); 
        $("#posts-container").sortable();
    }
}