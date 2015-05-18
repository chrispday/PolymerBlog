/// <reference path="../typings/tsd.d.ts" />
"use strict";

var express = require("express");
var app = express();

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {});
//# sourceMappingURL=app.js.map