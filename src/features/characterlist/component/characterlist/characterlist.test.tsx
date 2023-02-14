import { render, screen } from "@testing-library/react";
import { CharacterList } from "./characterlist";

jest.mock("../character/character");

describe("Given a character list", () => {
  describe("when it is rendered", () => {
    test("then it should list items", () => {
      render(<CharacterList></CharacterList>);
      const elementNumber = screen.getAllByRole("list");
      console.log(elementNumber.length);
      expect(elementNumber.length).toBe(1);
    });
  });
});