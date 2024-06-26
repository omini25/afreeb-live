import React from 'react';

const OrdersTable = ({ orders, isMobile }) => {


    return (
        <div className={activeIndex === 2 ? "tab-pane fade active show" : "tab-pane fade "} >
            <div className="card">
                <div className="card-header">
                    <h3 className="mb-0">Your Orders</h3>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders && orders.orders && Array.isArray(orders.orders) && orders.orders.map((order) => (
                                <tr
                                    key={order.id}
                                    style={
                                        isMobile
                                            ? {
                                                display: 'flex',
                                                flexDirection: 'row',
                                                borderTop: '1px solid #000',
                                                borderBottom: '1px solid #000'
                                            }
                                            : {
                                                borderTop: '1px solid #000',
                                                borderBottom: '1px solid #000'
                                            }
                                    }
                                >
                                    <td>#{order.id}</td>
                                    <td>{new Date(order.created_at).toLocaleDateString()}</td>
                                    <td>{order.status}</td>
                                    <td>${order.total_price} for {order.quantity} item(s)</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersTable;