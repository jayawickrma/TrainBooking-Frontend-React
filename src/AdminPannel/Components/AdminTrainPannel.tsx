import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Modal, message, Input, Upload } from 'antd';
import {
    getAllTrains
} from '../../Slice/TrainSlice'; // Adjust import path as needed
import { RootState, AppDispatch } from '../../Store/Store'; // Adjust import path as needed
import { TrainModel } from '../../Model/TrainModel'; // Adjust import path as needed
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    SearchOutlined,
    UploadOutlined
} from '@ant-design/icons';

export function AdminTrainPanel() {
    const dispatch = useDispatch<AppDispatch>();
    const trains = useSelector((state: RootState) => state.trains.train);

    // State for modals and filters
    const [isViewModalVisible, setIsViewModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false);
    const [selectedTrain, setSelectedTrain] = useState<TrainModel | null>(null);
    const [searchText, setSearchText] = useState('');

    // Fetch trains on component mount
    useEffect(() => {
        dispatch(getAllTrains());
    }, [dispatch]);

    // Handle View Train Details
    const handleViewTrain = (train: TrainModel) => {
        setSelectedTrain(train);
        setIsViewModalVisible(true);
    };

    // Handle Edit Train
    const handleEditTrain = (train: TrainModel) => {
        setSelectedTrain(train);
        setIsEditModalVisible(true);
    };

    // Handle Delete Train (Placeholder - implement actual delete logic)
    const handleDeleteTrain = () => {
        Modal.confirm({
            title: 'Are you sure you want to delete this train?',
            content: 'This action cannot be undone',
            onOk() {
                // Implement delete train logic
                message.success('Train deleted successfully');
            }
        });
    };

    // Filter trains
    const filteredTrains = trains.filter(train =>
        train.trainName.toLowerCase().includes(searchText.toLowerCase()) ||
        train.trainId.toLowerCase().includes(searchText.toLowerCase())
    );

    // Table Columns
    const columns = [
        {
            title: 'Train ID',
            dataIndex: 'trainId',
            key: 'trainId',
        },
        {
            title: 'Train Name',
            dataIndex: 'trainName',
            key: 'trainName',
        },
        {
            title: 'Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
        },
        {
            title: 'Route',
            dataIndex: 'route',
            key: 'route',
        },
        {
            title: 'Train Image',
            dataIndex: 'trainImage',
            key: 'trainImage',
            render: (image: string) => (
                image ? (
                    <img
                        src={image}
                        alt="Train"
                        className="w-16 h-16 object-cover rounded"
                    />
                ) : (
                    <span>No Image</span>
                )
            )
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (train: TrainModel) => (
                <div className="flex space-x-2">
                    <Button
                        icon={<EyeOutlined />}
                        onClick={() => handleViewTrain(train)}
                        className="flex items-center"
                    >
                        View
                    </Button>
                    <Button
                        icon={<EditOutlined />}
                        onClick={() => handleEditTrain(train)}
                        className="flex items-center"
                    >
                        Edit
                    </Button>
                    <Button
                        danger
                        icon={<DeleteOutlined />}
                        onClick={() => handleDeleteTrain()}
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
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Admin Train Panel</h1>

            {/* Filters */}
            <div className="mb-4 flex space-x-4 items-center">
                <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search trains by ID or Name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-1/3"
                />
            </div>

            {/* Trains Table */}
            <Table
                columns={columns}
                dataSource={filteredTrains}
                rowKey="trainId"
                pagination={{
                    pageSize: 10,
                    showSizeChanger: true,
                    className: "text-center"
                }}
                className="shadow-md rounded-lg overflow-hidden"
            />

            {/* View Train Modal */}
            <Modal
                title="Train Details"
                visible={isViewModalVisible}
                onCancel={() => setIsViewModalVisible(false)}
                footer={null}
                className="train-details-modal"
            >
                {selectedTrain && (
                    <div className="space-y-4">
                        <div className="flex justify-center mb-4">
                            {selectedTrain.trainImage ? (
                                <img
                                    src={selectedTrain.trainImage}
                                    alt="Train"
                                    className="w-48 h-48 object-cover rounded-lg shadow-md"
                                />
                            ) : (
                                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center rounded-lg">
                                    No Image Available
                                </div>
                            )}
                        </div>
                        <p><strong>Train ID:</strong> {selectedTrain.trainId}</p>
                        <p><strong>Train Name:</strong> {selectedTrain.trainName}</p>
                        <p><strong>Capacity:</strong> {selectedTrain.capacity}</p>
                        <p><strong>Route:</strong> {selectedTrain.route}</p>
                    </div>
                )}
            </Modal>

            {/* Edit Train Modal */}
            <Modal
                title="Edit Train"
                visible={isEditModalVisible}
                onCancel={() => setIsEditModalVisible(false)}
                onOk={() => {
                    // Implement train update logic
                    if (selectedTrain) {
                        message.success('Train updated successfully');
                        setIsEditModalVisible(false);
                    }
                }}
                className="train-edit-modal"
            >
                {selectedTrain && (
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Train ID</label>
                            <Input
                                value={selectedTrain.trainId}
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Train Name</label>
                            <Input
                                value={selectedTrain.trainName}
                                onChange={(e) => setSelectedTrain({
                                    ...selectedTrain,
                                    trainName: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Capacity</label>
                            <Input
                                value={selectedTrain.capacity}
                                onChange={(e) => setSelectedTrain({
                                    ...selectedTrain,
                                    capacity: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Route</label>
                            <Input
                                value={selectedTrain.route}
                                onChange={(e) => setSelectedTrain({
                                    ...selectedTrain,
                                    route: e.target.value
                                })}
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Train Image</label>
                            <Upload
                                name="trainImage"
                                listType="picture"
                                className="upload-list-inline"
                                maxCount={1}

                                // @ts-ignore
                                onChangeCapture={(info) => {
                                    if (info.file.status === 'done') {
                                        setSelectedTrain({
                                            ...selectedTrain,
                                            trainImage: URL.createObjectURL(info.file.originFileObj)
                                        });
                                    }
                                }}
                            >
                                <Button icon={<UploadOutlined />}>Upload Image</Button>
                            </Upload>
                            {selectedTrain.trainImage && (
                                <div className="mt-2">
                                    <img
                                        src={selectedTrain.trainImage}
                                        alt="Train"
                                        className="w-32 h-32 object-cover rounded mt-2"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}