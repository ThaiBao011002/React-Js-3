import React, { Component } from 'react'

export default class ProducList extends Component {
  render() {
    const {ProductDetails} = this.props;
    const {id, name, alias, price, description, shortDescription, quantity,} = ProductDetails;
    return (
      <div>
        						<h2>Thông Tin Chi Tiết</h2>

        <table className='table'>
							<tbody>
                            <tr>
								<td>Mã sản phẩm</td>
								<td>{id}</td>
							</tr>
							<tr>
								<td>Tên loại giày</td>
								<td>${name}</td>
							</tr>
							<tr>
								<td>Tên rút gọn</td>
								<td>{alias}</td>
							</tr>
							<tr>
								<td>Giá của sản phẩm</td>
								<td>{price}</td>
							</tr>
							<tr>
								<td>Mô tả chi tiết</td>
								<td>{description}</td>
							</tr>
							<tr>
								<td>Mô tả ngắn gọn</td>
								<td>{shortDescription}</td>
							</tr>
                            <tr>
								<td>Số lượng còn lại</td>
								<td>{quantity}</td>
                            </tr>
                            </tbody>
						</table>
      </div>
    )
  }
}
