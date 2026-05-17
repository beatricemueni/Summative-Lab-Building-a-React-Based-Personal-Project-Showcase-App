import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Navbar from "../components/Navbar"

test("renders navbar links", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )

  expect(screen.getByText(/home/i)).toBeInTheDocument()
  expect(screen.getByText(/about/i)).toBeInTheDocument()
  expect(screen.getByText(/products/i)).toBeInTheDocument()
  expect(screen.getByText(/login/i)).toBeInTheDocument()
})