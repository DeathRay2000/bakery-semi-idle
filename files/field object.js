function crop(name, time, yield, value){
    this.name = name
    this.time = time
    this.yield = yield
    this.value = value
    this.amount = 1
}

 function field(crop) {
    plots = document.getElementById('plots')
    console.log(plots)
    this.fieldElement = document.createElement('div', classname = 'field')
    this.fieldElement.innerText = 'Not In Use'
    this.crop = null

    this.plant = function(croplist){
        let plantSelection = document.getElementById('plantselection')
        for (let i = 0; i < croplist.length; i++ ){
            
            let button = document.createElement(button)
            button.innerText= croplist[i].name
            button.onclick = grow(croplist[i])
            plantSelection.append(button)

        }

    }
    
    this.grow = function(crop){
        
        this.crop = crop
        crop.amount = crop.amount - 1
        timeLeft = setInterval(crop.time * 1000)
        this.fieldElement.innerText = crop.name + 'growing'
        if(timeLeft == 0){
            onclick = this.harvest(crop)
            this.FieldElement.innerText= 'Ready to harvest'
        }

    }
    this.harvest = function(crop){
        crop.amount += crop.yield
        this.crop = null
    }

    plots.append(fieldElement)

}

let field1 = new field()

const wheat = new crop('wheat', 30, 3, 5)
const sugarcane = new crop('sugarcane', 60, 4, 10)
croplist = [wheat, sugarcane]