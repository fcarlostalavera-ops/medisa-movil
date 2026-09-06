import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderGlobal from '../../components/HeaderGlobal';

export default function PantallaAlertas() {
  return (
    <View style={styles.pantallaFondo}>
      
      {/* Tu nuevo componente centralizado */}
      <HeaderGlobal />

      {/* Solo UN ScrollView que envuelve todo el contenido */}
      <ScrollView style={styles.contenedorInterno} showsVerticalScrollIndicator={false}>
        
        <View style={styles.seccionTitulos}>
          <Text style={styles.subtitulo}>Mantén al día tu medicación</Text>
        </View>

        {/* =======================================================
            ITEM 1: METFORMINA (TOMADA - DESAYUNO)
           ======================================================= */}
        <View style={styles.itemTimeline}>
          <View style={styles.columnaTimeline}>
            <View style={styles.nodoCompletado}>
              <Ionicons name="checkmark" size={16} color="#064E3B" />
            </View>
            <View style={styles.lineaConectora} />
          </View>

          <View style={styles.tarjetaContenedor}>
            <View style={styles.tarjeta}>
              <View style={styles.filaEncabezado}>
                <View style={[styles.etiqueta, { backgroundColor: '#D1FAE5' }]}>
                  <Text style={[styles.textoEtiqueta, { color: '#065F46' }]}>Tomada</Text>
                </View>
                <View style={styles.bloqueHora}>
                  <Text style={styles.horaTexto}>07:00</Text>
                  <Text style={styles.amPmTexto}>AM</Text>
                </View>
              </View>
              <Text style={styles.nombreMedicamento}>Metformina</Text>
              <Text style={styles.dosisTexto}>1 pastilla</Text>
            </View>
          </View>
        </View>

        {/* =======================================================
            ITEM 2: LISINOPRIL (TOMADA - MAÑANA)
           ======================================================= */}
        <View style={styles.itemTimeline}>
          <View style={styles.columnaTimeline}>
            <View style={styles.nodoCompletado}>
              <Ionicons name="checkmark" size={16} color="#064E3B" />
            </View>
            <View style={styles.lineaConectora} />
          </View>

          <View style={styles.tarjetaContenedor}>
            <View style={styles.tarjeta}>
              <View style={styles.filaEncabezado}>
                <View style={[styles.etiqueta, { backgroundColor: '#D1FAE5' }]}>
                  <Text style={[styles.textoEtiqueta, { color: '#065F46' }]}>Tomada</Text>
                </View>
                <View style={styles.bloqueHora}>
                  <Text style={styles.horaTexto}>08:00</Text>
                  <Text style={styles.amPmTexto}>AM</Text>
                </View>
              </View>
              <Text style={styles.nombreMedicamento}>Lisinopril - 10mg</Text>
              <Text style={styles.dosisTexto}>1 pastilla</Text>
            </View>
          </View>
        </View>

        {/* =======================================================
            ITEM 3: OMEPRAZOL (ACCIÓN REQUERIDA - ALMUERZO)
           ======================================================= */}
        <View style={styles.itemTimeline}>
          <View style={styles.columnaTimeline}>
            <View style={styles.nodoActivoAro}>
              <View style={styles.nodoActivoPunto} />
            </View>
            <View style={styles.lineaConectora} />
          </View>

          <View style={styles.tarjetaContenedor}>
            <View style={[styles.tarjeta, styles.tarjetaActiva]}>
              <View style={styles.filaEncabezado}>
                <View style={[styles.etiqueta, { backgroundColor: '#3B82F6' }]}>
                  <Text style={[styles.textoEtiqueta, { color: '#FFFFFF' }]}>Acción Requerida</Text>
                </View>
                <View style={styles.bloqueHora}>
                  <Text style={styles.horaTexto}>13:00</Text>
                  <Text style={styles.amPmTexto}>PM</Text>
                </View>
              </View>
              <Text style={styles.nombreMedicamento}>Omeprazol - 20mg</Text>
              <Text style={styles.dosisTexto}>1 cápsula (Antes de comer)</Text>

              <TouchableOpacity style={styles.botonMarcarTomada}>
                <Ionicons name="checkmark" size={18} color="#FFFFFF" style={{ marginRight: 8 }} />
                <Text style={styles.textoBotonMarcar}>Marcar como tomada</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* =======================================================
            ITEM 4: ATORVASTATINA (PRÓXIMA - NOCHE)
           ======================================================= */}
        <View style={styles.itemTimeline}>
          <View style={styles.columnaTimeline}>
            <View style={styles.nodoPendiente}>
              <Ionicons name="time-outline" size={16} color="#94A3B8" />
            </View>
            {/* Sin línea conectora porque es el último */}
          </View>

          <View style={styles.tarjetaContenedor}>
            <View style={styles.tarjeta}>
              <View style={styles.filaEncabezado}>
                <View style={[styles.etiqueta, { backgroundColor: '#F1F5F9' }]}>
                  <Text style={[styles.textoEtiqueta, { color: '#64748B' }]}>Próxima</Text>
                </View>
                <View style={styles.bloqueHora}>
                  <Text style={styles.horaTexto}>20:00</Text>
                  <Text style={styles.amPmTexto}>PM</Text>
                </View>
              </View>
              <Text style={styles.nombreMedicamento}>Atorvastatina</Text>
              <Text style={styles.dosisTexto}>1 pastilla</Text>
            </View>
          </View>
        </View>

        {/* Espaciador inferior */}
        <View style={{ height: 120 }} />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantallaFondo: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  contenedorInterno: {
    paddingHorizontal: 20,
  },
  seccionTitulos: {
    marginTop: 20,
    marginBottom: 25,
  },
  subtitulo: {
    fontSize: 16,
    color: '#334155',
  },
  itemTimeline: {
    flexDirection: 'row',
  },
  columnaTimeline: {
    width: 40,
    alignItems: 'center',
  },
  lineaConectora: {
    flex: 1,
    width: 2,
    backgroundColor: '#93C5FD',
    marginVertical: 4,
  },
  nodoCompletado: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6EE7B7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodoActivoAro: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#3B82F6',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nodoActivoPunto: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#3B82F6',
  },
  nodoPendiente: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjetaContenedor: {
    flex: 1,
    paddingLeft: 12,
    paddingBottom: 25,
  },
  tarjeta: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    elevation: 2,
    shadowColor: '#4338CA',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  tarjetaActiva: {
    borderColor: '#60A5FA',
    borderWidth: 1.5,
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  filaEncabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  etiqueta: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 15,
  },
  textoEtiqueta: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  bloqueHora: {
    alignItems: 'flex-end',
  },
  horaTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  amPmTexto: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#64748B',
  },
  nombreMedicamento: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 4,
  },
  dosisTexto: {
    fontSize: 14,
    color: '#64748B',
  },
  botonMarcarTomada: {
    marginTop: 15,
    backgroundColor: '#3B82F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 12,
  },
  textoBotonMarcar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  }
});