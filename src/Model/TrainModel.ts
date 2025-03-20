class TrainModel{
    trainId:string;
    trainName:string;
    route:string;
    capacity:number;
    trainImage :string

    constructor(trainId:string,trainName:string,route:string,capacity:number,trainImage:string) {
        this.trainName =trainName;
        this.capacity =capacity;
        this.route =route;
        this.trainId =trainId;
        this.trainImage =trainImage
    }
}
export default TrainModel