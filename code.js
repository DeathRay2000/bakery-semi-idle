storage = window.localStorage
console.log('storage')
console.log(storage)
console.log(window.localStorage)

function getInventory(croplist, recipelist){
   // console.log('is thisworking?' + sell(wheat))
   // console.log(recipelist)
  
   list = document.getElementById('Inventory')
   list.querySelectorAll('*').forEach(n => n.remove());
   
   for(let i = 0; i < recipelist.length; i++){
          
           
           item = document.createElement('div', classname = 'item')
           item.innerText = recipelist[i].name + ': ' + JSON.stringify(recipelist[i].amount)
           console.log(item.innertext)
           list.append(item)
           sellbutton = document.createElement('button' )
           sellbutton.innerText = 'SELL'
           sellbutton.addEventListener('click',()=> sell(recipelist[i]), croplist, recipelist)
           list.append(sellbutton)
       }
   for(let i = 0; i < croplist.length; i++){
           item = document.createElement('div', classname = 'item')
           item.innerText = croplist[i].name + ': ' + JSON.stringify(croplist[i].amount)
           list.append(item)
           sellbutton = document.createElement('button' )
           sellbutton.innerText = 'SELL'
           sellbutton.addEventListener('click',() => sell(croplist[i], croplist, recipelist))
           list.append(sellbutton)
       }
}

function getGold(){
   let thegoldlist = document.getElementById('gold')
   thegoldlist.querySelectorAll('*').forEach(n => n.remove());
   let Gold = document.createElement('div')
   Gold.innerText = 'Gold: ' + JSON.stringify(gold)
   localStorage.setItem('gold', gold)
   
   thegoldlist.append(Gold)
   save(gold, exp, croplist, recipelist, numfields, numovens)
}

   
function getExp(){
   let theexplist = document.getElementById('exp')
   theexplist.querySelectorAll('*').forEach(n => n.remove());
   let Exp = document.createElement('div')
   Exp.innerText = 'EXP: ' + JSON.stringify(exp)
   localStorage.setItem('exp', exp)
   theexplist.append(Exp)
   save(gold, exp, croplist, recipelist, numfields, numovens)

}
function sell(crop, croplist, recipelist){
   
   amountsold = document.createElement('input')
   amountsold.setAttribute('type', 'number')
   
   newInventory = document.getElementById('Inventory')
   newInventory.append(amountsold)
   
   // console.log(amountsold)
   let sellAmount = amountsold.value
   // console.log(sellAmount)
   // console.log(list.hasChildNodes)
   // console.log(sellAmount)
   amountsold.addEventListener("keypress", function (e){
           sellAmount = amountsold.value
           
           if (e.key === "Enter"){
           if(sellAmount > crop.amount){
               alert('Insufficient ' + crop.name)
           }
           else{
               crop.amount = crop.amount - sellAmount
               // console.log(gold)
               // console.log(sellAmount)
               // console.log(crop.value)
               gold = gold + (sellAmount * crop.value)
               // console.log(gold)
               
               
               // for(let i = 0; i < croplist.length; i++){
               // let item = document.createElement('div', classname = 'item')
               // item.innerText = croplist[i].name + ': ' + JSON.stringify(croplist[i].amount)
               // list.append(item)
               // sellbutton = document.createElement('button')
               // sellbutton.innerText = 'SELL'
               // sellbutton.addEventListener('click',()=> sell(croplist[i]))
               // }
       }
           getGold()
           getInventory(croplist, recipelist)
           amountsold.remove()
           }  
       })
          
     
       
       
 
}
function crop(name, cost, time, yield, expyield, value){
   
   this.name = name
   this.cost = cost
   this.time = time
   this.yield = yield
   this.expyield = expyield
   this.value = value
   this.amount = 2
   let theelement = document.createElement('div', id = name)
   // console.log(theelement)
   let list = document.getElementById('Inventory')
   theelement.innertext = this.name + ": " + JSON.stringify(this.value)
   list.append(theelement)
   // console.log(this.amount)
}
function getOvensandFields(numfields, numovens, croplist, recipelist){
   console.log(numfields)
   console.log(numovens)
   let ovenlist = document.getElementById('ovens')
   console.log(ovenlist.querySelectorAll('div'))
   ovenlist.querySelectorAll('*').forEach(n => n.remove())
   console.log(ovenlist.querySelectorAll('div'))
   for(let i = 0; i < numovens; i++){
       newoven = new oven(recipelist, croplist)
       console.log('new oven')
   }
   let ovenPrice = 100 * (1.25 ** numovens) 
   let ovenaddButton = document.createElement('button')
   ovenaddButton.innerText = ('new oven' + JSON.stringify(ovenPrice))
   ovenaddButton.addEventListener('click', ()=> newOven(ovenPrice))
   ovens = document.getElementById('ovens')
   ovens.append(ovenaddButton)
   let fieldlist = document.getElementById('plots')
   fieldlist.querySelectorAll('*').forEach(n => n.remove())
   for(let i = 0; i < numfields; i++){
       newfield = new field(croplist, recipelist)
       console.log('new field')
   }
   let fieldPrice = 100 * (1.25 ** numfields) 
   let addButton = document.createElement('button')
   addButton.innerText = ('new field' + JSON.stringify(fieldPrice))
   addButton.addEventListener('click', ()=> newField(fieldPrice))
   plots = document.getElementById('plots')
   plots.append(addButton)
   save(gold, exp, croplist, recipelist, numfields, numovens)
}
 

   

