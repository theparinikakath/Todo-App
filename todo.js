let inp=document.querySelector('input');
let ul=document.querySelector('ul');
let btn=document.querySelector('button');

btn.addEventListener('click',function() {
    let item=document.createElement('li');
    item.innerText=inp.value;

    let delbtn=document.createElement('button');
    delbtn.innerText='  DELETE  ';
    delbtn.classList.add('delete');
    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value="";
});
ul.addEventListener('click',function(event){
    // console.log("button clicked");
    if(event.target.nodeName == 'BUTTON'){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("Deleted 1 item from list");
    }
})

// let delbtns=document.querySelectorAll('.delete');
// for(delbtn of delbtns){
//     delbtn.addEventListener('click',function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }

