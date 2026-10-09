import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import HeaderGlobal from '../../components/HeaderGlobal';

export default function PantallaInicio() {
    // 1. Estados para el medicamento
    const [tarjetaVisible, setTarjetaVisible] = useState(true);
    const [fueTomado, setFueTomado] = useState(false);

    // 2. Función para registrar la pastilla
    const manejarTomarMedicamento = () => {
        setFueTomado(true);
        Alert.alert("¡Excelente!", "Has registrado tu medicamento como tomado.");
    };

    // 3. Función para eliminar la tarjeta
    const manejarEliminarMedicamento = () => {
        Alert.alert(
            "Eliminar recordatorio",
            "¿Estás seguro de que deseas eliminar este medicamento de tu inicio?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => setTarjetaVisible(false)
                }
            ]
        );
    };

    return (
        <View style={styles.pantallaFondo}>

            <HeaderGlobal />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.contenedorInterno}>

                    {/* --- TÍTULOS --- */}
                    <View style={styles.seccionTitulos}>
                        <Text style={styles.tituloPrincipal}>Protocolo de Hoy</Text>
                        <Text style={styles.subtitulo}>Mantén el rumbo en tu viaje de bienestar.</Text>
                    </View>

                    {/* --- TARJETA 1: ADHERENCIA (Tu diseño intacto) --- */}
                    <View style={styles.tarjeta}>
                        <Text style={styles.tituloTarjeta}>Adherencia</Text>

                        <View style={styles.contenedorGraficaCircular}>
                            <View style={styles.circuloFondo}>
                                <View style={styles.circuloProgreso}>
                                    <Text style={styles.textoPorcentaje}>75%</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={styles.textoSecundarioCentral}>3 de 4 medicamentos tomados</Text>
                    </View>

                    {/* --- TARJETA 2: PRÓXIMO MEDICAMENTO --- */}
                    {tarjetaVisible ? (
                        <View style={styles.tarjeta}>

                            {/* Fila superior con etiqueta e íconos */}
                            <View style={styles.filaSuperiorMed}>
                                <View style={styles.etiquetaProximo}>
                                    <Text style={styles.textoEtiquetaProximo}>
                                        {fueTomado ? "Completado" : "Próximo"}
                                    </Text>
                                </View>

                                {/* Contenedor para alinear los íconos a la derecha */}
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                    {/* Botón de eliminar (solo visible si no se ha tomado) */}
                                    {!fueTomado && (
                                        <TouchableOpacity
                                            onPress={manejarEliminarMedicamento}
                                            style={styles.botonEliminarIcono}
                                        >
                                            <Ionicons name="trash-outline" size={20} color="#EF4444" />
                                        </TouchableOpacity>
                                    )}

                                    <View style={[styles.iconoMedFondo, fueTomado && { backgroundColor: '#D1FAE5' }]}>
                                        <FontAwesome5
                                            name="prescription-bottle-alt"
                                            size={16}
                                            color={fueTomado ? "#059669" : "#0B0F3B"}
                                        />
                                    </View>
                                </View>
                            </View>

                            {/* Información del medicamento */}
                            <Text style={[styles.nombreMedicamento, fueTomado && styles.textoTachado]}>
                                Lisinopril - 10mg
                            </Text>

                            <View style={styles.filaHora}>
                                <Ionicons name="time-outline" size={16} color="#64748B" />
                                <Text style={styles.textoHora}>
                                    {fueTomado ? "Tomado hoy a las 08:00 AM" : "08:00 AM"}
                                </Text>
                            </View>

                            {/* Botón (desaparece si ya se tomó) */}
                            {!fueTomado && (
                                <TouchableOpacity style={styles.botonPrimario} onPress={manejarTomarMedicamento}>
                                    <Text style={styles.textoBotonPrimario}>Registrar como tomada</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    ) : (
                        // Vista cuando se elimina la tarjeta
                        <View style={styles.estadoVacio}>
                            <Ionicons name="checkmark-done-circle-outline" size={48} color="#54D69E" />
                            <Text style={styles.textoVacio}>No tienes más medicamentos programados.</Text>
                        </View>
                    )}

                    {/* --- FILA DE MÉTRICAS (Tu diseño intacto) --- */}
                    <View style={styles.filaTarjetasPequenas}>

                        {/* Tarjeta 3A: Frecuencia Cardíaca */}
                        <View style={[styles.tarjeta, styles.tarjetaMitad]}>
                            <View style={styles.encabezadoMetrica}>
                                <Ionicons name="heart" size={18} color="#4338CA" />
                                <Text style={styles.tituloMetricaColor}>Frecuencia{"\n"}Cardíaca</Text>
                            </View>

                            <View style={styles.filaValor}>
                                <Text style={styles.valorGrande}>72</Text>
                                <Text style={styles.unidadPequena}> lpm</Text>
                            </View>
                            <MaterialCommunityIcons name="waveform" size={45} color="#4338CA" style={{ marginTop: 10, alignSelf: 'center' }} />
                        </View>

                        {/* Tarjeta 3B: Presión Arterial */}
                        <View style={[styles.tarjeta, styles.tarjetaMitad]}>
                            <View style={styles.encabezadoMetrica}>
                                <Ionicons name="water" size={18} color="#54D69E" />
                                <Text style={styles.tituloMetricaNegro}>PA</Text>
                            </View>

                            <Text style={[styles.valorGrande, { marginTop: 15 }]}>120/80</Text>

                            <View style={styles.graficaBarras}>
                                <View style={[styles.barra, { height: 12 }]} />
                                <View style={[styles.barra, { height: 18 }]} />
                                <View style={[styles.barra, { height: 14 }]} />
                                <View style={[styles.barra, { height: 24 }]} />
                                <View style={[styles.barra, { height: 16 }]} />
                            </View>
                        </View>

                    </View>

                    <View style={{ height: 100 }} />

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pantallaFondo: {
        flex: 1,
        backgroundColor: '#F0F8FF',
    },
    contenedorInterno: {
        paddingHorizontal: 20,
    },
    seccionTitulos: {
        marginTop: 10,
        marginBottom: 20,
    },
    tituloPrincipal: {
        fontSize: 26,
        fontStyle: 'italic',
        fontWeight: '900',
        color: '#0B0F3B',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 14,
        color: '#64748B',
    },
    tarjeta: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        marginBottom: 15,
        shadowColor: '#4338CA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 3,
    },
    tituloTarjeta: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0B0F3B',
        marginBottom: 20,
    },
    contenedorGraficaCircular: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    circuloFondo: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#F1F5F9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circuloProgreso: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 12,
        borderColor: '#54D69E',
        borderLeftColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    textoPorcentaje: {
        fontSize: 36,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#0B0F3B',
    },
    textoSecundarioCentral: {
        textAlign: 'center',
        color: '#64748B',
        fontSize: 12,
        marginTop: 15,
    },
    filaSuperiorMed: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    etiquetaProximo: {
        backgroundColor: '#E2E8F0',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 15,
    },
    textoEtiquetaProximo: {
        color: '#475569',
        fontSize: 12,
        fontWeight: '600',
    },
    iconoMedFondo: {
        backgroundColor: '#EEF2FF',
        width: 36,
        height: 36,
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonEliminarIcono: {
        marginRight: 15,
        padding: 5,
    },
    nombreMedicamento: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0B0F3B',
        marginBottom: 8,
    },
    textoTachado: {
        textDecorationLine: 'line-through',
        color: '#94A3B8',
    },
    filaHora: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    textoHora: {
        color: '#64748B',
        marginLeft: 6,
        fontSize: 14,
    },
    botonPrimario: {
        backgroundColor: '#0B0F3B',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
    },
    textoBotonPrimario: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
    },
    estadoVacio: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 30,
        borderWidth: 1,
        borderColor: '#F1F5F9',
        marginBottom: 15,
    },
    textoVacio: {
        marginTop: 10,
        color: '#64748B',
        fontSize: 14,
        textAlign: 'center',
    },
    filaTarjetasPequenas: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tarjetaMitad: {
        width: '48%',
        padding: 15,
    },
    encabezadoMetrica: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    tituloMetricaColor: {
        color: '#4338CA',
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 6,
    },
    tituloMetricaNegro: {
        color: '#0B0F3B',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 6,
    },
    filaValor: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 15,
    },
    valorGrande: {
        fontSize: 24,
        fontWeight: '900',
        fontStyle: 'italic',
        color: '#0B0F3B',
    },
    unidadPequena: {
        fontSize: 12,
        color: '#64748B',
    },
    graficaBarras: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 30,
        marginTop: 20,
    },
    barra: {
        width: 6,
        backgroundColor: '#54D69E',
        borderRadius: 3,
    }
});