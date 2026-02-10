// let name="Yuvraj Singh"
// console.log(name)

// console.log(document)
// const para=document.querySelector('p')
// para.innerText="this is updated paragraph"


// const para=document.getElementsByClassName('para')
// para[0].innerText="this is updated paragraph"
// para[0].style.color="green"
// console.log(para)


// const para=document.querySelector('.para')
// para.innerText="hey guys i am using js ha ha ha....."
// para.style.color='magenta'
// console.log(para)



// const para=document.querySelectorAll('.para')
// para[1].innerText="ali dost "
// para[0].style.color="blue"
// console.log(para)



// let arr=[343,34,3,23,3434,45,45]
// arr.forEach((ele)=>console.log(ele))



// const container=document.querySelector(".container")
// container.innerHTML="<h1>this is a heading"
// console.log(container)



// const btn=document.querySelector("button")
// btn.classList.add("btn")

// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     alert("button clicked")
// });

// const form=document.querySelector('form')
// form.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log("Form submitted!!!!")
// })


// console.log(a)
// // console.log(b)

// var a=10
// let b=20

// console.log(a)
// console.log(b)

// function print(){
//     let c=63
//     console.log(c)
//     console.log("hello world")
// }
// print()

//                                               javascript scope

// function greet(){
//     var message="hello there"
//     console.log(message);
// }

// greet();
// console.log(message);


// debugger
// function first(){
//     second()
// }

// function second(){
//     third()
// }

// function third(){
//     console.trace()
   
// }

// first()


//                                               Asynchronous JavaScript`


// console.log("first line")
// setTimeout(()=>{console.log("second line after 2 seconds")},1000)
// console.log("third line")




//                                             Timers in java script




// setTimeout(()=>{
//     alert("this is an alert of an 3 seconds")       // it will run only once after 3 seconds

// },3*1000)

// const timerId = setInterval(()=>{
//     console.log("this is an alert of 3 seconds ")      // it will run after every 3 seconds
// },1000)
// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10000)




// question1=you have to give one variable and print and after 10 seconds it stop printing

// let count=0
// const intervalId=setInterval(()=>{
//     count++                                  // count=count+1
//     console.log(count)
// },1000)

// setTimeout(()=>{
//     clearInterval(intervalId)
// },10000)


// console.log("before timeout")
// setTimeout(()=>{
//     console.log("inside timeout")
// },0)
// console.log("after timeout")







// const inputName=document.querySelector("#name")
// const btn=document.querySelector("#btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{
//     if(name.value==="")return
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")
//     dlt.innerText="delete"
//     li.innerText=name.value;
//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
     
//     })
//     list.appendChild(li)
//     list.appendChild(dlt)
//     name.value=""
   
// })






// function greet(){
//     console.log("hello students")
// }

// function print(sample,num){
//     sample()
//     console.log("total sududent are:",num)
//     }
// print(greet,50)


// console.log("starting homework")
// setTimeout(()=>{
//     console.log("homework done");
//     console.log("starting dinner");
// setTimeout(()=>{
//     console.log("dinner done");
//     console.log("getting ready to go out");
// setTimeout(()=>{
//     console.log("go to the playground");
// },1000);
// },1500);

// },2000);


// function finishhomework(callback){
//     console.log("starting homework");
//     setTimeout(()=>{
//         console.log("homework done");
//         callback();
//     },2000);
// }

// function eatdinner(callback){
//     console.log("starting dinner");
//     setTimeout(()=>{
//         console.log("dinner done");
//         callback();
//     },1500);
// }

// function gooutplayground(){
//     console.log("going to the playground");
  
// }

// finishhomework(() => {
//     eatdinner(() => {
//         gooutplayground();
//     });
// });





