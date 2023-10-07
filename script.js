// const CountValue = document.getElementsByClassName("count-value")
// let TaskCount = 0;
// const displayCount = (TaskCount) => {
// CountValue.innerText =TaskCount
// }


const input = document.getElementById("text-box")
btn.addEventListener("click",function(e){
    let text = input.value 
        if(text===""){
            alert("EMPTY!!!")
        }else{
        const nwPara=document.createElement("p")
        nwPara.classList.add("para")

         nwPara.addEventListener('dblclick', () =>{
            nwPara.classList.add('line-through')
            
         })
       

        let addvalue = document.createElement("span")
            addvalue.innerHTML = text
            nwPara.appendChild(addvalue)
        
        let toEdit =document.createElement("button")
            toEdit.classList.add("editt")
            toEdit.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>'
            nwPara.appendChild(toEdit)

        let toDelete =document.createElement("button")
            toDelete.classList.add("editt")
            toDelete.innerHTML = '<i class="fa-solid fa-trash"></i>'
            nwPara.appendChild(toDelete)


            toEdit.addEventListener("click",()=>{
                    let val=prompt("Edit please")
                    console.log(val)
                    addvalue.innerHTML=val
                })

                toDelete.addEventListener("click",()=>{
                    nwPara.remove()
                })


       tasks.appendChild(nwPara)
    }
    input.value=""    //to remove the text on the textfield
})