const wheat = new crop('wheat', 10, 15, 3, 1, 5)
const sugarcane = new crop('sugarcane',15, 15, 4, 2, 10)
list = document.getElementById('Inventory')


// console.log(croplist)

function list(croplist){
   list = document.getElementById('Inventory')
   
   while(list.lastElementChild()){
       list.removeChild(list.lastElementChild)
   }
   for(let i = 0; i < croplist.length; i++){
       item = document.createElement('div', classname = 'item')
       item.innerText = croplist[i].name + ': ' + JSON.stringify(croplist[i].amount)
       list.append(item)
   }
   let goldlist = document.createElement('div', classname = 'gold')
   goldlist.innerText = 'gold' + JSON.stringify(gold)
   list.append(goldlist)
}

function unlockableCrop(unlockcost, minexp, crop){
   this.unlockcost = unlockcost
   this.minexp = minexp 
   this.crop = crop
   this.unlockswitch = document.createElement('div', classname = 'unlockswitch')
   // this.unlockswitch.style.height = '200px'
   // this.unlockswitch.style.width = '200px'
   // this.unlockswitch.background = 'gold'
   this.unlockswitch.innerText = "UNLOCKABLE: " + this.crop.name + " Unlock Cost: "+ JSON.stringify(this.unlockcost)+' Minimun exp needed: ' + JSON.stringify(this.minexp)
   this.unlockswitch.addEventListener('click', () => this.unlock())
   this.unlocklist = document.getElementById('unlockablerecipes')
   this.unlocklist.append(this.unlockswitch)
   this.unlock = function(){
       if(exp < this.minexp){
           alert('Insufficient EXP')
       }
       else if(gold < this.unlockcost){
           alert('Insufficient gold')
       }
       else{
           gold = gold - this.unlockcost
           
           croplist.push(this.crop)
           this.unlockswitch.remove()
           save(gold, exp, croplist, recipelist, numfields, numovens)
           getGold()

       }
   }

}
function unlockableRecipe(unlockcost, minexp, recipe){
   this.unlockcost = unlockcost
   this.minexp = minexp 
   
   this.recipe = recipe
   this.unlockswitch = document.createElement('div', classname = 'unlockswitch')
   // this.unlockswitch.style.height = '200px'
   // this.unlockswitch.style.width = '200px'
   // this.unlockswitch.background = 'gold'
   this.unlockswitch.innerText = "UNLOCKABLE: " + this.recipe.name + " Unlock Cost: "+ JSON.stringify(this.unlockcost)+' Minimun exp needed: ' + JSON.stringify(this.minexp)
   this.unlockswitch.addEventListener('click', () => this.unlock())
   this.unlocklist = document.getElementById('unlockablerecipes')
   this.unlocklist.append(this.unlockswitch)
   this.unlock = function(){
       
       if(exp < this.minexp){
           alert('Insufficient EXP')
       }
       else if(gold < this.unlockcost){
           alert('Insufficient gold')
       }
       else{
           gold = gold - this.unlockcost
           
           recipelist.push(recipe)
           save(gold, exp, croplist, recipelist, numfields, numovens)
           this.unlockswitch.remove()
           getGold()
           

       }
   }

}
function recipe(name, ingredients, value, time, expyield){
   this.name = name
   this.ingredients = ingredients
   this.value = value
   this.time = time
   this.expyield = expyield
   this.amount = 3

}
const flour = new recipe('flour',[wheat], 10, 30, 2)
const sugar = new recipe('sugar',[sugarcane], 20, 60, 5)
const bread = new recipe('bread',[flour], 15, 75, 7)
const sugarcookies = new recipe('Sugar Cookies',[flour,sugar], 45, 90, 12)

