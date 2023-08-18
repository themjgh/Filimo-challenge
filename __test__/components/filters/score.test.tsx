import "@testing-library/jest-dom";
import { fireEvent, render, screen,act,waitFor } from "@testing-library/react";
import { describe } from "node:test";
import { ReduxProvider } from "@/redux/provider";
import ScoreFilter from "@/component/filterts/score";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });


describe("Score Filter", () => {
    
    it("render Genre filter", async () => {
        render(<ReduxProvider><ScoreFilter /></ReduxProvider>);
        expect(screen.getByTestId("score-sort-button")).toBeInTheDocument();
        act(() => {
            const sCoreButton = screen.getByTestId("score-sort-button");
            sCoreButton.click()
        })
        await waitFor(() => {
            expect(screen.getByTestId("desc-sort")).toBeInTheDocument();
            expect(screen.getByTestId("asc-sort")).toBeInTheDocument();
         
        }) 

      
    })

})