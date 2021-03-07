import Link from 'next/link';

function Home() {
    return (<div>
        <h1>Bem vindo!</h1>

            <Link href="/sobre">
                <a>Acessar pagina sobre</a>
            </Link>
        </div>)
}

export default Home