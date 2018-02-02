var produtosService=require('./services/produtos.service');
var crud=require('./services/firebase.crud.service');
console.log('Inicio');




// var produtos = fb.database.ref('produtos');

// produtos.once('value').then(snapshot=>{
//     console.log('once',snapshot.val());
// });


// produtos.on('value',(snapshot=>{
//     console.log('on',snapshot.val());
// }))

(async function()  {
    const colecao='carros';
    let novo={data:{nome:'Audi'}};
    let a=await crud.insert(colecao,novo);
    let p=await crud.view(colecao,a);
    console.log('Novo',p);
    p.data.coisa='Munif';
    crud.update(colecao,p);
    console.log(await crud.listAll(colecao));
}());


