
import win from "./win.js";
import ai from "./ai.js";
import makeboard from "./board.js"
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







multiplayer.addEventListener( "submit" , function(e){
    
    e.preventDefault();
    
    const gb = makeboard();

    gb.arr.forEach((tile)=>{
        gb.table.appendChild(tile);
    });
    var turn=0;
    gb.arr.forEach((tile)=>{
        tile.addEventListener(  "click", ()=>{
            //alert("ok");
            if( tile.innerHTML==-100){
                tile.innerHTML=turn;
                var h=win( gb.carr() ,turn);
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
    
    const gb = makeboard();

    console.log(p1,p2,gb);
    
    gb.arr.forEach((tile)=>{
        gb.table.appendChild(tile);
    });
    
    
    var turn=0;
    gb.arr.forEach((tile)=>{
        tile.addEventListener(  "click", ()=>{
            //alert("ok");
            if( tile.innerHTML==-100){
                tile.innerHTML=turn;
                var h=win( gb.carr() ,turn);
                if( h==0 && turn==0 ){
                    alert("winn"+ turn);
                    location.reload();
                }
                
                if( gb.count()==0){
                    alert("tie");
                    location.reload();
                }
                
                turn =1;
                var pc=ai(p2,gb.arr);
                gb.arr[pc].innerHTML=turn;
                h=win( gb.carr() ,turn);
                if( h==3 && turn==1 ){
                    alert("winn "+ turn );
                    location.reload();
                }
                
                
                if( gb.count() ==0){
                    alert("tie");
                    location.reload();
                }
                turn=0;
            }
        });
    });
    st.classList.add("hide");
    
})
