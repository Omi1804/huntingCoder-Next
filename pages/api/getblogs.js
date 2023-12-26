// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// ----------> http://localhost:3000/api/getblogs?slug=blog1
import fs from "fs";

export default function handler(req, res) {
  try {
    fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data));
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
