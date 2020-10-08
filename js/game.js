
import win from "./win.js";
import ai from "./ai.js";

const single = document.querySelector("#comp");
const multi = document.querySelector("#multi");

const computer = document.querySelector("#computer");
const multiplayer = document.querySelector("#multiplayer");
const st = document.querySelector("#start");


multiplayer.style.display="none";
single.checked=true;

single.addEventListener("click", function() {
    multiplayer.style.display="none";
    computer.style.display="";
    computer.querySelector("#pl").value="";
    
});


multi.addEventListener("click", function() {
    computer.style.display="none";
    multiplayer.style.display="";
    multiplayer.querySelector("#pl1").value="";
    multiplayer.querySelector("#pl2").value="";
});



function carr(arr){
    var table =[];
        for(var i=0;i<9;i++){
            table.push(parseInt(arr[i].innerHTML));
        }
    return table;
}



multiplayer.addEventListener( "submit" , function(e){
    //mode.classList.add("hide");
    e.preventDefault();
    const table = document.querySelector("#board");
    table.style.display="grid";
    table.classList.add("gameboard");
    const arr=[];
    for (var i=0;i<9;i++){
        const tile=document.createElement("div");
        tile.classList.add("tile","clickable","round");
        tile.innerHTML=-100;
        arr.push( tile );
    }
    

    console.log(arr);
    arr.forEach((tile)=>{
        table.appendChild(tile);
    });
    var turn=0;
    arr.forEach((tile)=>{
        tile.addEventListener(  "click", ()=>{
            //alert("ok");
            if( tile.innerHTML==-100){
                tile.innerHTML=turn;
                var h=win(carr(arr) ,turn);
                if( ( h==3 && turn==1 ) || ( h==0 && turn==0 )  ){
                    alert("winn");
                    location.reload();
                }
                if( turn ==0)turn =1;
                else turn =0;
            }
        });
    });
    st.classList.add("hide");
    p=0;
    p1=document.querySelector("#pl1");
    p2=document.querySelector("#pl2"); 
});
function getdiff(form, name) {
    var val;
    var radios = form.elements[name];
    
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { 
            val = radios[i].value; 
            break; 
        }
    }
    return val; 
}

computer.addEventListener("submit",function(e){
    const p1 = document.querySelector("#pl").value; 
    const p2 = getdiff( document.querySelector("#fc"),"diff") ;
         

    e.preventDefault();
    const table = document.querySelector("#board");
    table.style.display="grid";
    table.classList.add("gameboard");
    const arr=[];
    for (var i=0;i<9;i++){
        const tile=document.createElement("div");
        tile.classList.add("tile","clickable","round");
        tile.innerHTML=-100;
        arr.push( tile );
    }
    

    console.log(p1,p2);
    arr.forEach((tile)=>{
        table.appendChild(tile);
    });
    var turn=0;
    arr.forEach((tile)=>{
        tile.addEventListener(  "click", ()=>{
            //alert("ok");
            if( tile.innerHTML==-100){
                tile.innerHTML=turn;
                var h=win(carr(arr) ,turn);
                if( h==0 && turn==0 ){
                    alert("winn"+ turn);
                    location.reload();
                }
                var rem=0;
                for(var i=0;i<9;i++){
                    if( arr[i].innerHTML=="-100" )rem++;
                }
                if(rem==0){
                    alert("tie");
                    location.reload();
                }
                
                turn =1;
                var pc=ai(p2,arr);
                arr[pc].innerHTML=turn;
                h=win(carr(arr) ,turn);
                if( h==3 && turn==1 ){
                    alert("winn "+ turn );
                    location.reload();
                }
                
                
                rem=0;
                for(var i=0;i<9;i++){
                    if( arr[i].innerHTML=="-100" )rem++;
                }
                if(rem==0){
                    alert("tie");
                    location.reload();
                }
                turn=0;
            }
        });
    });
    st.classList.add("hide");
    
})
