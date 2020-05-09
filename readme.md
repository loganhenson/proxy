## Install Deno
https://deno.land

## Install frontend dependencies
`npm install`

## Start frontend watcher (compiles .jsx in src/ to .js public/)
`npm run watch`

## Start Deno app (need to restart when making changes to app.js)
`npm run start`
> Open browser at http://localhost:3001

## Routing / Links

### Define your routes in `app.js`
- Add a file to `src/` like `src/Home.jsx`
- Start your jsx watcher (`npm run watch`)
- Add your route in `app.js` like so:
```jsx
import Server from "...";

Server({
  "/": () => {
    return {
      page: "Home",
    };
  },
})
```

### Defining routes with parameters 
```jsx
import Server from "...";

Server({
  "/hello/:name": ({ name }) => {
    return {
      page: "Hello",
      state: {
        name: name,
      },
    };
  },
})
```

### You may link to routes without full page loads by using the Link component (provided)
```jsx
import Link from "/components/Link.js";

export default () => {
  return (
    <div>
      <Link href="/hello/world">Hello World Link</Link>
    </div>
  );
};
```