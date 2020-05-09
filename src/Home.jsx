import Link from "/components/Link.js";

export default () => {
  return (
    <div className="m-2">
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/hello/world">Hello World Link</Link>
        </li>
        <li>
          <Link href="/hello/you">Hello You Link</Link>
        </li>
      </ul>
    </div>
  );
};
