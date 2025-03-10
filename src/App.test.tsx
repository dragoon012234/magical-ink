// Setup data
import { items } from "./types";
import "litegraph.js";
import "./litegraph";
import "./starter";

test("renders learn react link", () => {
  // render(<App />);
  // const linkElement = screen.getByText(/Hello world!/i);
  // expect(linkElement).toBeInTheDocument();
});

test("Setup data correct", () => {
  for (const item of items) {
    expect(item.node).toBeDefined();
    expect(item.layer).toBeGreaterThan(0);
  }
});
