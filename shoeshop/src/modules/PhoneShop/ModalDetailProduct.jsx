// import React, { Component } from 'react';
// import ProducList from './ProductList';
// export default class Modal extends Component {
//     state = {
//         showModal: false
//     };
//     handleModalOpen() {
//         this.setState({
//             showModal: true
//         });
//     }
//     handleModalClose() {
//         this.setState({
//             showModal: false
//         });
//     }
//     render() {
//         const {productsData} = this.props;
//         console.log(productsData);
//         return (
//             <div>
//                 <button onClick={this.handleModalOpen}>Open Modal</button>
//                 <Modal show={this.state.showModal} onHide={this.handleModalClose}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>Modal Title</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                     <div className='row mt-5'>
//                     <div className='col-3'>
//                         <h2>{productsData.name}</h2>
//                         <img
//                             src={productsData.name}
//                             alt=''
//                             style={{
//                                 width: '100%',
//                             }}
//                         />
//                     </div>
//                     <div className='col-9'>
//                         <ProducList
//                             Ma={productsData.id}
//                             img={productsData.image}
//                         />
//                     </div>
//                 </div>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <button onClick={this.handleModalClose}>Close Modal</button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>

//         )
//     }
// }
import React, { Component } from "react";

export default class ModalDetailProduct extends Component {
    render() {
        return (
            <Modal props show={this.showModal} onHide={this.props.onCloseModal}>
                {/* code content modal trong nay */}
            </Modal>
        );
    }
}




