import { useParams } from 'react-router-dom'

function Usuario() {
const { id } = useParams()

//Aqui você faz a chamada à FakeStoreAPI para buscar o usuário pelo ID



return (
<div>
<h1>Usuário ID:</h1>
<p>Esta é a página de detalhes do usuário.</p>
</div>
)
}

export default Usuario