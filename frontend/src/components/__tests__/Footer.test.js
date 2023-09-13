// Write a test for the Footer.js component:
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../Footer";
import React from "react";
describe("Tests for footer component", () => {
	test("should render footer", () => {
		render(<Footer />);
		const footer = screen.getByText(/Copyright/);
		expect(footer).toBeVisible();
	});
});
