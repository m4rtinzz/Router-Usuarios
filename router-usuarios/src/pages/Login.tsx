import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login = ({ onLoginSuccess }: LoginProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const message = location.state?.message;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        onLoginSuccess();
        alert('Login bem-sucedido!');
      } else {
        // Exibe a mensagem de erro da API
        alert(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error('Falha na requisição de login:', error);
      alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {message && <p className="login-message">{message}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
