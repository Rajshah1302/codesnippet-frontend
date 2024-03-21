import React from "react";
import axios from "axios"; // Import Axios
import SimpleReactValidator from "simple-react-validator";

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        username: "",
        language: "C++",
        stdin: "",
        sourceCode: "",
      },
    };
    this.validator = new SimpleReactValidator();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.formData);
    if (this.validator.allValid()) {
      axios
        .post(
          "http://localhost:5000/api/form-submissions",
          this.state.formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response.data); // Log the response from the backend
          // Reset the form after successful submission if needed
          this.setState({
            formData: {
              username: "",
              language: "C++",
              stdin: "",
              sourceCode: "",
            },
          });
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          // Handle error, display error message, etc.
        });
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
  };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      },
    }));
  };
  render() {
    const { formData } = this.state;
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100 bg-white">
          <div className="col-md-6 hover-div">
            <div className=" p-3 rounded border border-2 shadow">
              <h2 className="text-center m-0">Submit Code Snippet</h2>
              <p className="text-center ">Please enter your details</p>
              <form onSubmit={this.handleSubmit} noValidate className="my-5">
                <div className="mb-2">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Enter Username"
                    required
                  />
                  <span className="text-danger">
                    {this.validator.message(
                      "username",
                      formData.username,
                      "required"
                    )}
                  </span>
                </div>
                <div className="mb-2">
                  <label htmlFor="language" className="form-label">
                    Preferred Code Language
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={this.handleInput}
                    className="form-control"
                    required
                  >
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                  </select>
                  <span className="text-danger">
                    {this.validator.message(
                      "language",
                      formData.language,
                      "required"
                    )}
                  </span>
                </div>
                <div className="mb-2">
                  <label htmlFor="stdin" className="form-label">
                    Standard Input (stdin)
                  </label>
                  <textarea
                    name="stdin"
                    value={formData.stdin}
                    onChange={this.handleInput}
                    className="form-control"
                    placeholder="Enter Standard Input"
                    required
                  ></textarea>
                  <span className="text-danger">
                    {this.validator.message(
                      "stdin",
                      formData.stdin,
                      "required"
                    )}
                  </span>
                </div>
                <div className="mb-2">
                  <label htmlFor="sourceCode" className="form-label">
                    Source Code
                  </label>
                  <textarea
                    name="sourceCode"
                    value={formData.sourceCode}
                    onChange={this.handleInput}
                    className="form-control"
                    required
                  ></textarea>
                  <span className="text-danger">
                    {this.validator.message(
                      "sourceCode",
                      formData.sourceCode,
                      "required"
                    )}
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark me-2 w-100 my-1 rounded-pill"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Forms;
