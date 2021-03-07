import Link from 'next/link';

function Sobre() {
    return (<div>
        <h1>Bem vindo a pagina sobre!</h1>

        <Link href="/">
            <a>Acessar pagina index</a>
        </Link>
    </div>)
}

export default Sobre