// const delay =document.querySelector('#portfolio_container')

// // window.addEventListener('load',(e)=>{
// //     delay.classList.add('my_class')
// // })

// setTimeout(()=>{
//     delay.classList.add('my_class')
// },2000)

const post=document.querySelector('.ask')
console.log(post)

function answare(){
   var values= prompt('please say yes or no ,thanks')
   if (values ==='yes') {
    const conta=document.querySelector('#portfolio_container')
    alert('THANKS , THAT HELP US ALOT !!!')
    console.log('thanks')
    
   }else{
    const conta=document.querySelector('#portfolio_container')
    alert('THANKS , WE WILL WORK ON IT')
    console.log('we will work on it')
   }
}