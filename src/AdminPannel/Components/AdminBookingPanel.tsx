import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, message, Input, Select } from 'antd';
import {
    getAllBookings,
    updateBooking,
    deleteBooking
} from '../../Slice/BookingSlice';
import { RootState, AppDispatch } from '../../Store/Store';
import { BookingModel } from '../../Model/BookingModel';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined
} from '@ant-design/icons';

// Replace the previous CSS import with inline styles and Tailwind classes
const { Option } = Select;

export function AdminBookingPanel() {
    const dispatch = useDispatch<AppDispatch>();
    const bookings = useSelector((state: RootState) => state.booking.bookings);

    // State for modals and filters
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState<BookingModel | null>(null);
    const [searchText, setSearchText] = useState('');
    const [filterStatus, setFilterStatus] = useState<string | null>(null);

    // Fetch bookings on component mount
    useEffect(() => {
        dispatch(getAllBookings());
    }, [dispatch]);

    // Handle View Booking Details
    const handleViewBooking = (booking: BookingModel) => {
        setSelectedBooking(booking);
        setIsViewModalVisible(true);
    };

    // Handle Edit Booking
    const handleEditBooking = (booking: BookingModel) => {
        setSelectedBooking(booking);
        setIsEditModalVisible(true);
    };

    // Handle Delete Booking
    const handleDeleteBooking = (bookingId: string) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this booking?',
            content: 'This action cannot be undone',
            onOk() {
                dispatch(deleteBooking(bookingId))
                    .then(() => {
                        message.success('Booking deleted successfully');
                    })
                    .catch(() => {
                        message.error('Failed to delete booking');
                    });
            }
        });
    };

    // Filter bookings
    const filteredBookings = bookings.filter(booking =>
        (searchText === '' ||
            booking.arrivalStation.toLowerCase().includes(searchText.toLowerCase()) ||
            booking.departureStation.toLowerCase().includes(searchText.toLowerCase()) ||
            booking.bookingId.toLowerCase().includes(searchText.toLowerCase())
        ) &&
        (filterStatus === null || booking.passengerClass === filterStatus)
    );

    // Table Columns
    const columns = [
        {
            title: 'Booking ID',
            dataIndex: 'bookingId',
            key: 'bookingId',
        },
        {
            title: 'Travel Date',
            dataIndex: 'travelDate',
            key: 'travelDate',
            render: (date: Date) => new Date(date).toLocaleDateString()
        },
        {
            title: 'Departure Station',
            dataIndex: 'departureStation',
            key: 'departureStation',
        },
        {
            title: 'Arrival Station',
            dataIndex: 'arrivalStation',
            key: 'arrivalStation',
        },
        {
            title: 'Passenger Class',
            dataIndex: 'passengerClass',
            key: 'passengerClass',
        },
        {
            title: 'Seats',
            dataIndex: 'seats',
            key: 'seats',
        },
        {
            title: 'Train',
            dataIndex: 'trainList',
            key: 'Train'
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (booking: BookingModel) => (
                <div className="flex space-x-2">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleViewBooking(booking)}
                        className="flex items-center"
                    >
                        View
                    </Button>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEditBooking(booking)}
                        className="flex items-center"
                    >
                        Conform
                    </Button>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDeleteBooking(booking.bookingId)}
                        className="flex items-center"
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="p-4 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Admin Booking Panel</h1>

            {/* Filters */}
            <div className="mb-4 flex space-x-4 items-center">
                <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search bookings"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-1/3"
                />
                <Select
                    placeholder="Filter by Passenger Class"
                    style={{ width: 200 }}
                    allowClear
                    onChange={(value) => setFilterStatus(value)}
                    className="w-48"
                >
                    <Option value="First Class">First Class</Option>
                    <Option value="Second Class">Second Class</Option>
                    <Option value="Economy">Economy</Option>
                </Select>
            </div>

            {/* Bookings Table */}
            <Table
                columns={columns}
                dataSource={filteredBookings}
                rowKey="bookingId"
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    className: "text-center"
                }}
                className="shadow-md rounded-lg overflow-hidden"
            />

            {/* View Booking Modal */}
            <Modal
                title="Booking Details"
                visible={isViewModalVisible}
                onCancel={() => setIsViewModalVisible(false)}
                footer={null}
                className="booking-modal"
            >
                {selectedBooking && (
                    <div className="space-y-2">
                        <p><strong>Booking ID:</strong> {selectedBooking.bookingId}</p>
                        <p><strong>Booked Date:</strong> {new Date(selectedBooking.bookedDate).toLocaleDateString()}</p>
                        <p><strong>Travel Date:</strong> {new Date(selectedBooking.travelDate).toLocaleDateString()}</p>
                        <p><strong>Departure Station:</strong> {selectedBooking.departureStation}</p>
                        <p><strong>Arrival Station:</strong> {selectedBooking.arrivalStation}</p>
                        <p><strong>Passenger Class:</strong> {selectedBooking.passengerClass}</p>
                        <p><strong>Seats:</strong> {selectedBooking.seats}</p>
                        <p><strong>Trains:</strong> {selectedBooking.trainList.join(', ')}</p>
                    </div>
                )}
            </Modal>

            {/* Edit Booking Modal */}
            <Modal
                title="Edit Booking"
                visible={isEditModalVisible}
                onCancel={() => setIsEditModalVisible(false)}
                onOk={() => {
                    if (selectedBooking) {
                        dispatch(updateBooking(selectedBooking))
                            .then(() => {
                                message.success('Booking updated successfully');
                                setIsEditModalVisible(false);
                            })
                            .catch(() => {
                                message.error('Failed to update booking');
                            });
                    }
                }}
                className="booking-modal"
            >
                {selectedBooking && (
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Departure Station</label>
                            <Input
                                value={selectedBooking.departureStation}
                                onChange={(e) => setSelectedBooking({
                                    ...selectedBooking,
                                    departureStation: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Arrival Station</label>
                            <Input
                                value={selectedBooking.arrivalStation}
                                onChange={(e) => setSelectedBooking({
                                    ...selectedBooking,
                                    arrivalStation: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Passenger Class</label>
                            <Select
                                style={{ width: '100%' }}
                                value={selectedBooking.passengerClass}
                                onChange={(value) => setSelectedBooking({
                                    ...selectedBooking,
                                    passengerClass: value
                                })}
                            >
                                <Option value="First Class">First Class</Option>
                                <Option value="Second Class">Second Class</Option>
                                <Option value="Economy">Economy</Option>
                            </Select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Number of Seats</label>
                            <Input
                                type="number"
                                value={selectedBooking.seats}
                                onChange={(e) => setSelectedBooking({
                                    ...selectedBooking,
                                    seats: parseInt(e.target.value)
                                })}
                            />
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}