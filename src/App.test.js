import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

//unit test, co jest prawdziwe, a co mockowane
it("should render without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render without crashing(with prop all=false)", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App all={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// it("should match snapshot", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchInlineSnapshot(`
//     <div
//       className="App"
//     >
//       elo: 
//       51.2718693963888
//     </div>
//   `);
// });
