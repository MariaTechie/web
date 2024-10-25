const myBox= document.getElementById('myBox');
const myBtn =  document.getElementById('myBtn');
myBtn.addEventListener('click',event=>{
    myBox.style.backgroundColor='lightpink';
    myBox.textContent='Hi!';
});
myBtn.addEventListener('mouseover',event=>{
    myBox.style.backgroundColor='darkred';
    myBox.textContent="CLICK NOW";

});
 myBtn.addEventListener('mouseleave', event => {
   myBox.style.backgroundColor = 'lightblue';
  myBox.textContent="click here";


});

