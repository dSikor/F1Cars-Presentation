var tabledata = [
    {id:1, name:"Oli Bob", team:"Red Bull Racing", dob:""},
    {id:2, name:"Mary May", team:"Mercedes-AMG Petronas Formula One Team", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", team:"Scuderia Ferrari Mission Winnow", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", team:"McLaren F1 Team", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", team:"Williams Racing", col:"yellow", dob:"31/01/1999"},
];

var table = new Tabulator("#result", {
    height:"150px",
    data:tabledata,
    layout:"fitColumns",
    columns:[
    {title:"Miejsce", field:"id",hozAlign:"center"},
    {title:"Kierowca", field:"name", hozAlign:"center", sorter:"number"},
    {title:"Zespół", field:"team", hozAlign:"center", sorter:"number"},
    ],
});

let containerChange=()=>{
    sequence();
}


let sequence=()=> {
    driveElementOut().then(() => {
      return deleteElementCarsAndButton()
    }).then(() => {
        return showLastResults()
    })
  
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

    return new Promise((resolve)=>{

        let imageElements = document.getElementsByClassName("car");
        let buttonElements = document.getElementsByTagName("button");

        this.setTimeout(()=> {

            Array.from(imageElements).forEach(element => {
                element.parentNode.removeChild(element);
            });
            Array.from(buttonElements).forEach(element => {
                element.parentNode.removeChild(element);
            });
        

          resolve()
        }, 2000)
      })






}
let showLastResults=()=>{
    let results = document.getElementsByClassName('container__results');
    for(i = 0; i < results.length; i++) {
        results[i].style.display="block";
    }

}
