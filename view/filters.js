var filterTable=function(b,c){
    var d=b.getElementsByTagName("TR"),e={},a;
    for(a in c)c.hasOwnProperty(a)&&(e[a]=c[a]instanceof filterTable.Filter?c[a]:new filterTable.Filter(c[a]),e[a]._setAction("onchange",function(){var a,c,b;
        for(c=0;c<d.length;c+=1)for(b in a=d.item(c),e)if(e.hasOwnProperty(b))if(!1===e[b].validate(a.children[b].innerText)){a.style.display="none";break}else a.style.display=""}))};
filterTable.Filter=function(b,c,d){if(!(this instanceof arguments.callee))
    return new arguments.callee(b,c,d);
this.filters="[object Array]"=={}.toString.call(b)?b:[b];
this.validate=function(c){for(var a=0;a<this.filters.length;a+=1)
    if(!1===this.__validate(c,this.filters[a],a))return!1};
this.__validate=function(b,a,f){if("undefined"!==typeof c)
    return c(b,this.filters,f);
a.value=a.value.replace(/^\s+$/g,"");
return!a.value||a.value==b};
this._setAction=function(c,a){
    for(var b=0;b<this.filters.length; b+=1)this.filters[b][d||c]=a
}};
