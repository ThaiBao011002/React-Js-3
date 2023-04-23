import React, { Component } from 'react';

export default class ProductItem extends Component {
	render() {
		const { productsData } = this.props;
		return (
			<div className='card'>
				<img src={productsData.image} alt='' />

				<div className='card-body'>
					<p>{productsData.name}</p>
					<p>${productsData.price.toLocaleString()}</p>
					{/* <button className='btn btn-dark' data-toggle="modal" data-target="#exampleModalCenter" onClick={handleSeeDetails}>
						Xem chi tiết
					</button> */}
				</div>
			</div>
		);
	}
}

