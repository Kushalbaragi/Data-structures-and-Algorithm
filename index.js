// // https://jsonblob.com/api/5226571730043f8b22dadc20
// fetch('./main.json')
// .then(data=>data)
// .then(data=>{
//     console.log(data);
//     data.forEach((ele)=>{
//       let para=document.createElement('p');
//       para.innerHTML=ele.name;
//         document.getElementById('body').append(para);
//     })
// }
//     );

fetch('./main.json').then(data=>data.json()).then(data=>{console.log(data)})

