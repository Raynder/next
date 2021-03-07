import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Bem vindo!</h1>

            <Link href="/sobre">
                <a>Acessar pagina sobre<br></br></a>
            </Link>
            <Link href="/tempo">
                <a>Acessar pagina tempo</a>
            </Link>
        </div>)
}

export default Home