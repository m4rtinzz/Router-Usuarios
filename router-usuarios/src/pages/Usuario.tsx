import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// 1. Definindo a interface para o usuário com os atributos que você pediu.
// A API retorna mais campos, mas vamos focar nos que você solicitou.
interface FakeStoreUser {
  id: number;
  username: string;
  email: string;
  password?: string; // O password é retornado, mas geralmente não o exibimos.
}

function Usuario() {
  const { id } = useParams();
  // 2. Estados para armazenar o usuário, o status de carregamento e possíveis erros.
  const [user, setUser] = useState<FakeStoreUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // 3. O useEffect faz a chamada à API quando o componente é montado ou o 'id' muda.
  useEffect(() => {
    // Função assíncrona para buscar os dados
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Usuário não encontrado');
        }
        const data: FakeStoreUser = await response.json();
        setUser(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]); // O hook executa novamente se o 'id' na URL mudar

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>Detalhes do Usuário</h1>
      {user ? (
        <ul>
          <li><strong>ID:</strong> {user.id}</li>
          <li><strong>Username:</strong> {user.username}</li>
          <li><strong>Email:</strong> {user.email}</li>
        </ul>
      ) : (
        <p>Nenhum usuário para exibir.</p>
      )}
    </div>
  );
}

export default Usuario;