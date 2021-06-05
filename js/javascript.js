let containerChange=()=>{
    sequence();
}


let sequence=()=> {
    driveElementOut().then(() => {
      return deleteElementCarsAndButton()
    });
  
}

let driveElementOut=()=>{

    return new Promise((resolve)=>{
        this.setTimeout(()=> {

            let myElement1 = document.getElementsByClassName('car1_animate');
            for(i = 0; i < myElement1.length; i++) {
                myElement1[i].style.animationName="driveCar1Out";
            }
            let myElement2 = document.getElementsByClassName('car2_animate');
            for(i = 0; i < myElement2.length; i++) {
                myElement2[i].style.animationName="driveCar2Out";
            }

          resolve()
        }, 100)
      })

}

let deleteElementCarsAndButton=()=>{

     let imageElements = document.getElementsByClassName("car");
     let buttonElements = document.getElementsByTagName("button");

    Array.from(imageElements).forEach(element => {
        element.parentNode.removeChild(element);
    });
    Array.from(buttonElements).forEach(element => {
        element.parentNode.removeChild(element);
    });
}

let sequence=()=> {
    driveElementOut().then(() => {
      return deleteElementCarsAndButton()
    });
  
}