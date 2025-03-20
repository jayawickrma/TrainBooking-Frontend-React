import GalleyCOmponent from "../Components/GalleyCOmponent.tsx";
import img1 from "../assets/img_1.png"
import img2 from "../assets/img_2.png"
import img3 from "../assets/img_3.png"
import img4 from "../assets/img_4.png"
import img5 from "../assets/img_5.png"
import img6 from "../assets/img_6.png"
export function Gallery(){
    const trainImages = [
        {
            id: "1",
            src: img1,
            alt: "Orange train on tracks with lush greenery"
        },
        {
            id: "2",
            src: img2,
            alt: "Railway track with sunrise over mountains"
        },
        {
            id: "3",
            src: img3,
            alt: "Red train crossing a bridge in mountains"
        },
        {
            id: "4",
            src: img4,
            alt: "Blue train passing by tea plantations"
        },
        {
            id: "5",
            src: img5,
            alt: "Train traveling through a gorge with river"
        },
        {
            id: "6",
            src: img6,
            alt: "Red train passing through countryside"
        }
    ];
    return(
        <>
               <GalleyCOmponent images ={trainImages}/>
        </>
    )
}