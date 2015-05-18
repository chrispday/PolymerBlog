import CreatePost from "./CreatePost.js";
import PostCreated from "./PostCreated.js";

export class Post {
	constructor() {
		this.title = "";
	}
	
	ApplyCommand (command) {
		if (typeof(command) === "CreatePost") {
			return new PostCreated(command.postId, command.dateCreated);						
		}
	}
	
	ApplyEvent (event) {
		if (typeof(event) === "PostCreated") {
			this.postId = event.postId;
			this.dateCreated = event.dateCreated;
		}
	}
}