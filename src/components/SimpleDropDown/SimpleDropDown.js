import PrimeReact from "primereact/components/api/PrimeReact";
import DomHandler from "primereact/components/utils/DomHandler";
import { Dropdown } from "primereact/dropdown";
import React, { Component } from "react";
import Label from "../Label";
import PropTypes from "prop-types";

class DropdownBox extends Dropdown {
  alignOverlay = () => {
    DomHandler.alignOverlay(
      this.overlayRef.current,
      this.input.parentElement,
      this.props.appendTo || PrimeReact.appendTo
    );
    if (this.overlayRef.current.style.transformOrigin === "center top") {
      this.overlayRef.current.style.marginTop = "3px";
    } else {
      this.overlayRef.current.style.marginTop = "-3px";
    }
  };
}
/**
 * @extends {React.Component<{value:string.isRequired, onChange:Function.isRequired, onBlur:Function, label:string, hideLabel:boolean, disableBottomMargin:boolean, options:array, optionLabel:string, optionValue:string, disabled:boolean, validation:boolean}>}
 */
class SimpleDropDown extends Component {
  getClassNames = () => {
    let className =
      " w-full transition duration-150 ease-out border border-inputBorderColour bg-white " +
      " focus:border-inputBorderColour focus:shadow-selected-shadow outline-none " +
      " placeholder-inputPlaceHolderTextColour text-left text-inputFontSize text-inputTextColour " +
      " rounded-inputBorderRadius h-inputHeight px-inputPaddingH py-2 leading-none ";
    if (this.props.disabled) {
      className =
        " w-full transition duration-150 ease-out border-0 " +
        " focus:border-inputBorderColour focus:shadow-selected-shadow outline-none bg-inputDisabledColour " +
        " placeholder-inputPlaceHolderTextColour text-left text-inputFontSize text-inputTextColour " +
        " rounded-inputBorderRadius h-inputHeight px-inputPaddingH py-2 leading-none ";
    }
    if (this.props.className) {
      className = className + " " + this.props.className;
    }
    return className;
  };
  getPanelClassNames = () => {
    let className =
      "text-xs bg-white text-inputTextColour border border-inputBorderColour  " + " py-2 px-5";
    return className;
  };
  render() {
    let className = this.getClassNames();
    let panelClassName = this.getPanelClassNames();
    const {
      inputId,
      label,
      hideLabel,
      disableBottomMargin,
      value,
      disabled,
      onChange,
      onBlur,
      options,
      optionLabel,
      optionValue,
      validation,
    } = this.props;
    return (
      <React.Fragment>
        <Label label={label} hideLabel={hideLabel} isInputLabel={true} />
        <DropdownBox
          inputId={inputId ? inputId : ""}
          className={className}
          appendTo={document.body}
          panelClassName={panelClassName}
          options={options}
          optionValue={optionValue}
          optionLabel={optionLabel}
          value={value}
          scrollHeight="150px"
          {...this.props}
          emptyMessage={"optionLabel Not Found"}
          onChange={(e) => {
            if (onChange) {
              onChange(e);
            }
          }}
          disabled={disabled}
        />
      </React.Fragment>
    );
  }
}
SimpleDropDown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  disableBottomMargin: PropTypes.bool,
  options: PropTypes.array,
  optionLabel: PropTypes.string,
  optionValue: PropTypes.string,
  disabled: PropTypes.bool,
  validation: PropTypes.bool,
};
export default SimpleDropDown;
