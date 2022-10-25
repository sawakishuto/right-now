'usestrict';
const couragetext = ["（こんなんに書いとらんとはよやれ！！）","（怠けんな！！）","（今やらんでええの？）","（書いて満足してるんとちゃう？）","（明日やろうとか思ってる？）","(どうせ後回しにするんやろなぁ)","(なんとなくで書いてないか？)"]
const itemval = document.getElementsByClassName('input');
const tasksubmit = document.getElementById('plus');
const discription = document.getElementById('discription1');

const plustask = function(task){
    const textditail = couragetext[Math.floor(Math.random()*couragetext.length)];
    const itemlist = document.createElement('li');
    const taskopen = discription.appendChild(itemlist);
    taskopen.innerHTML = task;
    const courage = document.createElement('p');
    const opencourage = taskopen.appendChild(courage);
    opencourage.innerHTML = textditail;
    const delatebtn = document.createElement('button');

delatebtn.innerHTML = '削除';
itemlist.appendChild(delatebtn);

delatebtn.addEventListener('click',function(event){
   event.preventDefault();
    window.alert("やるやん自分")
   delatesuru(delatebtn);
  
});


};
const delatesuru = function(delatebtn){
    const getchild = delatebtn.closest('li');
    const getcourage = delatebtn.closest('p');
    discription.removeChild(getchild);
    taskopen.removeChild(getcourage);
    };
tasksubmit.addEventListener("click",function(event){
    event.preventDefault();
    const task = document.getElementById('input').value
    plustask(task);
    window.alert("本当にやるつもりなん？");
    itemval.value = '';
    
});


