import fs from "fs";

export default function handler(req, res) {
  if (req.method === "POST") {
    let body = req.body;
    fs.readFile("contactData/data.json", "utf-8", (err, data) => {
      if (err) throw err;

      let contactData = JSON.parse(data);
      contactData.push(body);
      fs.writeFile(
        "contactData/data.json",
        JSON.stringify(contactData),
        (err) => {
          if (err) {
            res.status(500).send({ message: "Internal Server Error" });
          }

          let output = {
            message: "Data Added Successfully!",
          };
          res.status(200).send(output);
        }
      );
    });
  } else {
    res.status(200).json("Hello Browser!");
  }
}
