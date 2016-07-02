
var appRouter = function(app) {
 

app.get("/", function(req, res) {
    res.send("Hello World");
    console.log("Hello World");
});

app.get("/opencv", function(req, res) {

    res.send("Open Cloud Vision");
    console.log("Open Cloud Vision");
    res.end("");

});

app.get("/gcv", function(req, res) {
    res.send("Google Cloud Vision");
    console.log("Google Cloud Vision");
});


}

module.exports = appRouter;
