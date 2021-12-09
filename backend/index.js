const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const app = express();

app.get("/api/entreesdujour", cors({ origin: ["http://localhost:9000", "https://www.sandwichpouletmayonnaise.com"] }), (req, res, next) => {
    const db = new sqlite3.Database("c:/sqlite3/pouletmayo.db", sqlite3.OPEN_READONLY, (error) => {
        if (error) {
          // Cannot open database
          res.status(400).json({ error: error.message });
        } else {
          console.log("Connected to the SQLite database.");
        }
      });

    const sql = "SELECT * FROM ENTREES WHERE jour = strftime('%w','now');";

    db.all(sql, [], (err, rows) => {
        if (err) res.status(400).json({ error: err.message });
        res.status(200).json(rows);
        db.close();
    });
  });

// Server port
const HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log(
    "CORS-enabled web server listening on port %PORT%".replace(
      "%PORT%",
      HTTP_PORT
    )
  );
});