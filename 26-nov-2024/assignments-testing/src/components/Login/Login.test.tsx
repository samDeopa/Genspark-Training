import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  // 1. renders render component without crashing
  test("renders render component without crashing", () => {
    const { container } = render(<Login />);
    let inputElements = container.querySelectorAll("input");
    expect(inputElements.length).toBe(3);

    // expect(screen.getByText('User Login')).toBeInTheDocument();
  });

  // 2. Testing input elements --- get data from textbox
  test("should user id textbox value is empty", () => {
    const { container } = render(<Login />);
    let textElement = container.querySelector<HTMLInputElement>("#t1");
    expect(textElement?.value).toBe("");
  });

  // 3. Testing input elements --- set data to textbox
  test("should set the correct value to textbox", () => {
    const { container } = render(<Login />);
    let textElement = container.querySelector<HTMLInputElement>("#t1");
    fireEvent.change(textElement!, { target: { value: "Narasimha" } });
    expect(textElement?.value).toBe("Narasimha");
  });

  // 4.  Testing Login button click event
  test("should display valid result message for correct credentails", () => {
    const { container } = render(<Login />);

    let uidElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t1");
    let pwdElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t2");
    let loginButton: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "admin" } });
    fireEvent.change(pwdElement!, { target: { value: "admin123" } });
    fireEvent.click(loginButton!);

    expect(screen.getByText("Welcome to Admin")).toBeInTheDocument();
  });

  // 5.  Testing Login button click event
  test("should display invalid message for wrong credentails", () => {
    const { container } = render(<Login />);

    let uidElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t1");
    let pwdElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t2");
    let loginButton: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#b1");
    let paraElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#result");

    fireEvent.change(uidElement!, { target: { value: "hello" } });
    fireEvent.change(pwdElement!, { target: { value: "admin123" } });
    fireEvent.click(loginButton!);
    expect(
      screen.getByText(/Invalid User Id or Password/i)
    ).toBeInTheDocument();
  });

  // 6.  Empty Uid Field Check
  test("Should display an alert for empty UID input", async () => {
    const { container } = render(<Login />);

    let uidElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t1");
    let pwdElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t2");
    let loginButton: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "" } });
    fireEvent.change(pwdElement!, { target: { value: "password123" } });
    fireEvent.click(loginButton!);

    expect(screen.getByText(/Please Enter The UID/i)).toBeInTheDocument();
  });

  // 7.  Empty Uid password field Check
  test("Should display an message for empty Password input", async () => {
    const { container } = render(<Login />);

    let uidElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t1");
    let pwdElement: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#t2");
    let loginButton: HTMLInputElement | null =
      container.querySelector<HTMLInputElement>("#b1");

    fireEvent.change(uidElement!, { target: { value: "admin" } });
    fireEvent.change(pwdElement!, { target: { value: "" } });
    fireEvent.click(loginButton!);

    expect(
      screen.getByText(/Password Field cannot be empty!/i)
    ).toBeInTheDocument();
  });

  // 7.  Singup Link Check
  test("Check if SignUp link is present", () => {
    const signupLink = screen.queryByRole("link", { name: /SignUp/i });
    expect(signupLink).toBeInTheDocument();
  });
});
