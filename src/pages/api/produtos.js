
function numeroAleatorio(min = 1, max = 1000){
  return parseInt(Math.random() * (max - min)) + min
}


export default function handler(req,res){

  res.status(200).json([
      {id:numeroAleatorio(), name: 'caneta', preco: 5.80},
      {id:numeroAleatorio() , name: 'caderno', preco: 15.80},
      {id:numeroAleatorio() , name: 'lapiseira', preco: 7.80},
      {id:numeroAleatorio() , name: 'borracha', preco: 2.80,}
])  
}