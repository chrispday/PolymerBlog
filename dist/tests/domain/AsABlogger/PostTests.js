"use strict";

var _CreatePost = require("../../../src/domain/posts/CreatePost.js");

var _PostCreated = require("../../../src/domain/posts/PostCreated.js");

var _Post = require("../../../src/domain/posts/Post.js");

var _Repository = require("../../../src/domain/Repository.js");

var assert = require("assert");
var _ = require("lodash");
var DataStore = require("nedb");
var eventStore = new DataStore();
var draftPostStore = new DataStore();
var publishedPostStore = new DataStore();

var repository = new _Repository.Repository(eventStore, draftPostStore, publishedPostStore);

describe("Story is Write Posts", function () {
	describe("In order to write and refine posts. As a Blogger I want to edit drafts of a Post.", function () {
		describe("With Scenario Create Post", function () {
			it("Given _ When a Post is Created Then it should appear in the list of Draft Posts AND with the Date/Time it was created AND it should not be seen by Readers", function () {
				var postId = 1;
				var dateCreated = Date.now();
				var event = new _PostCreated.PostCreated(postId, dateCreated);
				repository.SaveEvent(postId, event, function (e) {});

				repository.DraftPosts(function (err, docs) {
					assert.equal(docs.length, 1);
					assert.equal(docs[0].dateCreated, dateCreated);
				});
				repository.PublishedPosts(function (err, docs) {
					console.log("err " + err);
					console.log("docs " + docs);
					var doc = _.find(docs, function (d) {
						return d.postId == postId;
					});
					assert.equal(doc === undefined);
				});
			});
		});
		describe("With Scenario Edit Post", function () {
			it("Given a Draft Post When the Post is edited Then the post should be updated with then the new contents AND with the Date/Time it was edited AND it should not be seen by Readers", function () {});
		});
		describe("With Scenario Post Must Have Title", function () {
			it("Given _ When a Post is Created AND the Post has an empty Title Then a Post Must Have Title error is raised", function () {});
		});
		describe("With Scenario Post Must Have a unique URL based on Title", function () {
			it("Given _ When a Post is Created Then the URL for the Post should contain the Title With Scenario Two Posts with the same Title Should Not Have a URL Clash", function () {});
		});
		describe("Given a Post with a Title", function () {
			it("When another Post is Saved with the same Title Then the URL for the Post should contain the Title AND it should not be the same as the URL for the existing Post", function () {});
		});
		/*describe("", function () {
  	it("", function(){
  		assert.fail();
  	});
  });*/
	});
});

/*



	
Story is Related Posts
In order to let Readers know that Posts are related
As a Blogger
I want to select previous Posts that are related.
With Scenario Add Related Post
Given two existing Posts
When one Post is Marked as Related to the other
Then the Posts should appear in each others list of related posts
With Scenario Remove Related Post
Given two Posts that are Related
When one Post has the Relationship Removed
Then the Posts should not appear in each others list of related posts

Story is Pictures in Posts
In order to include Pictures in posts.
As a Blogger
I want to upload pictures
AND add a link to the Picture in the Post.
With Scenario Upload Picture
Given a Picture has been uploaded
When a Link to a Picture is Added
Then a Link to where the picture was uploaded is in the list of Pictures

Story is Remove Uneeded Picture
In order to remove Pictures that aren't needed
As a Blogger
I want to delete Pictures
With Scenario Remove Picture
Given a Picture has been uploaded
When the Picture is Removed
Then it should not appear in the list of Pictures available

Story is Publish Posts
In order to make the current draft of the Post available to Readers.
As a Blogger
I want to publish Posts.
With Scenario Publish Post
Given an unpublished Post
When the Post is Published
Then it should be available to Readers
AND with the date/time is was Published 
With Scenario Published Post Must Have a Subject
Given an unpublished Post
AND the Post has no Subjects
When the Post is Published
Then a Post Must Have Subjects error is raised.
With Scenario Published Post Must Have Content
Given an unpublished Post
AND the Post Content is empty
When the Post is Published
Then a Post Must Have Content error is raised.

Story is Edit Published Posts
In order to make changes and leave Posts in a state that Readers won’t see.
As a Blogger
I want to edit published Posts as a draft
AND leave Reader’s seeing the unchanged Post
AND wait until I publish the draft to show the changed Post to Readers
AND it should appear with the original publish date
With Scenario Edit Published Post
Given a Published Post
When the Post is Edited
Then a Draft version if the Post is Created
AND the Draft is not seen by Readers
AND the Published version of the Post is seen by Readers
With Scenario Publish Updated Post
Given a Published Post that has been Edited
When the Post is Published
Then the updated version of the Post should be seen by Readers
AND the Published date/time should remain the same as when first published

Story is How A Reader Found Post (Refback)
In order to follow back to other pages to see what has been written about my Post.
As a Blogger
I want to know how a Reader found a Post.
With Scenario track referrer
Given a Post
When a Reader is Referred From Another Page
Then that Referrer is added to the Post

Story is Advertising
In order to recoup the cost of hosting.
As a Blogger
I want to host advertising.
With Scenario Display Advertising
Given Nothing
When a Reader is viewing Posts
Then Advertising is shown

Story is Popular Posts
In order to work out what most people read and perhaps create ideas for what to write more about.
As a Blogger
I want to see what the most popular posts are.
With Scenario Record Popular Posts
Given a Post
When a Reader Views that Post
Then the number of views for that Post should be incremented.
With Scenario Display Popular Posts
Given a number of Posts have been Viewed
When Popular Posts are Shown
Then the Posts with the most views should shown first

Story is Stop Spam Comments
In order to stop spam Comments
As a Blogger
I want to mark a Comment as spam and hide it from Readers
AND only allow comments that have passed a CAPTCHA
AND POSSIBLY moderate the comments
With Scenario Mark Comment As Spam
Given a Post with a Comment
When a Comment is Marked as Spam
Then the Comment is not displayed with the Post
With Scenario Pass a CAPTCHA to Post a Comment
Given a Post
When a Comment is Added
AND the CAPTCHA is not Passed
Then the Comment is Rejected
With Scenario Moderate Comments
Given a Post and Comments are to be Moderated
When a Comment is Added
AND the Comment isn't Approved
Then the Comment should not be shown
With Scenario Approve Comment
Given a Post with a Comment that isn't approved
When the Comment is Approved
Then the Comment should be Shown

Story is Comment Isn't Spam
In order to show Comments accidentally marked as spam.
As a Blogger
I want to unmark Comments as spam.
With Scenario Comment Isn't Spam
Given a Comment that is marked as Spam
When the Comment is Marked as Not Spam
Then the Comment should be shown
*/

//assert.fail();

//assert.fail();

//assert.fail();

//assert.fail();