function order(recipelist){
    
    this.recipe = recipelist[Math.floor(Math.random()* recipelist.length)]
    this.amount = Math.ceil(Math.random() * 10) 
    this.goldreward = this.recipe.value * this.amount * 1.2
    this.expreward = this.recipe.expyield * this.amount / 2
    this.repreward = this.recipe.value * this.amount / 10 

    this.complete = function(){
        console.log(this.amount)
        console.log(this.recipe.amount)
        console.log('this text better be showing up on the console')
        if(this.recipe.amount < this.amount){
            alert('Insufficient ' + this.recipe.name)
        }
        else{
            this.recipe.amount -= this.amount
            gold += this.goldreward
            exp += this.expreward
            getGold()
            getExp()
            getInventory(croplist, recipelist)
            this.element.remove()
            neworder = new order(recipelist)

        }
    }

    this.element = document.createElement('div')
    this.element.innerText = ('ORDER: ' + this.amount + ' ' + this.recipe.name)
    this.element.addEventListener('click', () => this.complete() )
    this.element.style.color= 'white'
    this.element.style.height = '50px'
    this.element.style.width = '150px'
    orderlist = document.getElementById('orders')
    orderlist.append(this.element)


}

function save(gold, exp, croplist, recipelist, numfields, numovens){
  
   storage.setItem('gold', gold)
   storage.setItem('exp', exp)
   storage.setItem('numovens', numovens)
   storage.setItem('numfields', numfields)
   storage.setItem('recipelist', JSON.stringify(recipelist))
   storage.setItem('croplist', JSON.stringify(croplist))
   
   console.log(storage)
   // console.log(JSON.parse(storage.getItem('croplist')))
   // console.log(JSON.parse(storage.getItem('recipelist')))
   // for(i of storage.getItem('croplist')){
   //     theresult = JSON.stringify(i)
   //     console.log(theresult)
   // }
   // for(i of storage.getItem('recipelist')){
   //     theresult = JSON.stringify(i)
   //     console.log(theresult)
   // }
   console.log(storage)
   
}

let player = {
   'exp': 0,
   'gold': 100,
   'recipelist': [flour, sugar, bread, sugarcookies],
   'croplist': [wheat, sugarcane],
   'numfields': 1,
   'numovens': 1
   }

   console.log(player)
   
   
console.log(document.readyState)
console.log(storage.getItem('exp'))
if(storage.getItem('exp') != 0 && storage.getItem('exp')!= null){

       player['gold'] = Number(storage.getItem('gold'))
       player['exp'] = Number(storage.getItem('exp'))
       // console.log(storage.getItem('croplist'))
       player['croplist'] = JSON.parse(storage.getItem('croplist') )
       player['recipelist'] = JSON.parse(storage.getItem('recipelist') )
       player['numfields'] = Number(storage.getItem('numfields'))
       player['numovens'] = Number(storage.getItem('numovens'))
      
       // player['recipelist'] = storage.getItem('recipelist')
       // player['croplist'] = storage.getItem('croplist')
}

