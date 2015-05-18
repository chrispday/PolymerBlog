"use strict";

exports.__esModule = true;

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _PostCreated = require("./posts/PostCreated.js");

var Repository = (function () {
	function Repository(eventStore, draftPostStore, publishedPostStore) {
		_classCallCheck(this, Repository);

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

	Repository.prototype.SaveEvent = function SaveEvent(aggregateId, event, callback) {
		this.eventStore.insert({ aggregateId: aggregateId, event: event }, function (e) {
			return callback(e);
		});
		this.PublishEvent(event, function (e) {
			return callback(e);
		});
	};

	Repository.prototype.PublishEvent = function PublishEvent(event, callback) {
		if (event instanceof _PostCreated.PostCreated) {
			this.draftPostStore.insert({ postId: event.postId, dateCreated: event.dateCreated }, callback);
		}
	};

	Repository.prototype.DraftPosts = function DraftPosts(callback) {
		return this.draftPostStore.find({}, callback);
	};

	Repository.prototype.PublishedPosts = function PublishedPosts(callback) {
		return this.publishedPostStore.find({}, callback);
	};

	return Repository;
})();

exports.Repository = Repository;
//# sourceMappingURL=../domain/Repository.js.map