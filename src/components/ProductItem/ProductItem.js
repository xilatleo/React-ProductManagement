import React, { Component } from "react";

export class ProductItem extends Component {
  render() {
    return (
      <tr>
                <td>1</td>
                <td>1</td>
                <td>IPhone 6 Plus</td>
                <td>500</td>
                <td>
                  <span className="label label-warning">Instock</span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginRight: 10 }}
                  >
                    Edit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                </td>
              </tr>
    );
  }
}

export default ProductItem;
