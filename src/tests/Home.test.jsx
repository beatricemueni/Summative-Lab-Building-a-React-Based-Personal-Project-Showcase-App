import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "../pages/Home"

test("renders home page", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  expect(screen.getByText(/home/i)).toBeInTheDocument()
})