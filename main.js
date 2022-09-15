
    let a = [1,3,4,2,7,9,10,6,8];
    let b = [1,3,9,11,5,7,13];
    let dp1 = [10005], dp2 = [10005];
    for(let i=0;i<=10000;i++){
        dp1[i] =0;
        dp2[i]=0;
    }
    for(let i=0;i<a.length;i++){
        dp1[a[i]]=1;
    }
    for(let i=0;i<b.length;i++){
        dp2[b[i]]=1;
    }
    var out = [];
    for(let i=0;i<=10000;i++){
        if(dp1[i]==1 && dp2[i]==1)
        out.push(i);
    }
    console.log(out); 
        
