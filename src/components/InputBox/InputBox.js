import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";
import React, { Component } from "react";
import InputError from "../InputError/InputError";
import Label from "../Label/Label";

/**
 * @extends {React.Component<{value:string.isRequired, onChange:Function, onBlur:Function, label:string, hideLabel:boolean, disableBottomMargin:boolean, disabled:boolean, validation:boolean}>}
 */
class InputBox extends Component {
  getClassNames = () => {
    let className =
      " w-full transition duration-150 ease-out border border-inputBorderColour bg-white " +
      " focus:border-inputBorderColour focus:shadow-selected-shadow outline-none " +
      " placeholder-inputPlaceHolderTextColour text-left text-inputFontSize text-inputTextColour " +
      " rounded-inputBorderRadius h-inputHeight px-inputPaddingH py-inputPaddingV leading-none ";
    if (this.props.disabled) {
      className =
        " w-full transition duration-150 ease-out border-0 " +
        " focus:border-inputBorderColour focus:shadow-selected-shadow outline-none bg-inputDisabledColour " +
        " placeholder-inputPlaceHolderTextColour text-left text-inputFontSize text-inputTextColour " +
        " rounded-inputBorderRadius h-inputHeight px-inputPaddingH py-inputPaddingV leading-none ";
    }
    if (this.props.className) {
      className = className + " " + this.props.className;
    }
    return className;
  };
  render() {
    const { label, hideLabel, disableBottomMargin, value, disabled, onChange, onBlur, validation } =
      this.props;
    let className = this.getClassNames();
    return (
      <>
        <Label label={label} hideLabel={hideLabel} disableBottomMargin={disableBottomMargin} />
        <InputText
          {...this.props}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={className}
        />
        <InputError validation={validation} />
      </>
    );
  }
}
// link propTypes
InputBox.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  disableBottomMargin: PropTypes.bool,
  disabled: PropTypes.bool,
  validation: PropTypes.bool,
};
export default InputBox;
