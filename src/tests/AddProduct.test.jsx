import { render, screen } from "@testing-library/react"
import { test, expect } from "vitest"
import { BrowserRouter } from "react-router-dom"
import AddProduct from "../pages/AddProduct"

test("submit button exists", () => {
  render(
    <BrowserRouter>
      <AddProduct />
    </BrowserRouter>
  )

  const button = screen.getByRole("button", {
    name: /add product/i,
  })

  expect(button).toBeInTheDocument()
})