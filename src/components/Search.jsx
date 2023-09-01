import Fuse from "fuse.js";
import { useState } from "react";

// configs for fuse.js
// https://fusejs.io/api/options.html

const options = {
  keys: ["data.title", "data.description", "data.categories", "data.tags"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.5,
};

function Search({ searchList }) {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  // set a limit to the posts: 5
  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  return (
    <>
      <label>Search </label>
      <input
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search posts"
      />
      {query.length > 1 && (
        <p>
          Found {posts.length} {posts.length === 1 ? "result" : "results"} for '
          {query}'
        </p>
      )}
      <ul>
        {posts &&
          posts.map((post) => (
            <li>
              <a href={`/posts/${post.slug}`}>{post.data.title}</a>
            </li>
          ))}
      </ul>
    </>
  );
}

export default Search;
