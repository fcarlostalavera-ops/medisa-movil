import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PantallaLogin() {
  const router = useRouter();
  
  // Estados para manejar los inputs
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Función simulada para iniciar sesión
  const manejarLogin = () => {
    // Aquí en el futuro conectarás con tu backend (API REST)
    // Por ahora, al presionar "Ingresar", reemplazamos la ruta para ir al Dashboard
    // Usamos 'replace' en lugar de 'push' para que el usuario no pueda volver al Login dándole "Atrás"
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.pantallaFondo} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContenedor} showsVerticalScrollIndicator={false}>
        
        {/* --- SECCIÓN SUPERIOR: LOGO Y BIENVENIDA --- */}
        <View style={styles.seccionCabecera}>
          <Image 
            source={require('../../assets/images/Logo_Medisa.png')} 
            style={styles.logoImagen}
            resizeMode="contain" 
          />
          <Text style={styles.tituloSecundario}>Bienvenido de nuevo</Text>
          <Text style={styles.textoInstruccion}>Ingresa tus credenciales para continuar </Text>
        </View>

        {/* --- SECCIÓN CENTRAL: FORMULARIO --- */}
        <View style={styles.formulario}>
          
          {/* Input Correo */}
          <Text style={styles.etiquetaInput}>Correo Electrónico</Text>
          <View style={styles.contenedorInput}>
            <Ionicons name="mail-outline" size={20} color="#64748B" style={styles.iconoInput} />
            <TextInput 
              style={styles.input}
              placeholder="ejemplo@correo.com"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={correo}
              onChangeText={setCorreo}
            />
          </View>

          {/* Input Contraseña */}
          <Text style={styles.etiquetaInput}>Contraseña</Text>
          <View style={styles.contenedorInput}>
            <Ionicons name="lock-closed-outline" size={20} color="#64748B" style={styles.iconoInput} />
            <TextInput 
              style={styles.input}
              placeholder="••••••••"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!mostrarPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setMostrarPassword(!mostrarPassword)}>
              <Ionicons 
                name={mostrarPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#64748B" 
              />
            </TouchableOpacity>
          </View>

          {/* Olvidé mi contraseña */}
          <TouchableOpacity style={styles.botonOlvido}>
            <Text style={styles.textoOlvido}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          {/* Botón Principal de Ingreso */}
          <TouchableOpacity style={styles.botonIngresar} onPress={manejarLogin}>
            <Text style={styles.textoBotonIngresar}>Ingresar</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
          
        </View>

        {/* --- SECCIÓN INFERIOR: REGISTRO --- */}
        <View style={styles.seccionRegistro}>
          <Text style={styles.textoGris}>¿No tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => router.push('/registro')}>
            <Text style={styles.textoRegistrarse}>Regístrate aquí</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  pantallaFondo: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },
  scrollContenedor: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 40,
  },
  seccionCabecera: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoImagen: {
    width: 200,
    height: 60,
    marginBottom: 30,
  },
  tituloSecundario: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0B0F3B',
    marginBottom: 8,
  },
  textoInstruccion: {
    fontSize: 16,
    color: '#64748B',
    textAlign: 'center',
  },
  formulario: {
    width: '100%',
  },
  etiquetaInput: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 8,
    marginLeft: 4,
  },
  contenedorInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 55,
    // Sombra sutil
    elevation: 2,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 5,
  },
  iconoInput: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#0F172A',
    height: '100%',
  },
  botonOlvido: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  textoOlvido: {
    color: '#4338CA',
    fontSize: 14,
    fontWeight: '600',
  },
  botonIngresar: {
    flexDirection: 'row',
    backgroundColor: '#4338CA',
    borderRadius: 16,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  textoBotonIngresar: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seccionRegistro: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  textoGris: {
    color: '#64748B',
    fontSize: 15,
  },
  textoRegistrarse: {
    color: '#4338CA',
    fontSize: 15,
    fontWeight: 'bold',
  }
});