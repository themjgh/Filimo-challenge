import "@testing-library/jest-dom";
import { fireEvent, render, screen,waitFor } from "@testing-library/react";
import { describe } from "node:test";

import GenreFilter from "@/component/filterts/genre";
import { ReduxProvider } from "@/redux/provider";
import { act } from "react-dom/test-utils";

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


describe("Genre Filter", () => {

    it("render Genre filter", async () => {
        render(<ReduxProvider><GenreFilter /></ReduxProvider>);
        expect(screen.getByTestId("genre-button")).toBeInTheDocument();
        act(() => {
            const genreButton = screen.getByTestId("genre-button");
            genreButton.click()
        })
        await waitFor(() => {
            expect(screen.getByTestId("drama-option")).toBeInTheDocument();
            expect(screen.getByTestId("comedy-option")).toBeInTheDocument();
            expect(screen.getByTestId("scifi-option")).toBeInTheDocument();
            expect(screen.getByTestId("action-option")).toBeInTheDocument();
            expect(screen.getByTestId("genre-button")).toBeInTheDocument();
        }) 

      
    })
    
    
})