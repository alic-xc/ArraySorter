export default function sorter(c:any[], num:number =0){
    for( let i = 0; i < c.length; i++){

        if(typeof c[i] != 'number') {

            c.splice(i, 1)

        } else {
        
            if( c[i] > c[i + 1] && c[i+ 1] != 'undefined' ){
                let d = c[i]
                let e = c[i+1]
                c[i] = d
                c[i+1] = e
            }

            if( c[i] < c[i + 1] && c[i+ 1] != 'undefined'){
                let d = c[i]
                let e = c[i+1]
                c[i] = e
                c[i+1] = d
            }
    }
}

    if( num != c.length ){
        exec(c, num + 1)
    }

    return c
}
