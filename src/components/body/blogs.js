import { useEffect, useState } from "react";
import Axios from "axios";
import Blog from "./blog";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const mediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@azzeddineCH_";
  useEffect(() => {
    Axios.get(mediumURL).then((res) => {
      const posts = res.data.items.filter((item) => item.categories.length > 0);
      setBlogs(posts);
    });
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-blue-700 font-bold mt-24 mb-4">Blogs</h1>
      <hr />
      <div className="flex flex-row flex-wrap mt-12">
        {blogs.map((b) => (
          <div className="w-full xl:w-1/3">
            <Blog data={b} />
          </div>
        ))}
      </div>
    </div>
  );
}
