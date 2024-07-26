const express = require("express");
const app = express();
const addTwoNumbers = (n1, n2) => {
    return n1 + n2;
}
app.get("/addTwoNumber", (req, res) => {
    const n1 = parseInt(req.query.n1);
    const n2 = parseInt(req.query.n2);
    const result = addTwoNumbers(n1, n2);
    res.json({ statusCode: 200, data: result });
});

app.get("/", (req, res) => {
    const n1 = "<html><body><h1>Hi There - Task 2.2 Rest Api and Express</h1></body></html>";
    res.set('Content-Type', 'text/html');
    res.send(n1);
})
console.log(addTwoNumbers(19, 12));
const port = 3040;
app.listen(port, () => {
    console.log("Hello, server is running on this port " + port);
})
