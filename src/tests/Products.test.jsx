
import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import Products from "../pages/ProductList"

test("renders products page", () => {
  render(
    <BrowserRouter>
      <Products />
    </BrowserRouter>
  )

  expect(
    screen.getByText(/product showcase/i)
  ).toBeInTheDocument()
})