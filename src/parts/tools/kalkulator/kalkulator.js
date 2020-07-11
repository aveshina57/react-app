import React from "react";
import "./style.scss";

class CurrencyInput extends React.Component {
  _handleChange = (e) => {
    this.props.onChangeCurrency(e.target.value);
  };

  render() {
    const { curLabel, currency } = this.props;

    return (
      <>
        {" "}
        <label>
          {curLabel === "g" ? "gram" : "Kilogram"} :{" "}
          <input type="number" value={currency} onChange={this._handleChange} />
        </label>{" "}
      </>
    );
  }
}

export default class kalkulator extends React.Component {
  constructor(props) {
    super(props);

    this.state = { gram: 0, kilogram: 0 };
  }

  onSubmit(e) {
    const { gram, kilogram } = this.state;
    e.preventDefault();

    alert(`gram: ${gram} dengan kilogram: ${kilogram}`);
  }

  onChangeGram = (gram) => {
    let kilogram = (parseFloat(gram) / 1000).toString();
    this.setState({ gram, kilogram });
  };

  onChangeKilogram = (kilogram) => {
    let gram = (parseFloat(kilogram) * 1000).toString();
    this.setState({ gram, kilogram });
  };

  render() {
    const { gram, kilogram } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <CurrencyInput
          curLabel="g"
          currency={gram}
          onChangeCurrency={this.onChangeGram}
        />

        <CurrencyInput
          curLabel="k"
          currency={kilogram}
          onChangeCurrency={this.onChangeKilogram}
        />

        <button type="submit">convert </button>
      </form>
    );
  }
}
