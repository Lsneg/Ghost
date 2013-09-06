(function(){
    var flag = true; 
    var ghost = {
        elems :[],
        getById:function(param){
            var tempElems = []; 
                            for(var i = 0; i < arguments.length;i++){
                                if(typeof arguments[i] === 'string'){ 
                                    tempElems.push(document.getElementById(arguments[i]));
                                }
                            }
                            this.elems = tempElems; 
                            return this;
        },
          onCl:function(action, callback){
            
            if(this.elems[0].addEventListener){
                                for(var i = 0; i < this.elems.length;i++){
                                    this.elems[i].addEventListener(action,callback,false);   
                                }
                            }
                           else if(this.elems[0].attachEvent){
                                    for(var i = 0;i < this.elems.length;i++){
                                        this.elems[i].attachEvent('onCl'+action,callback);  
                                    }
                            }
                            return this;
        },
        css:function(param1,param2){
                for(var i = 0;i < this.elems.length;i++){
                    this.elems[i].style.cssText = param1 + ":" +param2;
                }
            return this;
        },
        toggle_disp:function(){
              
              for(var i = 0;i < this.elems.length;i++){
                    if(this.elems[i].style.display == "block"){
                        this.elems[i].style.display = "none";
                    } else {
                        this.elems[i].style.display = "block";
                    }
                } 
            return this;
        }
        
    }
    if(!window._ghost){window._ghost=ghost;} 

})();