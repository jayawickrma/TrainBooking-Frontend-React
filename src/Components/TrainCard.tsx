import TrainModel from "../Model/TrainModel.ts"
function CropCard({train}: {train: TrainModel}) {

    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                <div className="bg-gray-800 text-white border border-gray-400 w-[310px] rounded-md overflow-hidden">
                    <img
                        src={train.trainImage ? `data:image/png;base64,${train.trainImage}` : undefined}
                        alt="Crop Image"
                        className="w-full h-[175px] object-cover"
                    />
                    <div className="p-4">
                        <h5 className="text-lg font-bold mb-2">{train.trainName}</h5>

                        <p className="text-sm mb-2">
                            <strong>Category:</strong> {train.route}
                        </p>
                        <p className="text-sm mb-2">
                            <strong>Crop Season:</strong> {train.capacity}
                        </p>
                        {/*<p className="text-sm mb-2">*/}
                        {/*    <strong>Field ID:</strong> {crop.crop_field_details}*/}
                        {/*</p>*/}
                    </div>
                </div>
            </div>


        </>
    )
}

export default CropCard;