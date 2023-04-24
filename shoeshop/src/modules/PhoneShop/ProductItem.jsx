import React, { Component } from 'react';
// export default class ProductItem extends Component {
// 	render() {
// 		const {productsData} = this.props;
// 		console.log(productsData);
// 		return (
// 			<div className='card'>
// 				<img src={productsData.image} alt='' />

// 				<div className='card-body'>
// 					<p>{productsData.name}</p>
// 					<p>${productsData.price.toLocaleString()}</p>
// 					<button className='btn btn-dark m-2' >
// 						<i class="fa-solid fa-cart-shopping"></i>
// 						Thêm giỏ hàng
// 					</button>
// 					<Modal/>

// 					{/* <button className='btn btn-info' onClick={handleShow}>
// 						Xem chi tiết
// 					</button> */}
// 				</div>
// 			</div>
// 		);
// 	}
// }
export default class ProductItem extends Component {
	render() {
		const { data, handleSeeDetails } = this.props;
		return (
			<div className='card col-4'>
			<img src={data.image} alt={data.name} />

			<div className='card-body m-5' >
				<p>{data.name}</p>
				<p>${data.price}</p>

				<button className='btn btn-success' onClick={handleSeeDetails}>
					Xem Chi Tiết
				</button>

				<button
					className='btn btn-info'
				>
						<i class="fa-solid fa-cart-shopping"></i>
						Thêm giỏ hàng
				</button>
			</div>
		</div>
		);
	}
}

