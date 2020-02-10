import React from 'react'

const encode = data => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class DevBurnoutSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname : "",
            lname : "",
            email : "",
            phone : "",
            ctcTime: "",
            howDidHear:"",
            profExp:"",
            howLong:"",
            why:"",
            time:"",
            commit:"",
            tL:"",
        };
    }
    handleSubmit = e => {
        fetch("/", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body: encode({ "form-name": "contact", ...this.state})
        });
        console.log("formdata", this.state)
        .then(()=>alert("Success"))
        .catch(error=>alert(error));
        e.preventDefault();
    };
    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    render() {
        const { fname, lname, email, phone, ctcTime, howDidHear, profExp, howLong, why, time, commit, tL } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                name="fname"
                value={fname}
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="lname"
                value={lname}
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="phone"
                value={phone}
                placeholder="Phone"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <input
                type="text"
                name="howDidHear"
                value={howDidHear}
                placeholder="How did you hear about us?"
                onChange={this.handleChange}
              />
            </p>
            <p>Best Time to Contact</p>
            <p>
              <input
                type="radio"
                name="ctcTime"
                value="morning"
                onChange={this.handleChange}
              />Morning
            </p>
            <p>
              <input
                type="radio"
                name="ctcTime"
                value="noon"
                onChange={this.handleChange}
              />Afternoon
            </p>
            <p>
              <input
                type="radio"
                name="ctcTime"
                value="eve"
                onChange={this.handleChange}
              />Evening
            </p>

            <p>Do you have any professional web development experience?</p>
            <p>
              <input
                type="radio"
                name="profExp"
                value='yes'
                placeholder="profExp"
                onChange={this.handleChange}
              />Yes
            </p>            <p>
              <input
                type="radio"
                name="profExp"
                value='no'
                placeholder="profExp"
                onChange={this.handleChange}
              />No
            </p>
            <p>If so, How Long?</p>
            <p>
              <input
                type="radio"
                name="howLong"
                value='<1'
                placeholder="howLong"
                onChange={this.handleChange}
              /> Less than 1 year
            </p>
            <p>
              <input
                type="radio"
                name="howLong"
                value='1-2'
                placeholder="howLong"
                onChange={this.handleChange}
              />1 - 2 Years
            </p>
            <p>
              <input
                type="radio"
                name="howLong"
                value='2+'
                placeholder="howLong"
                onChange={this.handleChange}
              /> 2 or more years
            </p>
<p>Are you interested in Day(4 week) or Evening(5 week)?</p>
            <p>
              <input
                type="radio"
                name="time"
                value="day"
                placeholder="time"
                onChange={this.handleChange}
              />Day
            </p>
            <p>
              <input
                type="radio"
                name="time"
                value="eve"
                placeholder="time"
                onChange={this.handleChange}
              />Evening
            </p>
            <p>Can you commit 40+ hours per week to class for four weeks?</p>
            <p>
              <input
                type="radio"
                name="commit"
                value="yes"
                placeholder="commit"
                onChange={this.handleChange}
              />Yes
            </p>
            <p>
              <input
                type="radio"
                name="commit"
                value="no"
                placeholder="commit"
                onChange={this.handleChange}
              />No
            </p>
            <p>Are you interested in being a TL? (Non professional experience required)</p>
            <p>
              <input
                type="radio"
                name="tL"
                value="yes"
                placeholder="tL"
                onChange={this.handleChange}
              />Yes
            </p>
            <p>
              <input
                type="radio"
                name="tL"
                value="no"
                placeholder="tL"
                onChange={this.handleChange}
              />No
            </p>
           
            <p>
              <input
                type="textarea"
                name="why"
                value={why}
                placeholder="Why are you interested in becoming a web developer?"
                onChange={this.handleChange}
              />
            </p>
            <p>
              <button type="submit">Send</button>
              <button type="reset">Reset</button>
            </p>
          </form>
        );
      }
    
}

export default DevBurnoutSignup