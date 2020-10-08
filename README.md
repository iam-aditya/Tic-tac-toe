Its a start of something or just another lets see.



const single = document.querySelector("#comp");
const multi = document.querySelector("#multi");

const computer = document.querySelector("#computer");
const multiplayer = document.querySelector("#multiplayer");
const st = document.querySelector("#start");

document.write(5 + 6);
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
    //mode.classList.add("hide");
    e.preventDefault();
    const table = document.createElement("div");
    table.style.display="grid";
    table.classList.add("gameboard");
    var turn = 0;
    for (var i=0;i<9;i++){
        const tile=document.createElement("div");
        tile.classList.add("tile","clickable","round");
        tile.innerHTML=-100;
        tile.addEventListener("click",()=>{
            //alert("po");
            if( tile.innerHTML==-100){
                //alert("in")
                tile.innerHTML=turn;
                if( turn ==0)turn =1;
                else turn =0;
                if( win(table,turn) ){
                    alert(winner);
                }
            }
        })
        table.appendChild( tile );

    }
    
    function win(table,turn){
        for(var i=0;i<3;i++){
            var c=0;
            for(var j=0;j<3;j++){
                c+=table[i+3*j].innerHTML;
            }
            if( turn==1 && c==3)return true;
            if( turn==0 && c==0)return true;
        }
        
        for(var i=0;i<3;i++){
            var c=0;
            for(var j=0;j<3;j++){
                table[3*i+j].innerHTML;
            }
            if( turn==1 && c==3)return true;
            if( turn==0 && c==0)return true;
        }
        var c=0;
        for(var i=0;i<9;i+=4){
            c+=table.innerHTML;
        }
        if( turn==1 && c==3)return true;
        if( turn==0 && c==0)return true;
        c=0;
        for(var i=2;i<7;i+=2){
            c+=table.innerHTML;
        }
        if( turn==1 && c==3)return true;
        if( turn==0 && c==0)return true;
        return false;
    }
    
    document.body.appendChild(table);
    st.classList.add("hide");
    p=0;
    p1=document.querySelector("#pl1");
    p2=document.querySelector("#pl2"); 
});
