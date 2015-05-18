"use strict";

exports.__esModule = true;

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { "default": obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _CreatePost = require("./CreatePost.js");

var _CreatePost2 = _interopRequireDefault(_CreatePost);

var _PostCreated = require("./PostCreated.js");

var _PostCreated2 = _interopRequireDefault(_PostCreated);

var Post = (function () {
	function Post() {
		_classCallCheck(this, Post);

		this.title = "";
	}

	Post.prototype.ApplyCommand = function ApplyCommand(command) {
		if (typeof command === "CreatePost") {
			return new _PostCreated2["default"](command.postId, command.dateCreated);
		}
	};

	Post.prototype.ApplyEvent = function ApplyEvent(event) {
		if (typeof event === "PostCreated") {
			this.postId = event.postId;
			this.dateCreated = event.dateCreated;
		}
	};

	return Post;
})();

exports.Post = Post;
//# sourceMappingURL=../../domain/posts/Post.js.map