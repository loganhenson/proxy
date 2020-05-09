export default ({ href, children }) => {
  const onClick = (e) => {
    e.preventDefault();
    visit(href);
  };
  return (
    <a
      href={href}
      className="text-blue-500 hover:text-blue-800 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </a>
  );
};
