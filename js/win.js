
function win(table,turn){//console.log("NEWWWWWWWWWWwwwwwwwwwwWWWWWWWWWWWww");
           
        //console.log(table);

        for(var i=0;i<3;i++){
            var c=0;
            
            for(var j=0;j<3;j++){
                c+= table[i+3*j];
            }
            if( turn==1 && c==3)return c;
            if( turn==0 && c==0)return c;
        }
        console.log("hori");
        for(var i=0;i<3;i++){
            var c=0;
            for(var j=0;j<3;j++){
                c+=table[3*i+j];
            }
            if( turn==1 && c==3)return c;
            if( turn==0 && c==0)return c;
        }
        var c=0;
        for(var i=0;i<9;i+=4){
            c+=table[i];
        }
        if( turn==1 && c==3)return c;
        if( turn==0 && c==0)return c;

        c=0;
        for(var i=2;i<7;i+=2){
            c+=table[i];
        }
        if( turn==1 && c==3)return c;
        if( turn==0 && c==0)return c;
        return -1;
    }
export default win;