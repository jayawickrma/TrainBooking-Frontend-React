import  {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../Store/Store';
import {
    fetchAllPayments,
    deletePayment,
    setCurrentPayment,
    clearCurrentPayment
} from '../../Slice/PaymentSlice';
import { Table, Button, Space, Modal, Tag, message } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

export function AdminPaymentPanel() {
    const dispatch = useDispatch<AppDispatch>();
    const { payments, loading, error, currentPayment } = useSelector((state: RootState) => state.payment);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        dispatch(fetchAllPayments());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            message.error(error);
        }
    }, [error]);

    const columns = [
        {
            title: 'Payment ID',
            dataIndex: 'paymentId',
            key: 'paymentId',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (amount: string) => `$${amount}`
        },
        {
            title: 'Payment Date',
            dataIndex: 'paymentDate',
            key: 'paymentDate',
            render: (date: string) => new Date(date).toLocaleDateString()
        },
        {
            title: 'Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            render: (status: string) => (
                <Tag color={status === 'completed' ? 'green' : status === 'pending' ? 'orange' : 'red'}>
                    {status.toUpperCase()}
                </Tag>
            )
        },
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
            key: 'bookingId',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (record: any) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => {
                            dispatch(setCurrentPayment(record));
                            setIsModalVisible(true);
                        }}
                    >
                        View
                    </Button>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => {
                            // Implement edit functionality
                            dispatch(setCurrentPayment(record));
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => {
                            Modal.confirm({
                                title: 'Confirm Delete',
                                content: 'Are you sure you want to delete this payment?',
                                onOk: () => dispatch(deletePayment(record.paymentId))
                            });
                        }}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">Payment Management</h1>

            <Table
                columns={columns}
                dataSource={payments}
                rowKey="paymentId"
                loading={loading}
                bordered
                className="shadow-md"
            />

            {/* Payment Detail Modal */}
            <Modal
                title="Payment Details"
                visible={isModalVisible}
                onCancel={() => {
                    setIsModalVisible(false);
                    dispatch(clearCurrentPayment());
                }}
                footer={null}
            >
                {currentPayment && (
                    <div className="space-y-4">
                        <div>
                            <strong>Payment ID:</strong> {currentPayment.paymentId}
                        </div>
                        <div>
                            <strong>Amount:</strong> ${currentPayment.amount}
                        </div>
                        <div>
                            <strong>Date:</strong> {new Date(currentPayment.paymentDate).toLocaleString()}
                        </div>
                        <div>
                            <strong>Status:</strong>
                            <Tag color={currentPayment.paymentStatus === 'completed' ? 'green' : 'orange'} className="ml-2">
                                {currentPayment.paymentStatus.toUpperCase()}
                            </Tag>
                        </div>
                        <div>
                            <strong>Booking ID:</strong> {currentPayment.bookingId}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}