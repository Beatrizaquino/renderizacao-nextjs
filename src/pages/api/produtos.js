

export default function handler(req,res){

  res.status(200).json([
      {id: 1, name: 'caneta', preco: 5.80},
      {id: 2, name: 'cadero', preco: 15.80},
      {id: 4, name: 'lapiseira', preco: 7.80},
      {id: 5, name: 'borracha', preco: 2.80,}
])  
}