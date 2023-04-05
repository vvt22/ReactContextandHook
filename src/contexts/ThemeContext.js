import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  //Due to the async nature of setState,
  // it is not advisable to use this.state to get the previous state within setState.
  // Both prevState and props received by the updater function are guaranteed to be up-to-date.
  // The output of the updater is shallowly merged with prevState.
  // toggleTheme = () => {
  //   this.setState((prevState, props) => {
  //     return { isLightTheme: !prevState.isLightTheme };
  //   });
  // };use this one
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
