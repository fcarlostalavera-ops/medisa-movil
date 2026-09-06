import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TarjetaConsejo({ 
  categoria, 
  bgColorCategoria, 
  textColorCategoria, 
  titulo, 
  descripcion, 
  tiempoLectura, 
  imagenUrl 
}) {
  return(
    <View style={styles.tarjeta}>
      {/* Imagen Superior */}
      <View style={styles.contenedorImagen}>
        <Image source={{ uri: imagenUrl }} style={styles.imagen} />
        
        {/* Etiqueta flotante con colores dinámicos */}
        <View style={[styles.etiqueta, { backgroundColor: bgColorCategoria }]}>
          <Text style={[styles.textoEtiqueta, { color: textColorCategoria }]}>
            {categoria}
          </Text>
        </View>
      </View>

      {/* Contenido de texto */}
      <View style={styles.contenido}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.descripcion} numberOfLines={2}>{descripcion}</Text>
        
        {/* Pie de la tarjeta */}
        <View style={styles.pieTarjeta}>
          <Text style={styles.tiempo}>{tiempoLectura}</Text>
          
          <TouchableOpacity style={styles.botonFlecha}>
             <Ionicons name="arrow-forward" size={18} color="#4338CA" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6E8F0',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  contenedorImagen: {
    height: 150,
  },
  imagen:{
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  etiqueta: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  textoEtiqueta: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  contenido: {
    padding: 16,
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1B4B',
    marginBottom: 6,
  },
  descripcion: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 16,
    lineHeight: 20,
  },
  pieTarjeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tiempo: {
    fontSize: 12,
    color: '#94A3B8',
  },
  botonFlecha: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  }
});