import { render, screen } from "@testing-library/react";
import App from "./App";
import { FormRegister } from "./pages";

test("renders learn react link", () => {
    render(
        <App>
            <FormRegister />
        </App>
    );
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
