const http = require("http");

PORT = 3000;

const friends = [
  { id: 1, name: "issac" },
  { id: 2, name: "issac2" },
];

const server = http.createServer((req, res) => {
  const items = req.url.split("/");
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (chunk) => {
      const friend = chunk.toString();
      console.log(friend);
      friends.push(JSON.parse(friend));
    });
    req.pipe(res);
  } else if (req.method === "GET" && items[1] === "friends") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    if (items.length == 3) {
      res.end(JSON.stringify(friends[items[2]]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "message") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Hello</li>");
    res.write("</ul>");
    res.write("</body>");
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
