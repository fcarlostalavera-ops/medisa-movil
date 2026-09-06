import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HeaderGlobal() {
  // Inicializamos el enrutador
  const router = useRouter();

  return (
    <View style={styles.headerGlobal}>
      {/* Menú hamburguesa */}
      <TouchableOpacity>
        <Ionicons name="menu" size={26} color="#0B0F3B" />
      </TouchableOpacity>

      {/* Tu Logo oficial */}
      <Image 
        source={require('../../assets/images/Logo_Medisa.png')} 
        style={styles.logoImagen}
        resizeMode="contain" 
      />

      {/* El botón del Avatar que ahora tiene la acción onPress */}
      <TouchableOpacity 
        style={styles.avatarPequeno} 
        onPress={() => router.push('/perfil')} // <-- Esto hace la magia
      >
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' }} 
          style={styles.imagenAvatarPequeno} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerGlobal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: 'transparent',
  },
  logoImagen: {
    height: 35,
    width: 120,
  },
  avatarPequeno: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#E0E7FF',
  },
  imagenAvatarPequeno: {
    width: '100%',
    height: '100%',
  }
});