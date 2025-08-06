const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.post("/blog", (req, res) => {
    console.log(req.body);
    let title = req.body.title;
    let description = req.body.description;
    console.log(title, description);
    res.json({
        success: true,
        message: "Blog added successfully",
    })
});
app.listen(3300, () => {
  console.log('Server is running on port 3300');
});