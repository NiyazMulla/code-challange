import PropTypes from "prop-types";
import React, { Component } from "react";

/**
 * @extends {React.Component<{label:string.isRequired, hideLabel:boolean, disableBottomMargin:boolean, wrap:boolean}>}
 */
class Label extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, hideLabel, wrap, disableBottomMargin } = this.props;
    let marginClass = " mb-1 ";
    if (disableBottomMargin) {
      marginClass = "";
    }
    let truncate = " truncate ";
    if (wrap) {
      truncate = "";
    }
    let textLabel = label;
    if (label) {
      textLabel = label.replace("\n", "<br/>");
    }
    let textColor = " text-inputLabelColour ";
    let inputPaddingH = "";

    return (
      <React.Fragment>
        {label ? (
          <div
            className={`text-inputLabelFontSize ${textColor} text-left ${marginClass} ${truncate} ${inputPaddingH} `}
            dangerouslySetInnerHTML={{ __html: textLabel }}
          ></div>
        ) : hideLabel ? (
          ""
        ) : (
          <div className={`h-21px mb-1 `}></div>
        )}
      </React.Fragment>
    );
  }
}
Label.propTypes = {
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  disableBottomMargin: PropTypes.bool,
  wrap: PropTypes.bool,
};
export default Label;
