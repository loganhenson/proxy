// import Server from "https://gist.githubusercontent.com/loganhenson/2d807af7c2497603b88f775b3319e2d3/raw/95aa6f7449ab757dce21de43b81338c32bff71ac/framework.js";
import Server from "./framework.js";

Server({
  "/": () => {
    return {
      page: "Home",
    };
  },
  "/hello/:name": ({ name }) => {
    return {
      page: "Hello",
      state: {
        name: name,
      },
    };
  },
});
