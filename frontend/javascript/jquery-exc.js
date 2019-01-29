class Post {
	constructor(id, title, poster, content) {
		this.id = id;
		this.title = title;
		this.poster = poster;
		this.content = content;
 		this.$el = null;
	}
	get title() {
		return this._title;
	}

	set title(newTitle) {
		this._title = newTitle;
		this.toHTML().querySelector("#user-post-title").innerText = this.title;
	}

	get poster() {
		return this._poster;
	}

	set poster(newPoster) {
		this._poster = newPoster;
		this.toHTML().querySelector("#poster").innerText = this.poster;
	}

	get content() {
		return this._content;
	}

	set content(newContent) {
		this._content = newContent;
		this.toHTML().querySelector("#post-content").innerText = this.content;
	}

	toHTML() {
		if (this.$el === null) {
			//	this.$el.id = `post-${this.login.uuid}`;
			//this.$el.querySelector(".user-img").src = this.picture.medium;
			this.$el.querySelector("#user-post-title").innerText = this.title;
			this.$el.querySelector("#poster").innerText = this.poster;
			this.$el.querySelector("#post-content").innerText = this.content;
			this.$el.querySelector("#user-post-id").innerText = this.id;
			
		}
		return this.$el;
	}

	static create(rawPost) {
		return post;
	}

}
const preparePostContainer = post => {
	const $post = post.toHTML();
	$postContainer.prepend($post); // Inject post element to dom
};

 
