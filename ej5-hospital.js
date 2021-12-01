"Use strict";

const hospitalAreas = [
    area1 = { 
        name: "pediatría",
        percentage: 42 
    },

    area2 = {   
        name: "emergencias",
        percentage: 37
            
    },

    area3 = {   name: "traumatología",
                percentage: 21
            },
]


function calculateBudget(totalBudget, areas) {
  
    let string= "";

    for (let i= 0; i < areas.length; i++) {

        let budget = (totalBudget * areas[i].percentage) / 100; 
        let areaName = areas[i].name;
        string += `-> El presupuesto para ${areaName} es de ${budget}$.\n`;
    }

    return string;


}


console.log(calculateBudget(1500000, hospitalAreas));