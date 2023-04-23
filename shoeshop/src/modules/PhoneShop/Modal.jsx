import React, { Component } from 'react'
import ProducList from './ProductList'

export default class Modal extends Component {
    state = {
        showModal: false,
    };
    handleClose = () => {
        this.setState({ showMdodal: false });
    }
    handleShow = () => {
        this.setState({ showMdodal: true });
    }
    render() {
        const { productsData } = this.props;
        return (
            <Modal props show={this.state.showModal} onHide={this.handleClose}>
                <div className='row mt-5'>
                    <div className='col-3'>
                        <h2>{productsData.name}</h2>
                        <img
                            src={productsData.name}
                            alt=''
                            style={{
                                width: '100%',
                            }}
                        />
                    </div>
                    <div className='col-9'>
                        <ProducList
                            maSP={productsData.id}
                            img={productsData.image}
                        />


                    </div>
                </div>
            </Modal>

        )
    }
}


