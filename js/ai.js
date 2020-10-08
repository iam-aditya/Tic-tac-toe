import win from "./win.js";
function ai( diff , arr){
    if( diff == "easy"){
        while( true ){
            var temp=Math.floor(Math.random() * 9);
            if( parseInt(arr[ temp ].innerHTML)==-100 ){
                return temp;
            }
        }
    }
    else {

        var table =[];
        for(var i=0;i<9;i++){
            table.push(parseInt(arr[i].innerHTML));
        }  
        //console.log(table)
        var r = minimax(table,1);
        return r.move;
    }
}
function minimax( arr,turn ){
    var c=0;
    for(var i=0;i<9;i++)if(arr[i]!=-100)c++;
    //console.log(c,turn ,arr)
    c=9-c;
    if( win(arr,0)==0 ){
        return {score: (1+c)*(-1) ,move:-1 };
    }
    else if( win(arr,1)==3){
        return {score: (1+c)*(1) ,move:-1 };
    }
    else if(c==0){
        return {score: 0 ,move:-1 };
    }

    if( turn==0){
        var x={score:10000,move:-1};

        for(var i=0;i<9;i++){
            if(arr[i]==-100){
                arr[i]=turn;

                var r = minimax(arr,turn^1 );
                if( r.score <x.score  ){
                    x=r;
                    x.move=i;
                }
                arr[i]=-100;
            }
        }
        return x;
    }
    else {
        var x={score:-10000,move:-1};

        for(var i=0;i<9;i++){
            if(arr[i]==-100){
                arr[i]=turn;

                var r = minimax( arr, turn^1 );
                if( r.score >x.score  ){
                    x=r;
                    x.move=i;
                }
                arr[i]=-100;
            }
        }
        return x;
    }
    
}
export default ai;