import React, { Component } from "react";

export class ProductItem extends Component {
  onDelete = (id) => {
    if(confirm('Are you sure you want to delete this')){//eslint-disable-line
      this.props.onDelete(id)
    }
  }

  render() {
    var {product, index } = this.props
    var statusName = product.status ? 'Instock' : 'OutOfStock'
    var statusClass = product.status ? 'warning' : 'default'
    return (
      <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <span className={`label label-${statusClass}`}>
                    {statusName}
                  </span>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ marginRight: 10 }}
                  >
                    Edit
                  </button>
                  <button 
                  type="button" 
                  className="btn btn-danger" 
                  onClick={() => this.onDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
    );
  }
}

export default ProductItem;
