import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function PantallaRegistro() {
  const router = useRouter();
  
  // Estados para el formulario
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmarPassword, setConfirmarPassword] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);

  // Función para manejar la creación de la cuenta
  const manejarRegistro = () => {
    // Aquí conectarás con tu API para hacer el INSERT en la base de datos.
    // Tras un registro exitoso, normalmente enviamos al usuario directo al dashboard:
    router.replace('/(tabs)');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.pantallaFondo} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContenedor} showsVerticalScrollIndicator={false}>
        
        {/* --- CABECERA: BOTÓN ATRÁS Y TÍTULOS --- */}
        <View style={styles.seccionCabecera}>
          <TouchableOpacity 
            style={styles.botonAtras} 
            onPress={() => router.back()} // Esto regresa al Login automáticamente
          >
            <Ionicons name="arrow-back" size={24} color="#0F172A" />
          </TouchableOpacity>
          
          <Text style={styles.tituloPrincipal}>Crea tu cuenta</Text>
          <Text style={styles.textoInstruccion}>Únete a Medisa y toma el control de tu salud hoy mismo.</Text>
        </View>

        {/* --- FORMULARIO DE REGISTRO --- */}
        <View style={styles.formulario}>
          
          {/* Input Nombre Completo */}
          <Text style={styles.etiquetaInput}>Nombre Completo</Text>
          <View style={styles.contenedorInput}>
            <Ionicons name="person-outline" size={20} color="#64748B" style={styles.iconoInput} />
            <TextInput 
              style={styles.input}
              placeholder="Ej. Elena García"
              placeholderTextColor="#94A3B8"
              autoCapitalize="words"
              value={nombre}
              onChangeText={setNombre}
            />
          </View>

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
              placeholder="Mínimo 8 caracteres"
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

          {/* Input Confirmar Contraseña */}
          <Text style={styles.etiquetaInput}>Confirmar Contraseña</Text>
          <View style={styles.contenedorInput}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#64748B" style={styles.iconoInput} />
            <TextInput 
              style={styles.input}
              placeholder="Repite tu contraseña"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!mostrarPassword}
              value={confirmarPassword}
              onChangeText={setConfirmarPassword}
            />
          </View>

          {/* Botón Principal de Registro */}
          <TouchableOpacity style={styles.botonRegistrar} onPress={manejarRegistro}>
            <Text style={styles.textoBotonRegistrar}>Crear Cuenta</Text>
            <Ionicons name="checkmark-circle-outline" size={20} color="#FFFFFF" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
          
        </View>

        {/* --- PIE DE PÁGINA: IR A LOGIN --- */}
        <View style={styles.seccionLogin}>
          <Text style={styles.textoGris}>¿Ya tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.textoIniciaSesion}>Inicia sesión</Text>
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
    marginBottom: 35,
    marginTop: 20,
  },
  botonAtras: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tituloPrincipal: {
    fontSize: 32,
    fontWeight: '900',
    color: '#0B0F3B',
    marginBottom: 10,
  },
  textoInstruccion: {
    fontSize: 16,
    color: '#64748B',
    lineHeight: 24,
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
  botonRegistrar: {
    flexDirection: 'row',
    backgroundColor: '#4338CA',
    borderRadius: 16,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 4,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  textoBotonRegistrar: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seccionLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 35,
  },
  textoGris: {
    color: '#64748B',
    fontSize: 15,
  },
  textoIniciaSesion: {
    color: '#4338CA',
    fontSize: 15,
    fontWeight: 'bold',
  }
});