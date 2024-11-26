import ProductDetails from "./ProductDetails";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Tests for Product Detail Component", () => {
  test("Page Render", () => {
    render(<ProductDetails />);
    expect(screen.getByText("Enter Product Details")).toBeInTheDocument();
  });
  test("calculates total amount on form submit", () => {
    render(<ProductDetails />);

    const nameInput = screen.getByPlaceholderText(/Enter product name/i);
    const priceInput = screen.getByPlaceholderText(/Enter product price/i);
    const quantityInput = screen.getByPlaceholderText(/Enter quantity/i);
    const calculateButton = screen.getByText(/Calculate/i);

    fireEvent.change(nameInput, { target: { value: "Product A" } });
    fireEvent.change(priceInput, { target: { value: "100" } });
    fireEvent.change(quantityInput, { target: { value: "2" } });

    fireEvent.click(calculateButton);

    expect(screen.getByText(/The Total Amount is: 200/i)).toBeInTheDocument();
  });

  test("calculates total amount using hyperlink", () => {
    render(<ProductDetails />);

    const priceInput = screen.getByPlaceholderText(/Enter product price/i);
    const quantityInput = screen.getByPlaceholderText(/Enter quantity/i);
    const hyperlink = screen.getByText(/Get Total Amount/i);

    fireEvent.change(priceInput, { target: { value: "50" } });
    fireEvent.change(quantityInput, { target: { value: "3" } });

    fireEvent.click(hyperlink);

    expect(screen.getByText(/The Total Amount is: 150/i)).toBeInTheDocument();
  });

  test("Check if one of the field is null", () => {
    render(<ProductDetails />);

    const priceInput = screen.getByPlaceholderText(/Enter product price/i);
    const quantityInput = screen.getByPlaceholderText(/Enter quantity/i);
    const hyperlink = screen.getByText(/Get Total Amount/i);

    fireEvent.change(priceInput, { target: { value: "50" } });

    fireEvent.click(hyperlink);

    expect(screen.queryByText(/The Total Amount is:/i)).toBeNull();
  });
});
