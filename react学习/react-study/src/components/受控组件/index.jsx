import React, { PureComponent } from "react";

export default class index extends PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: "chenlei",
      checkBoxOptions: [
        {
          name: "裴秀智",
          value: "1",
          isChecked: false,
        },
        {
          name: "iu",
          value: 2,
          isChecked: false,
        },
      ],
    };
  }
  changeInput(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  changeBox(e, index) {
    const checkBoxOptions = [...this.state.checkBoxOptions];
    checkBoxOptions[index].isChecked = e.target.checked;
    this.setState({
      checkBoxOptions,
    });
  }
  render() {
    const { inputValue, checkBoxOptions } = this.state;
    return (
      <div>
        {inputValue}
        <input value={inputValue} onChange={(e) => this.changeInput(e)} />

        <div>
          {checkBoxOptions.map((item, index) => {
            return (
              <div>
                {item.name}
                <input
                  key={item.value}
                  type="checkbox"
                  value={item.value}
                  checked={item.isChecked}
                  name={item.name}
                  onChange={(e) => this.changeBox(e, index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
