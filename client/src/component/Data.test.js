import React from "react"
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Data from './Data';




it("renders", () => {
    const { asFragment } = render(<Data text="Soccer"/>); 
    expect(asFragment()).toMatchSnapshot();
});

it('inserts text in div', () => {
    const {getByTestId, getByText} = render(<Data/>);
    expect(getByTestId("divtag")).toHaveTextContent('soccer');
    expect(getByText('soccer')).toHaveClass('fancy-div');
})
