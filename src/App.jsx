const { render } = require("react-dom");

const Test = () => {
  return <h1>Hello</h1>;
};

render(<Test />, document.getElementById("root"));