console.log(player)     
   
   

let croplist = player['croplist']
console.log(croplist)
let recipelist = player['recipelist']
console.log(recipelist)

let gold = player['gold']
let exp = player['exp']
let numfields = player['numfields']

let numovens = player['numovens']
console.log(recipelist)
console.log(croplist)
console.log(numfields)
console.log(numovens)
storage.clear()
function field(croplist,recipelist){
   // console.log(croplist)
   plots = document.getElementById('plots')
   this.fieldElement = document.createElement('div', classname = 'field')
   this.fieldElement.style.height = '100px'
   this.fieldElement.style.width = '100px'
   this.fieldElement.style.background = 'brown'
   this.fieldElement.innerText = 'Not In Use'
   this.crop = null
   this.croplist = croplist
   // console.log(this.croplist)
   if(this.crop ==null){this.fieldElement.addEventListener('click',() => this.plant(croplist,recipelist))}
   else{this.fieldElement.removeEventListener('click',() => this.plant(croplist,recipelist))}
   this.harvest = function(crop, croplist, recipelist){
       
       this.crop.amount += this.crop.yield
       exp += this.crop.expyield
       this.crop = null
       console.log(this.crop)
       this.fieldElement.innerText = 'Not In Use'
       // this.fieldElement.addEventListener('click',() => this.plant())
       list = document.getElementById('Inventory')
       getExp()
       getInventory(croplist, recipelist)
       //    console.log(list.children) 
           // while(list.lastElementChild){
           //     console.log(list.lastElementChild)
           //     list.removeChild(list.lastElementChild)
           //     console.log(list.lastElementChild)
           //     console.log('n')
           // }
   //         list.innerText = ''
   //         list.querySelectorAll('*').forEach(n => n.remove());
           
   // let goldlist = document.createElement('div', classname = 'gold')
   // goldlist.innerText = 'gold' + JSON.stringify(gold)
   // list.append(goldlist)
   //     for(let i = 0; i < croplist.length; i++){
   //         item = document.createElement('div', classname = 'item')
   //         item.innerText = croplist[i].name + ': ' + JSON.stringify(croplist[i].amount)
   //         list.append(item)
   //         sellbutton = document.createElement('button' )
   //         sellbutton.innerText = 'SELL'
   //         sellbutton.addEventListener('click',()=> sell(croplist[i]))
   //         list.append(sellbutton)
   //     }
       
   }
   
   
   this.grow = function(crop, croplist, recipelist){
       
       
       this.crop = crop
       if(gold < this.crop.cost){
           alert('Insufficient Gold')
          
       }
       else{
           gold -= this.crop.cost
       
           getGold()
           this.fieldElement.innerText = crop.name + 'growing'
           console.log(this.FieldElement)
           timeLeft = setTimeout(() => {
           
           this.fieldElement.addEventListener('click', ()=> this.harvest(crop, croplist, recipelist)) 
           this.fieldElement.innerText= 'Ready to harvest'
           }, 1000  )
       }
       

   }
   this.plant = function(croplist, recipelist){
       // console.log(sell(flour))
       // console.log(croplist)
       // console.log('plant')
       // croplist = [wheat, sugarcane]
       let plantSelection = document.getElementById('Inventory')
       for (let i = 0; i < croplist.length; i++ ){
           let button = document.createElement('button')
           button.innerText= croplist[i].name
           button.addEventListener('click',() => this.grow(croplist[i], croplist, recipelist))
           button.addEventListener('mouseenter', ()=> cropDescription(croplist[i]))
           button.addEventListener('mouseleave', ()=> clearInfo())
           plantSelection.append(button)

       }

   }
   

   plots.append(this.fieldElement)
   

}

