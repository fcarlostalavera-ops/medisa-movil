import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function PantallaPerfil() {
  return (
    <View style={styles.pantallaFondo}>
      
      {/* --- HEADER SUPERIOR GLOBAL --- */}
      <View style={styles.headerGlobal}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="#0B0F3B" />
        </TouchableOpacity>

        {/* Ruta ajustada por estar fuera de la carpeta (tabs) */}
        <Image 
          source={require('../../assets/images/Logo_Medisa.png')} 
          style={styles.logoImagen}
          resizeMode="contain" 
        />

        <View style={styles.avatarPequeno}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' }} 
            style={styles.imagenAvatarPequeno} 
          />
        </View>
      </View>

      <ScrollView style={styles.contenedorInterno} showsVerticalScrollIndicator={false}>
        
        {/* ==========================================
            TARJETA 1: PERFIL PRINCIPAL
            ========================================== */}
        <View style={[styles.tarjeta, styles.tarjetaCentrada]}>
          <View style={styles.contenedorAvatarGrande}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' }} 
              style={styles.avatarGrande} 
            />
            <TouchableOpacity style={styles.botonEditarFoto}>
              <Ionicons name="pencil" size={12} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.nombreUsuario}>Elena García</Text>
          
          <View style={styles.etiquetaPremium}>
            <MaterialCommunityIcons name="badge-account" size={14} color="#059669" />
            <Text style={styles.textoPremium}>PACIENTE PREMIUM</Text>
          </View>
          
          <Text style={styles.textoMiembro}>Miembro desde Abril 2023</Text>

          <View style={styles.filaBotones}>
            <TouchableOpacity style={styles.botonPrimario}>
              <Text style={styles.textoBotonPrimario}>Editar Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonSecundario}>
              <Text style={styles.textoBotonSecundario}>Compartir</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==========================================
            TARJETA 2: INFORMACIÓN PERSONAL
            ========================================== */}
        <View style={styles.tarjeta}>
          <View style={styles.encabezadoSeccion}>
            <MaterialCommunityIcons name="card-account-details-outline" size={24} color="#4338CA" />
            <Text style={styles.tituloSeccion}>Información Personal</Text>
          </View>

          <View style={styles.filaInfo}>
            <View style={styles.iconoFondoGris}>
              <Ionicons name="mail-outline" size={18} color="#64748B" />
            </View>
            <View style={styles.textosInfo}>
              <Text style={styles.etiquetaInfo}>Correo Electrónico</Text>
              <Text style={styles.valorInfo}>elena.garcia@email.com</Text>
            </View>
          </View>

          <View style={styles.filaInfo}>
            <View style={styles.iconoFondoGris}>
              <Ionicons name="phone-portrait-outline" size={18} color="#64748B" />
            </View>
            <View style={styles.textosInfo}>
              <Text style={styles.etiquetaInfo}>Teléfono</Text>
              <Text style={styles.valorInfo}>+34 600 123 456</Text>
            </View>
          </View>

          <View style={[styles.filaInfo, { borderBottomWidth: 0, marginBottom: 0 }]}>
            <View style={styles.iconoFondoGris}>
              <Ionicons name="calendar-outline" size={18} color="#64748B" />
            </View>
            <View style={styles.textosInfo}>
              <Text style={styles.etiquetaInfo}>Fecha de Nacimiento</Text>
              <Text style={styles.valorInfo}>15 de Marzo, 1985</Text>
            </View>
          </View>
        </View>

        {/* ==========================================
            TARJETA 3: RESUMEN MÉDICO
            ========================================== */}
        <View style={styles.tarjeta}>
          <View style={styles.encabezadoSeccion}>
            <MaterialCommunityIcons name="medical-bag" size={24} color="#4338CA" />
            <Text style={styles.tituloSeccion}>Resumen Médico</Text>
          </View>

          <Text style={styles.etiquetaInfo}>Condiciones Crónicas</Text>
          <View style={styles.filaPildoras}>
            <View style={[styles.pildora, { backgroundColor: '#FEE2E2' }]}>
              <Text style={[styles.textoPildora, { color: '#B91C1C' }]}>Hipertensión</Text>
            </View>
            <View style={[styles.pildora, { backgroundColor: '#E0E7FF' }]}>
              <Text style={[styles.textoPildora, { color: '#4338CA' }]}>Asma Leve</Text>
            </View>
          </View>

          <View style={styles.gridMedico}>
            <View style={styles.cajaGrid}>
              <View style={styles.encabezadoCajaGrid}>
                <Ionicons name="water-outline" size={14} color="#64748B" />
                <Text style={styles.etiquetaGrid}>Grupo Sanguíneo</Text>
              </View>
              <Text style={styles.valorGrid}>O Positivo</Text>
            </View>

            <View style={styles.cajaGrid}>
              <View style={styles.encabezadoCajaGrid}>
                <MaterialCommunityIcons name="stethoscope" size={14} color="#64748B" />
                <Text style={styles.etiquetaGrid}>Médico Principal</Text>
              </View>
              <Text style={styles.valorGrid}>Dr. A. Martínez</Text>
            </View>
          </View>
        </View>

        {/* ==========================================
            TARJETA 4: AJUSTES DE CUENTA
            ========================================== */}
        <View style={styles.tarjeta}>
          <Text style={styles.tituloSeccion}>Ajustes de Cuenta</Text>

          <TouchableOpacity style={styles.filaAjuste}>
            <View style={styles.iconoAjusteGrisOscuro}>
              <Ionicons name="notifications" size={18} color="#FFFFFF" />
            </View>
            <Text style={styles.textoAjuste}>Notificaciones</Text>
            <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filaAjuste}>
            <View style={styles.iconoAjusteGrisOscuro}>
              <Ionicons name="shield-checkmark" size={18} color="#FFFFFF" />
            </View>
            <Text style={styles.textoAjuste}>Seguridad y Privacidad</Text>
            <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.filaAjuste}>
            <View style={styles.iconoAjusteGrisOscuro}>
              <Ionicons name="sync" size={18} color="#FFFFFF" />
            </View>
            <Text style={styles.textoAjuste}>Sincronización de Dispositivos</Text>
            <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.filaAjuste, { borderBottomWidth: 0, marginBottom: 0 }]}>
            <View style={styles.iconoAjusteGrisOscuro}>
              <Ionicons name="help-circle" size={18} color="#FFFFFF" />
            </View>
            <Text style={styles.textoAjuste}>Ayuda</Text>
            <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
          </TouchableOpacity>
        </View>

        {/* --- BOTÓN CERRAR SESIÓN --- */}
        <TouchableOpacity style={styles.botonCerrarSesion}>
          <Ionicons name="log-out-outline" size={20} color="#EF4444" style={{ marginRight: 8 }} />
          <Text style={styles.textoCerrarSesion}>Cerrar sesión</Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantallaFondo: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  headerGlobal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
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
  },
  imagenAvatarPequeno: {
    width: '100%',
    height: '100%',
  },
  contenedorInterno: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tarjetaCentrada: {
    alignItems: 'center',
  },
  // --- Avatar Principal ---
  contenedorAvatarGrande: {
    position: 'relative',
    marginBottom: 15,
  },
  avatarGrande: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#EEF2FF',
  },
  botonEditarFoto: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#1E1B4B',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  nombreUsuario: {
    fontSize: 24,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#0F172A',
    marginBottom: 8,
  },
  etiquetaPremium: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 8,
  },
  textoPremium: {
    color: '#059669',
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  textoMiembro: {
    color: '#64748B',
    fontSize: 12,
    marginBottom: 20,
  },
  // --- Botones Perfil ---
  filaBotones: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  botonPrimario: {
    flex: 1,
    backgroundColor: '#4338CA',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 10,
  },
  textoBotonPrimario: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  botonSecundario: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#4338CA',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoBotonSecundario: {
    color: '#4338CA',
    fontWeight: 'bold',
    fontSize: 14,
  },
  // --- Info Personal ---
  encabezadoSeccion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
    marginLeft: 8,
  },
  filaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingBottom: 15,
    marginBottom: 15,
  },
  iconoFondoGris: {
    width: 40,
    height: 40,
    backgroundColor: '#F1F5F9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textosInfo: {
    flex: 1,
  },
  etiquetaInfo: {
    fontSize: 12,
    color: '#64748B',
    marginBottom: 2,
  },
  valorInfo: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
  // --- Resumen Médico ---
  filaPildoras: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 20,
  },
  pildora: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginRight: 10,
  },
  textoPildora: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  gridMedico: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cajaGrid: {
    width: '48%',
    backgroundColor: '#F8FAFC',
    padding: 15,
    borderRadius: 16,
  },
  encabezadoCajaGrid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  etiquetaGrid: {
    fontSize: 10,
    color: '#64748B',
    marginLeft: 4,
  },
  valorGrid: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  // --- Ajustes ---
  filaAjuste: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    paddingVertical: 15,
  },
  iconoAjusteGrisOscuro: {
    width: 36,
    height: 36,
    backgroundColor: '#1E1B4B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textoAjuste: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#0F172A',
  },
  // --- Botón Cerrar Sesión ---
  botonCerrarSesion: {
    flexDirection: 'row',
    backgroundColor: '#FEF2F2',
    borderWidth: 1,
    borderColor: '#FECACA',
    paddingVertical: 15,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  textoCerrarSesion: {
    color: '#EF4444',
    fontWeight: 'bold',
    fontSize: 16,
  }
});