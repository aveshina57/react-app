import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", alamat: "", gender: "", skill: [] };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPick = this.onPick.bind(this);
  }

  onSubmit(event) {
    const { name, alamat, skill, gender } = this.state;
    alert(`${name} ${gender} ${alamat} ${skill} `);
    event.preventDefault();
    event.stopPropagation();
  }
  onChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onPick(event) {
    let skill = [...this.state.skill];
    let idx = skill.findIndex((elemen) => event.target.value === elemen);
    if (idx > 0) {
      skill = [...skill.slice(0, idx), ...skill.slice(idx + 1, skill.length)];
    } else if (idx === 0) {
      skill = [...skill.slice(idx + 1, skill.length)];
    } else {
      skill.push(event.target.value);
    }

    console.log(skill);
    this.setState({ skill });
  }

  render() {
    const { name, alamat, gender, skill } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Name: <br />
          <input
            style={{ width: 300 }}
            name="name"
            type="text"
            value={name}
            onChange={this.onChange}
          />
        </label>
        <br />

        <label>
          gender: <br />
          <select
            style={{ width: 300 }}
            name="gender"
            value={gender}
            onChange={this.onChange}
          >
            <option value="pria">pria</option>
            <option value="perempuan">perempuan</option>
          </select>
        </label>

        <br />

        <label>
          skill : <br />
          <select
            style={{ width: 300 }}
            multiple
            name="skill"
            value={[skill]}
            onChange={this.onPick}
          >
            <option value="gambar">gambar</option>
            <option value="menulis">menulis</option>
            <option value="komunikasi">komunikasi</option>
          </select>
        </label>

        <br />

        <label>
          Alamat <br />
          <textarea
            style={{ width: 300 }}
            name="alamat"
            type="text"
            value={alamat}
            onChange={this.onChange}
          />
        </label>
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
