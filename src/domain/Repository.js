import { PostCreated } from "./posts/PostCreated.js";

export class Repository {
	constructor (eventStore, draftPostStore, publishedPostStore) {
		if (eventStore === undefined || eventStore === null) {
			throw new Error("eventStore argument missing");
		}
		if (draftPostStore === undefined || draftPostStore === null) {
			throw new Error("draftPostStore argument missing");
		}
		if (publishedPostStore === undefined || publishedPostStore === null) {
			throw new Error("publishedPostStore argument missing");
		}

		this.eventStore = eventStore;
		this.draftPostStore = draftPostStore;
		this.publishedPostStore = publishedPostStore;
	}
	
	SaveEvent(aggregateId, event, callback) {
		this.eventStore.insert({aggregateId: aggregateId, event: event}, e => callback(e));
		this.PublishEvent(event, e => callback(e));
	}
	
	PublishEvent(event, callback){
		if (event instanceof PostCreated) {
			this.draftPostStore.insert({postId: event.postId, dateCreated: event.dateCreated }, callback);			
		}
	}
	
	DraftPosts(callback) {
		return this.draftPostStore.find({}, callback);
	}
	
	PublishedPosts(callback) {
		return this.publishedPostStore.find({}, callback);
	}
}