import ButtonBox from "components/ButtonBox/ButtonBox";
import InputBox from "components/InputBox";
import React, { Component } from "react";
import DemoService from "services/DemoService";
import SimpleReactValidator from "simple-react-validator";
import logo from "../../assets/img/logo.png";
// --- imports above this line

const POST_MAX = 100;
// --- static, const, propTypes above this line
class View1 extends Component {
  /*
    -----
    Constructor:
    -----
  */
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      pageObj: {
        postHeading: "",
        postDescription: "",
      },
      showDialog: false,
      errorMessage: "",
    };
    this.init = this.init.bind(this);
    this.getPostList = this.getPostList.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.validate = this.validate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.enrichForCreate = this.enrichForCreate.bind(this);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
  }

  /*
    -----
    LifeCycle Methods: 
    -----
  */
  componentDidMount() {
    this.init();
  }

  componentDidUpdate(prevProps, newProps) {
    console.log(prevProps, newProps);
  }

  init() {
    this.getPostList();
  }

  /*
    -----
    Service Calls: For Getting Data from service/API
    -----
  */
  getPostList() {
    DemoService.getPostList()
      .then((res) => {
        console.log(res);
        if (res?.data?.length) {
          this.setState({
            postList: res.data,
          });
        } else {
          this.setState({
            postList: [],
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMessage: err?.response?.data?.message ?? "",
          postList: [],
        });
      });
  }

  /*
    -----
    Handlers: Event handler for onChange, onBlur etc
    -----
  */
  handleInputChange(e) {
    this.setState({
      pageObj: {
        ...this.state.pageObj,
        [e.target.name]: e.target.value,
      },
    });
  }

  /* 
    -----
    Validators:
    -----
  */
  validate(e) {
    this.validator.showMessageFor(e);
  }

  validateForm() {
    let isValid = this.validator.allValid();
    return isValid;
  }

  /* 
    -----
    Submit / Save Data Functions:
    -----
  */
  onSubmit() {
    //clear the error message
    if (this.validateForm()) {
      let enrichObj = this.enrichForCreate();
      return DemoService.save(enrichObj)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            // Remove alert and use toast message
            alert("Saved");
          } else {
            alert("error");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // Show error message
    }
  }

  /* 
    -----
    Helper Functions:
    -----
  */
  enrichForCreate() {
    let enrichedObj = {
      title: this.state.pageObj.postHeading,
      body: this.state.pageObj.postDescription,
    };
    return enrichedObj;
  }

  /* 
    -----
    Sectional Render Functions: For Sub components / section wise renders
    -----
  */
  renderTopCard() {
    return (
      <div className="">
        <div className="flex w-full justify-center mt-6 mb-6 ">
          <img className="h-64 w-auto shadow-lg " src={logo} alt="logo" />
        </div>
        <div className="flex w-full justify-center mt-6 mb-6 ">
          <h1 className="text-6xl sm:text-5xl xl:text-4xl font-bold text-gray-900 leading-tight">
            Hello!! This is Home - VIEW-1!
          </h1>
        </div>
        <div className="flex w-full justify-center mt-6 mb-6 ">
          <h2 className="text-indigo-500 text-2xl">
            Welcome to Viamagus' Kaiju React Boilerplate!
          </h2>
        </div>
        <div className="flex w-full justify-center mt-6 mb-6 ">
          <a
            href="#"
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 
            hover:bg-indigo-400 text-sm text-white uppercase tracking-wider font-semibold"
          >
            Book your escape
          </a>
        </div>
      </div>
    );
  }
  renderPostCard() {
    let postList = <></>;
    this.state.postList?.length > 0
      ? (postList = this.state.postList.map((data, index) => {
          return (
            <div className="border border-purple-900 text-left">
              <div className="text-sm">{data.title}</div>
            </div>
          );
        }))
      : (postList = <>No Post Found!!!</>);

    return postList;
  }

  /* 
    -----
    render: The Main of the class will write here
    -----
  */
  render() {
    return (
      <div>
        <div className="bg-gray-100 h-auto pt-2">{this.renderTopCard()}</div>
        <div className="bg-gray-100 h-auto pt-2 flex flex-row">{this.renderPostCard()}</div>
        <div className="w-1/2">
          <div>
            <InputBox
              label="Post Heading"
              name="postHeading"
              value={this.state.pageObj.postHeading}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <InputBox
              label="Post Description"
              name="postDescription"
              value={this.state.pageObj.postDescription}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <ButtonBox label={"Save"} onClickWithLoader={this.onSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default View1;
