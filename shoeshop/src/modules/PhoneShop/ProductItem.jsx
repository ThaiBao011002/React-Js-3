import React, { Component } from 'react';
import ModalDetailProduct from './ModalDetailProduct';

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
	state = {
		showModal: false
	};
	handleCloseModal = () => {
		this.setState({ showModal: false });
	};
	// có thể đặt tên lại cho ý nghĩa nha
	handleOpenModal = () => {
		this.setState({ showModal: true });
	};
	render() {
		const { productsData } = this.props;
		return (
			<div className="card">
				<img src={productsData.image} alt="" />

				<div className="card-body">
					<p>{productsData.name}</p>
					<p>${productsData.price.toLocaleString()}</p>
					<button
						className="btn btn-dark"
						data-toggle="modal"
						data-target="#exampleModalCenter"
						onClick={this.handleOpenModal}
					>
						Xem chi tiết
					</button>
				</div>
				{this.state.showModal && (
					<ModalDetailProduct onCloseModal={this.handleCloseModal} />
				)}
			</div>
		);
	}
}

