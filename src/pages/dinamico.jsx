export function getServerSideProps() {
    console.log('[Server] gerando props par ao componente...')
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Dinamico(props) {

    return(
        <div>
            <h1>Dinamico</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}