let field1 = new field(croplist,recipelist, numfields)
function newField(fieldPrice){
   if(gold < fieldPrice){
       alert('Insufficient Gold')
   }
   else{

       purchase = new field(croplist,recipelist)
       numfields += 1
       getOvensandFields(numfields, numovens, croplist, recipelist)
       getGold()
   }
}
let fieldPrice = 100 * (1.25 ** numfields) 
//     let addButton = document.createElement('button')
//     addButton.innerText = ('new field' + JSON.stringify(fieldPrice))
//     addButton.addEventListener('click', ()=> newField(fieldPrice))
//     plots = document.getElementById('plots')
//     plots.append(addButton)
//    console.log(recipelist)

function oven(recipelist, croplist){
   console.log(recipelist)
   ovens = document.getElementById('ovens')
   this.ovenElement = document.createElement('div', classname = 'oven')
   this.ovenElement.style.height = '100px'
   this.ovenElement.style.width = '100px'
   this.ovenElement.style.background = 'gray'
   this.ovenElement.innerText = 'Not In Use'
   let ovenscreen = document.createElement('div')
   
   this.ovenElement.append(ovenscreen)
   
   this.recipe = null
   if(this.recipe ==null){this.ovenElement.addEventListener('click',() => this.putin(recipelist, croplist))}
   else{this.ovenElement.removeEventListener('click',() => this.putin(recipelist, croplist))}
   this.takeout = function(recipe, croplist, recipelist){
       // recipelist = [flour, sugar, bread, sugarcookies]
       
       this.recipe.amount += 1
       exp += this.recipe.expyield
       this.recipe = null
       
       this.ovenElement.innerText = 'Not In Use'
       // this.fieldElement.addEventListener('click',() => this.plant())
       list = document.getElementById('ovenlist')
       
          console.log(list.children) 
           // while(list.lastElementChild){
           //     console.log(list.lastElementChild)
           //     list.removeChild(list.lastElementChild)
           //     console.log(list.lastElementChild)
           //     console.log('n')
           // }
           getInventory(recipelist, croplist)
           getExp()
       
   }

  
   
   this.bake = function(recipe, recipelist, croplist){
       // list.querySelectorAll('*').forEach(n => n.remove());
       
     
       this.recipe = recipe
       let sufficientIngredients = true
       console.log('Bake function has' + croplist)
       for(let i = 0; i < recipe.ingredients.length; i++){
           let callsfor = 0
           for(let j = 0; j < recipe.ingredients.length; j++){
               if(recipe.ingredients[i] == recipe.ingredients[j]){
                   callsfor += 1
               }
           }
           if(recipe.ingredients[i].amount < callsfor){
                   sufficientIngredients = false
                   
               }
           console.log(callsfor)
           console.log(recipe.ingredients[i].name)
           console.log(recipe.ingredients[i].amount)
           console.log(wheat.amount)
           console.log(sufficientIngredients)
               
       }
       if(sufficientIngredients == true){
           for(let i = 0; i < recipe.ingredients.length; i++){
               
              
               recipe.ingredients[i].amount = recipe.ingredients[i].amount - 1
               console.log(recipe.ingredients[i].amount)
           }
           getInventory(recipelist, croplist)

           this.ovenElement.innerText = recipe.name + 'baking'
       
       timeLeft = setTimeout(() => {
           
           this.ovenElement.addEventListener('click', ()=> this.takeout(recipe,recipelist, croplist)) 
           this.ovenElement.innerText= 'Finished!'
       }, 1000  )
       
       }
       else{
           alert('Insufficient ingredients')
       }
       
       
      
       }
       
       
   
   this.putin = function(recipelist, croplist){
       
       
       // console.log(recipelist)
       // for(let i = 0; i < recipelist.length; i++){
       //     console.log(recipelist[i])
       // }
       let recipeSelection = document.getElementById('Inventory')
       console.log(recipelist)
       for (let i = 0; i < recipelist.length; i++ ){
           let button = document.createElement('button')
           button.innerText= recipelist[i].name
           console.log(button.innerText)
           button.addEventListener('click',() => this.bake(recipelist[i],recipelist, croplist))
           button.addEventListener('mouseenter', ()=> recipeDescription(recipelist[i]))
           button.addEventListener('mouseleave', ()=> clearInfo())
           recipeSelection.append(button)

       }

       

   }
   ovens.append(this.ovenElement)

}
function clearInfo(){
   infoElement = document.getElementById('info')
   infoElement.querySelectorAll('*').forEach(n => n.remove());

}

