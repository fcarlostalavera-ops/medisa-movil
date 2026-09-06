import { Redirect } from 'expo-router';

export default function IndexInicial() {
  // Ahora la app arranca en el login
  return <Redirect href="/login" />;
}