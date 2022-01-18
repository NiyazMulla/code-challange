import { ButtonComponent as Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import React, { Component } from "react";

class ButtonBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoader: false,
    };
  }

  getClassNames() {
    let className = "border border-purple-900 bg-purple-900 text-base rounded-lg w-40 text-white";

    return className;
  }

  render() {
    let buttonType = this.props.buttonType;
    let className = this.getClassNames(buttonType);
    return (
      <div>
        {" "}
        <Button
          {...this.props}
          className={className}
          onClick={() => {
            if (this.props.onClick) {
              this.props.onClick();
            } else if (this.props.onClickWithLoader) {
              let res = this.props.onClickWithLoader();
              if (Promise.resolve(res) === res) {
                this.setState({ showLoader: true });
                res
                  .then(() => {
                    this.setState({ showLoader: false });
                  })
                  .catch(() => {
                    this.setState({ showLoader: false });
                  });
              }
            }
          }}
        >
          {this.props.showLoader || this.state.showLoader ? (
            <ProgressSpinner
              style={{
                width: "18px",
                height: "18px",
                position: "absolute",
                right: "10px",
              }}
              strokeWidth="10"
              fill="transparent"
              animationDuration="15s"
            />
          ) : (
            ""
          )}
        </Button>{" "}
      </div>
    );
  }
}
export default ButtonBox;
