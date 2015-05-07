/// <reference path="../../../typings.jsd.d.js" />
"use strict";

var _Post = require("../../../src/domain/Post.js");

var assert = require("assert");

describe("some description", function () {
	it("some it", function () {
		var post = new _Post.Post();
		assert.equal(post.title, "");
		assert.equal(true, true);
	});
});

describe("Story is Write Po.js", function () {
	describe("In order to write and refine po.js. As a Blogger I want to edit dra.js of a Post.", function () {
		describe("With Scenario Create Post", function () {
			it("Given _ When a Post is Created Then it should appear in the list of Draft Po.js AND with the Date/Time it was created AND it should not be seen by Readers", function () {});
		});
		describe("With Scenario Edit Post", function () {
			it("Given a Draft Post When the Post is edited Then the post should be updated with then the new conte.js AND with the Date/Time it was edited AND it should not be seen by Readers", function () {});
		});
		describe("With Scenario Post Must Have Title", function () {
			it("Given _ When a Post is Created AND the Post has an empty Title Then a Post Must Have Title error is raised", function () {});
		});
		describe("With Scenario Post Must Have a unique URL based on Title", function () {
			it("Given _ When a Post is Created Then the URL for the Post should contain the Title With Scenario Two Po.js with the same Title Should Not Have a URL Clash", function () {});
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



	
Story is Related Po.js
In order to let Readers know that Po.js are related
As a Blogger
I want to select previous Po.js that are related.
With Scenario Add Related Post
Given two existing Po.js
When one Post is Marked as Related to the other
Then the Po.js should appear in each others list of related po.js
With Scenario Remove Related Post
Given two Po.js that are Related
When one Post has the Relationship Removed
Then the Po.js should not appear in each others list of related po.js

Story is Pictures in Po.js
In order to include Pictures in po.js.
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

Story is Publish Po.js
In order to make the current draft of the Post available to Readers.
As a Blogger
I want to publish Po.js.
With Scenario Publish Post
Given an unpublished Post
When the Post is Published
Then it should be available to Readers
AND with the date/time is was Published 
With Scenario Published Post Must Have a Subject
Given an unpublished Post
AND the Post has no Subje.js
When the Post is Published
Then a Post Must Have Subje.js error is raised.
With Scenario Published Post Must Have Content
Given an unpublished Post
AND the Post Content is empty
When the Post is Published
Then a Post Must Have Content error is raised.

Story is Edit Published Po.js
In order to make changes and leave Po.js in a state that Readers won’t see.
As a Blogger
I want to edit published Po.js as a draft
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
When a Reader is viewing Po.js
Then Advertising is shown

Story is Popular Po.js
In order to work out what most people read and perhaps create ideas for what to write more about.
As a Blogger
I want to see what the most popular po.js are.
With Scenario Record Popular Po.js
Given a Post
When a Reader Views that Post
Then the number of views for that Post should be incremented.
With Scenario Display Popular Po.js
Given a number of Po.js have been Viewed
When Popular Po.js are Shown
Then the Po.js with the most views should shown first

Story is Stop Spam Comme.js
In order to stop spam Comme.js
As a Blogger
I want to mark a Comment as spam and hide it from Readers
AND only allow comme.js that have passed a CAPTCHA
AND POSSIBLY moderate the comme.js
With Scenario Mark Comment As Spam
Given a Post with a Comment
When a Comment is Marked as Spam
Then the Comment is not displayed with the Post
With Scenario Pass a CAPTCHA to Post a Comment
Given a Post
When a Comment is Added
AND the CAPTCHA is not Passed
Then the Comment is Rejected
With Scenario Moderate Comme.js
Given a Post and Comme.js are to be Moderated
When a Comment is Added
AND the Comment isn't Approved
Then the Comment should not be shown
With Scenario Approve Comment
Given a Post with a Comment that isn't approved
When the Comment is Approved
Then the Comment should be Shown

Story is Comment Isn't Spam
In order to show Comme.js accidentally marked as spam.
As a Blogger
I want to unmark Comme.js as spam.
With Scenario Comment Isn't Spam
Given a Comment that is marked as Spam
When the Comment is Marked as Not Spam
Then the Comment should be shown
*/

//assert.fail();	

//assert.fail();

//assert.fail();

//assert.fail();

//assert.fail();