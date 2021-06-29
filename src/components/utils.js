import { v4 as uuidv4 } from 'uuid';
const Chillhop=()=>{
    return(
        [
            {
                name:"Bliss (A Felicidade)",
                artist:"Misha, Jussi Halme",
                image:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
                audio:"https://mp3.chillhop.com/serve.php/?mp3=17933",
                color:['#EE7E78','#292F47'],
                id:uuidv4(),
                active:true
            },
            
            {
                name:"greatefull",
                artist:"Jussi Halme",
                image:"https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
                audio:"https://mp3.chillhop.com/serve.php/?mp3=19058",
                color:['#EE7E78','#292F47'],
                id:uuidv4(),
                active:false
            },
            {
                name:"Kinship",
                artist:"Sleepy Fish, mommy",
                image:"https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
                audio:"https://mp3.chillhop.com/serve.php/?mp3=17931",
                color:['#EE7E78','#292F47'],
                id:uuidv4(),
                active:false
            },
            
        ]
    );
};
export default Chillhop;