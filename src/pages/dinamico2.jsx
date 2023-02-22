

export async function getServerSideProps(){
    
    //trabalhando de forma sincrona algo que é assincrono
    const resp = await fetch('http://localhost:3000/api/produtos')
    //retornando uma promise com json
    const produtos = await resp.json()

    return {       
         props: {
            produtos
        }
    }
}


export default function Dimanico2(props) {

    function renderizarProdutos() {
        return props.produtos.map(produto => {
            return (
                
                <li key={produto.id}>{produto.id} - {produto.name} tem preço de R${produto.preco} </li>
            )
        })
    }

    return (
        <div>
            <h1>Dimanico #02</h1>
            <ul>
                {renderizarProdutos()}
            </ul>
        </div>
    )
}