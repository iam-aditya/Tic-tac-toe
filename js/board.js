function makeboard(){
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
    function carr(){
        var table =[];
            for(var i=0;i<9;i++){
                table.push(parseInt(arr[i].innerHTML));
            }
        return table;
    }
    function count(){
        var rem=0;
        for(var i=0;i<9;i++){
            if( arr[i].innerHTML=="-100" )rem++;
        }
        return rem;
    }
    return { table , arr , carr , count };
}
export default makeboard;