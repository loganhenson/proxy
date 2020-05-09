import Link from "/components/Link.js";

export default ({ name }) => {
  return (
    <div className="m-2">
      <div>Hello, {name}</div>
      <ul>
        <li>
          <Link href="/">Home Link</Link>
        </li>
      </ul>
    </div>
  );
};
