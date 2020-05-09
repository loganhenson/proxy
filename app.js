import Server from "https://gist.githubusercontent.com/loganhenson/2d807af7c2497603b88f775b3319e2d3/raw/79715ed269ce26f40e508e22c13bd1ca3a7ce978/framework.js";

Server({
  "/": () => {
    return {
      page: "Home",
      state: {},
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