function cropDescription(crop){
   console.log('Is this function being called?')
   // name, cost, time, yield, expyield, value
   infoElement = document.getElementById('info')
   describerElement = document.createElement('div')
   describerElement.innerText = 'Name: ' + crop.name 
   + ' seed cost: ' + JSON.stringify(crop.cost) + ' gold.'
   + ' growth time: ' + JSON.stringify(crop.time) + ' seconds.'
   + ' Amount yielded: '+ JSON.stringify(crop.yield)
   + ' Exp gained from harvest: ' + JSON.stringify(crop.expyield) + ' exp.'
   + ' Value of crop: ' + JSON.stringify(crop.value) + ' gold.'
   infoElement.append(describerElement)

}
function recipeDescription(recipe){
   console.log('Is this function being called?')
   function numIngredients(ingredient){
       num = recipe.ingredients.filter(n => n == ingredient).length
       return num
   }
   // name, ingredients, value, time, expyield
   let ingredientDescription = ''
   for(i of recipe.ingredients){
       ingredientDescription += i.name + ': ' + numIngredients(i) + '\n'
   }
   infoElement = document.getElementById('info')
   describerElement = document.createElement('div')
   describerElement.innerText = 'Name: ' + recipe.name 
   + ' Ingredients needed:' + ingredientDescription
   + ' bake time: ' + JSON.stringify(recipe.time) + ' seconds.'
   + ' Exp gained from baking: ' + JSON.stringify(recipe.expyield) + ' exp.'
   + ' Value of good: ' + JSON.stringify(recipe.value) + ' gold.'
   infoElement.append(describerElement)


}


console.log(flour.ingredients)
console.log(sugarcookies.ingredients)
// ingredientlist = [wheat, sugarcane, flour, sugar]

console.log(field1.crop)

function newOven(ovenPrice){
   if(gold < fieldPrice){
       alert('Insufficient Gold')
   }
   else{

       purchase = new oven(croplist,recipelist)
       numovens += 1
       console.log(numovens)
       console.log(numfields)
       getOvensandFields(numfields, numovens, croplist, recipelist)
       getGold()
   }
}

let ovenPrice = 100 * (1.25 ** numovens) 
// let ovenaddButton = document.createElement('button')
// ovenaddButton.innerText = ('new oven' + JSON.stringify(ovenPrice))
// ovenaddButton.addEventListener('click', ()=> newOven(ovenPrice))
// ovens = document.getElementById('ovens')
// ovens.append(ovenaddButton)

const raspberry = new crop( 'raspberry', 50, 75, 6,8,10)
const blueberry = new crop( 'blueberry', 45, 50, 10, 6, 5)
const strawberry = new crop( 'strawberry', 25, 45, 5, 5, 8)
const ice = new crop('ice', 30, 20, 4, 5, 10)
const apple = new crop( 'apple', 60, 150, 5, 15, 14)
const milk = new crop( 'milk', 30, 80, 3, 9, 12)
const egg = new crop( 'egg', 25, 90, 2, 6, 15)
const watermelon = new crop( 'watermelon', 50, 120, 1, 10, 65)
const cocoa = new crop('cocoa', 45, 60, 2, 12, 25)

