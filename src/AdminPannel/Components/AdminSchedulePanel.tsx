import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, message, Input,  Space } from 'antd';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    PlusOutlined
} from '@ant-design/icons';
import { RootState, AppDispatch } from '../../Store/Store';
import { ScheduleModel } from '../../Model/ScheduleModel';
import { getAllSchedules, addSchedule, updateSchedule, deleteSchedule } from '../../Slice/ScheduleSlice';


export function AdminSchedulePanel() {
    const dispatch = useDispatch<AppDispatch>();
    const schedules = useSelector((state: RootState) => state.schedule.schedule);

    // State for modals and filters
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [isAddModalVisible, setIsAddModalVisible] = useState(false);
    const [selectedSchedule, setSelectedSchedule] = useState<ScheduleModel | null>(null);
    const [newSchedule, setNewSchedule] = useState<Omit<ScheduleModel, 'scheduleId'>>({
        arrivalTime: '',
        departureTime: '',
        date: '',
        trainId: ''
    });
    const [searchText, setSearchText] = useState('');

    // Fetch schedules on component mount
    useEffect(() => {
        dispatch(getAllSchedules());
    }, [dispatch]);

    // Handle View Schedule Details
    const handleViewSchedule = (schedule: ScheduleModel) => {
        setSelectedSchedule(schedule);
        setIsViewModalVisible(true);
    };

    // Handle Edit Schedule
    const handleEditSchedule = (schedule: ScheduleModel) => {
        setSelectedSchedule(schedule);
        setIsEditModalVisible(true);
    };

    // Handle Delete Schedule
    const handleDeleteSchedule = (scheduleId: string) => {
        Modal.confirm({
            title: 'Are you sure you want to delete this schedule?',
            content: 'This action cannot be undone',
            onOk() {
                dispatch(deleteSchedule(scheduleId))
                    .then(() => {
                        message.success('Schedule deleted successfully');
                    })
                    .catch(() => {
                        message.error('Failed to delete schedule');
                    });
            }
        });
    };

    // Handle Add Schedule
    const handleAddSchedule = () => {
        dispatch(addSchedule(newSchedule))
            .then(() => {
                message.success('Schedule added successfully');
                setIsAddModalVisible(false);
                setNewSchedule({
                    arrivalTime: '',
                    departureTime: '',
                    date: '',
                    trainId: ''
                });
            })
            .catch(() => {
                message.error('Failed to add schedule');
            });
    };

    // Filter schedules
    const filteredSchedules = schedules.filter(schedule =>
        searchText === '' ||
        schedule.trainId.toLowerCase().includes(searchText.toLowerCase()) ||
        schedule.scheduleId.toLowerCase().includes(searchText.toLowerCase())
    );

    // Table Columns
    const columns = [
        {
            title: 'Schedule ID',
            dataIndex: 'scheduleId',
            key: 'scheduleId',
        },
        {
            title: 'Train ID',
            dataIndex: 'trainId',
            key: 'trainId',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (date: string) => new Date(date).toLocaleDateString()
        },
        {
            title: 'Departure Time',
            dataIndex: 'departureTime',
            key: 'departureTime',
        },
        {
            title: 'Arrival Time',
            dataIndex: 'arrivalTime',
            key: 'arrivalTime',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (schedule: ScheduleModel) => (
                <Space size="middle">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleViewSchedule(schedule)}
                    >
                        View
                    </Button>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEditSchedule(schedule)}
                    >
                        Edit
                    </Button>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDeleteSchedule(schedule.scheduleId)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="p-4 bg-white min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Admin Schedule Panel</h1>

            {/* Filters and Add Button */}
            <div className="mb-4 flex justify-between items-center">
                <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search schedules"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-1/3"
                />
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={() => setIsAddModalVisible(true)}
                >
                    Add Schedule
                </Button>
            </div>

            {/* Schedules Table */}
            <Table
                columns={columns}
                dataSource={filteredSchedules}
                rowKey="scheduleId"
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    className: "text-center"
                }}
                className="shadow-md rounded-lg overflow-hidden"
            />

            {/* View Schedule Modal */}
            <Modal
                title="Schedule Details"
                visible={isViewModalVisible}
                onCancel={() => setIsViewModalVisible(false)}
                footer={null}
            >
                {selectedSchedule && (
                    <div className="space-y-2">
                        <p><strong>Schedule ID:</strong> {selectedSchedule.scheduleId}</p>
                        <p><strong>Train ID:</strong> {selectedSchedule.trainId}</p>
                        <p><strong>Date:</strong> {new Date(selectedSchedule.date).toLocaleDateString()}</p>
                        <p><strong>Departure Time:</strong> {selectedSchedule.departureTime}</p>
                        <p><strong>Arrival Time:</strong> {selectedSchedule.arrivalTime}</p>
                    </div>
                )}
            </Modal>

            {/* Edit Schedule Modal */}
            <Modal
                title="Edit Schedule"
                visible={isEditModalVisible}
                onCancel={() => setIsEditModalVisible(false)}
                onOk={() => {
                    if (selectedSchedule) {
                        // @ts-ignore
                        dispatch(updateSchedule(selectedSchedule))
                            .then(() => {
                                message.success('Schedule updated successfully');
                                setIsEditModalVisible(false);
                            })
                            .catch(() => {
                                message.error('Failed to update schedule');
                            });
                    }
                }}
            >
                {selectedSchedule && (
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Train ID</label>
                            <Input
                                value={selectedSchedule.trainId}
                                onChange={(e) => setSelectedSchedule({
                                    ...selectedSchedule,
                                    trainId: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Date</label>
                            <Input
                                type="date"
                                value={selectedSchedule.date}
                                onChange={(e) => setSelectedSchedule({
                                    ...selectedSchedule,
                                    date: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Departure Time</label>
                            <Input
                                type="time"
                                value={selectedSchedule.departureTime}
                                onChange={(e) => setSelectedSchedule({
                                    ...selectedSchedule,
                                    departureTime: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Arrival Time</label>
                            <Input
                                type="time"
                                value={selectedSchedule.arrivalTime}
                                onChange={(e) => setSelectedSchedule({
                                    ...selectedSchedule,
                                    arrivalTime: e.target.value
                                })}
                            />
                        </div>
                    </div>
                )}
            </Modal>

            {/* Add Schedule Modal */}
            <Modal
                title="Add New Schedule"
                visible={isAddModalVisible}
                onCancel={() => setIsAddModalVisible(false)}
                onOk={handleAddSchedule}
            >
                <div className="space-y-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Train ID</label>
                        <Input
                            value={newSchedule.trainId}
                            onChange={(e) => setNewSchedule({
                                ...newSchedule,
                                trainId: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Date</label>
                        <Input
                            type="date"
                            value={newSchedule.date}
                            onChange={(e) => setNewSchedule({
                                ...newSchedule,
                                date: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Departure Time</label>
                        <Input
                            type="time"
                            value={newSchedule.departureTime}
                            onChange={(e) => setNewSchedule({
                                ...newSchedule,
                                departureTime: e.target.value
                            })}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-600">Arrival Time</label>
                        <Input
                            type="time"
                            value={newSchedule.arrivalTime}
                            onChange={(e) => setNewSchedule({
                                ...newSchedule,
                                arrivalTime: e.target.value
                            })}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}