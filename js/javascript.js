

let driveElementOut=(callback)=>{

    console.log("ANIMATE");
    let myElement1 = document.getElementsByClassName('car1_image');
    for(i = 0; i < myElement1.length; i++) {
        myElement1[i].style.animationName="driveCar1Out";
    }
    let myElement2 = document.getElementsByClassName('car2_image');
    for(i = 0; i < myElement2.length; i++) {
        myElement2[i].style.animationName="driveCar2Out";
    }

    callback();
}
let deleteElementCarsAndButton=()=>{
    
    console.log("DELETE");
    let imageElements = document.getElementsByTagName("img");
    Array.from(imageElements).forEach(element => {
        element.parentNode.removeChild(element);
    });
    console.log(imageElements);
    
}

let containerChange=()=>{
    driveElementOut(deleteElementCarsAndButton);
    // deleteElementCarsAndButton();

}





