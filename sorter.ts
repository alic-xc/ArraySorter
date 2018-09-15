// export default function exec(c:any[], num:number =0){
//     for( let i = 0; i < c.length; i++){

//         if(typeof c[i] != 'number') {

//             c.splice(i, 1)

//         } else {
        
//             if( c[i] > c[i + 1] && c[i+ 1] != 'undefined' ){
//                 let d = c[i]
//                 let e = c[i+1]
//                 c[i] = d
//                 c[i+1] = e
//             }

//             if( c[i] < c[i + 1] && c[i+ 1] != 'undefined'){
//                 let d = c[i]
//                 let e = c[i+1]
//                 c[i] = e
//                 c[i+1] = d
//             }
//     }
// }

//     if( num != c.length ){
//         exec(c, num + 1)
//     }

//     return c
// }

// console.log(exec( [7,34,"any",3,1,2,true,34,5,621,2 ]));

console.log([7,34,"any",3,1,2,true,34,5,621,2 ].sort((a, b) => a - b))

// let d = [7,34,"any",3,1,2,true,'',323,323,334,5,621,2 ]

// let c = d.filter( (a) => {
//     return (typeof a == 'number')? a : '';
// })

// console.log(c)