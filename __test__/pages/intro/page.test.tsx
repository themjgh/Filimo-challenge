
import "@testing-library/jest-dom";
import { fireEvent, render, screen,waitFor, act } from "@testing-library/react";
import { describe } from "node:test";
import IntroPage from "@/app/page";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from 'react'
import { NextRouter, useRouter } from 'next/router'

jest.mock('next/router', () => ({
  useRouter(){
    return {
      route: '/home',
      pathname: '',
      query: '',
      asPath: "/home",
      push:jest.fn(),
    }
  }
}))

jest.spyOn(require('next/router'),'useRouter')

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
  


describe("Intro Page", () => {

  (useRouter as jest.Mock).mockImplementation(() => ({   
    useRouter(){
      return {
        route: '/home',
        pathname: '',
        query: '',
        asPath: "/home",
        push:jest.fn(),
      }
    }
  }))
  it("render intro page", () => {
    render(<IntroPage />);
    expect(screen.getByTestId("filimo-brand")).toBeInTheDocument();
    expect(screen.getByTestId("left-stars")).toBeInTheDocument();
    expect(screen.getByTestId("right-stars")).toBeInTheDocument();
    expect(screen.getByTestId("right-stars")).toBeInTheDocument();
    expect(screen.getByTestId("start-tour-button")).toBeInTheDocument();
  })
  
  // it("click button to transfer to home page", async() => {
  //   render(<IntroPage />);
  //   const startTourButton = screen.getByTestId("start-tour-button");
  //   const push = jest.fn();
  //    act(() => {
  //     startTourButton.click()
  //   })
   
  //   await waitFor(() => {
  //     expect(push).toBeCalledTimes(1);
  //   })
  // })

})