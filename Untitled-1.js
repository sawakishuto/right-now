/*let todo1 = ['ko','hoka']
for(let item of todo1){
    const list1 =`<li>${item}</li>`;
document.getElementById('ditail1').insertAdjacentHTML('beforeend',list1);
}
let todo2 = ['ko','hoka']
for(let item of todo2){
    const list2 =`<li>${item}</li>`;
document.getElementById('ditail2').insertAdjacentHTML('beforeend',list2);
}
let todo3= ['ko','hoka']
todo3.push('lll');
for(let item of todo3){
    const list3 =`<li>${item}</li>`;
document.getElementById('ditail3').insertAdjacentHTML('beforeend',list3);
}




<h2 class="ditail2">明日のタスク</h2>
<form action="#" id ="form2">
    <input type="text" name="ditail2">
    <input type="submit" value="追加">
   </form>
<ul id="description2">

</ul>
<h2 class="ditail3">それ以降のタスク</h2>
<form action="#" id ="form3">
    <input type="text" name="ditail3">
    <input type="submit" value="追加">
   </form>
<ul id="description3">

</ul>



document.getElementById('form2').onsubmit = function(event){
    event.preventDefault();
const ditail2 = document.getElementById('form2').ditail2.value;
const list2 = `<li>${ditail2}</li> `;

document.getElementById('discription2').insertAdjacentHTML("afterbegin",list2);
}*/