const icecream = new recipe('vanilla ice cream', [ice, sugar, milk], 40, 20, 5)
const chocolate = new recipe('chocolate', [cocoa, sugar], 40, 10, 5)
const cake = new recipe( 'cake', [flour, sugar, egg], 50, 30, 14)
const applepie = new recipe('apple pie', [flour, sugar, apple, apple], 60, 45, 18)
const chocolatecake = new recipe( 'chocolate cake', [flour, sugar, egg, chocolate], 100, 55, 20)
const watermeloncake = new recipe( 'watermelon cake', [flour, sugar, egg, watermelon], 120, 65, 25)
const blueberrymuffin = new recipe('Blueberry Muffin', [flour, sugar, blueberry], 65,30,10)
if(croplist.includes(raspberry) == false){let unlockableRaspberry = new unlockableCrop(800,1250, raspberry)}
if(croplist.includes(blueberry) == false){let unlockableBlueberry = new unlockableCrop(500, 550, blueberry)}
if(croplist.includes(strawberry) == false){let unlockableStrawberry = new unlockableCrop(450, 450, strawberry)}
if(croplist.includes(watermelon) == false){let unlockableWatermelon = new unlockableCrop(500, 250, watermelon)}
if(croplist.includes(apple) == false){let unlockableApple = new unlockableCrop(700, 1000, apple)}
if(croplist.includes(milk) == false){let unlockableMilk = new unlockableCrop(250, 500, milk)}
if(croplist.includes(egg) == false){let unlockableEgg = new unlockableCrop(600, 400, egg)}
if(croplist.includes(ice) == false){let unlockableIce = new unlockableCrop(700, 300, ice)}
if(croplist.includes(cocoa) == false){let unlockableCocoa = new unlockableCrop(300, 200, cocoa)}
if(recipelist.includes(cake) == false){let unlockableCake = new unlockableRecipe(1000, 500, cake)}
if(recipelist.includes(chocolate) == false){let unlockableChocolate = new unlockableRecipe(350, 300, chocolate)}
if(recipelist.includes(icecream) == false){let unlockableIceCream = new unlockableRecipe(800, 500, icecream)}
if(recipelist.includes(chocolatecake) == false){let unlockableChocolate = new unlockableRecipe(350, 300, chocolate)}
if(recipelist.includes(watermeloncake) == false){let unlockableWatermelonCake = new unlockableRecipe(1750, 1000, watermeloncake)}
if(recipelist.includes(applepie) == false){let unlockableApplePie = new unlockableRecipe(700, 700, applepie)}

// if(recipelist.includes(chocolate) == false){let unlockableChocolate = new unlockableRecipe(350, 300, chocolate)}
// let unlockableBlueberry = new unlockableCrop(500, 550, blueberry)
// let unlockableStrawberry = new unlockableCrop(450, 450, strawberry)
// let unlockableWatermelon = new unlockableCrop(500, 250, watermelon)
// let unlockableApple = new unlockableCrop(700, 1000, apple)
// let unlockableMilk = new unlockableCrop(250, 500, milk)
// let unlockableEgg = new unlockableCrop(600, 400, egg)
// let unlockableCake = new unlockableRecipe(1000, 500, cake)
// let unlockableChocolate = new unlockableRecipe(350, 300, chocolate)
// let unlockableIce = new unlockableCrop(700, 300, ice)
// let unlockableIceCream = new unlockableRecipe(800, 500, icecream)
// let unlockableChocolateCake = new unlockableRecipe(1500, 750, chocolatecake)
// let unlockableWatermelonCake = new unlockableRecipe(1750, 1000, watermeloncake)
// let unlockableApplePie = new unlockableRecipe(700, 700, applepie)
getGold()
getExp()
order1 = new order(recipelist)
order2 = new order(recipelist)
order3 = new order(recipelist)
getOvensandFields(numfields, numovens, croplist, recipelist)
console.log(numfields)
console.log(numovens)
let body = document.getElementById('body')
console.log(body.style)
// 
for(i of croplist){
   console.log(i.name+ ' amount before ' + i.amount)
}
getInventory(croplist,recipelist)
for(i of croplist){
   console.log(i.name + ' amount after ' + i.amount)
}