import fs from "fs";
import { promisify } from "util";

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

export default async function handler(req, res) {
  try {
    const files = await readdir("blogdata");
    const readFilesPromises = files.map((file) =>
      readFile(`blogdata/${file}`, "utf-8")
    );

    Promise.all(readFilesPromises).then((contents) => {
      const allBlogs = contents.map(JSON.parse);
      res.status(200).json(allBlogs);
    });
  } catch (err) {
    res.status(500).json({ error: "Error reading blog data" });
  }
}
