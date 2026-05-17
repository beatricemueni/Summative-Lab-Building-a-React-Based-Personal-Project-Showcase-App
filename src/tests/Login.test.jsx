import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import Login from "../pages/Login"

test("renders login page", () => {
  render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )

  expect(
    screen.getByRole("heading", { name: /welcome to the login page/i })
  ).toBeInTheDocument()
})