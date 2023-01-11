import React, { Component } from "react";

export default class Grid extends Component {
  toCssClass(numbers) {
    const cols = numbers ? numbers.split(" ") : [];
    let cssClass = ''

    if (cols[0]) cssClass += `col-xs-${cols[0]}`
    if (cols[1]) cssClass += ` col-sm-${cols[1]}`
    if (cols[2]) cssClass += ` col-md-${cols[2]}`
    if (cols[3]) cssClass += ` col-lg-${cols[3]}`

    return cssClass
  }

  render() {
    const gridClass = this.toCssClass(this.props.cols || 12)
    return (
      <div className={gridClass}>
        {this.props.children}
      </div>
    )
  }
}
