import styled from "@emotion/styled"
import { CssVariables } from "styles/glob-styles"

export const InputColors = {
  color: CssVariables.Neutral400,
  placeholder: CssVariables.Neutral400,
  bg: CssVariables.Neutral800,
  border: CssVariables.Neutral700,
  error: CssVariables.Red400,
  focus: CssVariables.Teal600,
  hover: CssVariables.Teal900,
}

export const ComponentInput = styled.input`
  box-sizing: border-box;
  height: 40px;
  border-radius: inherit;
  width: 100%;
  padding: 14px 12px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: ${InputColors.color};
  background-color: ${InputColors.bg};
  outline: none;
  border: none;

  &::placeholder {
    color: ${InputColors.placeholder};
  }

  &[disabled="true"] {
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  &[type="number"] {
    -moz-appearance: textfield; /* Firefox */
    appearance: textfield;
  }

  /* &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${InputColors.color};
    -webkit-box-shadow: 0 0 0px 1000px ${InputColors.bg} inset;
    box-shadow: 0 0 0px 100px ${InputColors.bg} inset;
  } */
`

export const Input = styled.input`
  box-sizing: border-box;
  height: 56px;
  width: 200px;
  border-radius: 6px;
  padding: 8px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;

  border: none;
  background-color: ${CssVariables.Neutral900};
  border: 3px solid ${CssVariables.Neutral900};
  color: ${CssVariables.White};
  outline: none;

  transition: 0.4s ease-in-out;

  &::placeholder {
  }

  &[disabled="true"] {
    border-color: ${CssVariables.Neutral900};
    background-color: ${CssVariables.Neutral800};
  }

  &[error="true"] {
    border-color: ${InputColors.error};
  }

  &:hover {
    border-color: ${InputColors.hover};
  }

  &:focus {
    border-color: ${InputColors.focus};
  }

  /* &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${CssVariables.Neutral500};
    -webkit-box-shadow: 0 0 0px 1000px ${CssVariables.White} inset;
    box-shadow: 0 0 0px 1000px ${CssVariables.White} inset;
  } */
`
