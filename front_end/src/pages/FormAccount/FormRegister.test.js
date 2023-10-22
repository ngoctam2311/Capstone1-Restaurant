import { render, screen, fireEvent } from "@testing-library/react";
import FormRegister, { isAccountValue, isEmailValid } from "./FormRegister";

// Test cases for utility functions
describe("isAccountValue", () => {
    test("returns true for empty value", () => {
        expect(isAccountValue(" ")).toBe(true);
    });

    test("returns true for whitespace value", () => {
        expect(isAccountValue(" ")).toBe(true);
    });

    test("returns false for non-empty value", () => {
        expect(isAccountValue("John Doe")).toBe(false);
    });
});

describe("isEmailValid", () => {
    test("returns true for valid email", () => {
        expect(isEmailValid("test@example.com")).toBe(true);
    });

    test("returns false for invalid email", () => {
        expect(isEmailValid("invalid-email")).toBe(false);
    });
});

// Test cases for FormRegister component
describe("FormRegister", () => {
    test("renders FormRegister component", () => {
        render(<FormRegister />);
        // Check if the component renders without crashing
        expect(screen.getByText("Đăng Ký Tài Khoản")).toBeInTheDocument();
    });

    test("displays error messages for empty fields on form submission", () => {
        render(<FormRegister />);
        fireEvent.click(screen.getByText("ĐĂNG KÝ"));
        expect(
            screen.getByText("Vui lòng nhập Họ Tên của bạn")
        ).toBeInTheDocument();
        // Add similar checks for other error messages
    });

    // Add more test cases as needed to cover different scenarios
});
