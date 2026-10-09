import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import HeaderGlobal from '../../components/HeaderGlobal';

export default function PantallaRecetas() {
    const router = useRouter();

    return (
        <View style={styles.pantallaFondo}>

            <HeaderGlobal />

            <ScrollView style={styles.contenedorInterno} showsVerticalScrollIndicator={false}>

                <View style={styles.seccionTitulos}>
                    <Text style={styles.subtitulo}>Gestiona tus prescripciones médicas activas.</Text>
                </View>

                {/* --- TARJETA 1: --- */}
                <View style={styles.tarjeta}>
                    <View style={styles.formaDecorativa} />
                    <View style={styles.encabezadoTarjeta}>
                        <View style={styles.iconoMedFondo}>
                            <FontAwesome5 name="prescription-bottle-alt" size={16} color="#4338CA" />
                        </View>
                        <View style={[styles.etiquetaMomento, { backgroundColor: '#6EE7B7' }]}>
                            <Ionicons name="moon" size={12} color="#064E3B" style={styles.iconoEtiqueta} />
                            <Text style={[styles.textoEtiqueta, { color: '#064E3B' }]}>Noche</Text>
                        </View>
                    </View>
                    <Text style={styles.nombreMedicamento}>Atorvastatina</Text>
                    <View style={styles.filaDosis}>
                        <Ionicons name="link-outline" size={16} color="#4338CA" />
                        <Text style={styles.dosisMedicamento}>1 pastilla (20:00 PM)</Text>
                    </View>

                    <View style={styles.divisor} />

                    <TouchableOpacity
                        style={styles.botonEditar}
                        onPress={() => router.push({
                            pathname: '/formulario-receta',
                            params: {
                                modo: 'editar',
                                id: '1',
                                nombreParam: 'Atorvastatina',
                                dosisParam: '1 pastilla (20:00 PM)',
                                momentoParam: 'Noche'
                            }
                        })}
                    >
                        <Ionicons name="pencil" size={16} color="#4338CA" style={{ marginRight: 8 }} />
                        <Text style={styles.textoBotonEditar}>Editar receta</Text>
                    </TouchableOpacity>
                </View>

                {/* --- TARJETA 2: --- */}
                <View style={styles.tarjeta}>
                    <View style={styles.formaDecorativa} />
                    <View style={styles.encabezadoTarjeta}>
                        <View style={styles.iconoMedFondo}>
                            <FontAwesome5 name="prescription-bottle-alt" size={16} color="#4338CA" />
                        </View>
                        <View style={[styles.etiquetaMomento, { backgroundColor: '#BFDBFE' }]}>
                            <Ionicons name="sunny" size={14} color="#1E3A8A" style={styles.iconoEtiqueta} />
                            <Text style={[styles.textoEtiqueta, { color: '#1E3A8A' }]}>Desayuno</Text>
                        </View>
                    </View>
                    <Text style={styles.nombreMedicamento}>Metformina</Text>
                    <View style={styles.filaDosis}>
                        <Ionicons name="link-outline" size={16} color="#4338CA" />
                        <Text style={styles.dosisMedicamento}>1 pastilla (07:00 AM)</Text>
                    </View>

                    <View style={styles.divisor} />

                    <TouchableOpacity
                        style={styles.botonEditar}
                        onPress={() => router.push({
                            pathname: '/formulario-receta',
                            params: {
                                modo: 'editar',
                                id: '2',
                                nombreParam: 'Metformina',
                                dosisParam: '1 pastilla (07:00 AM)',
                                momentoParam: 'Desayuno'
                            }
                        })}
                    >
                        <Ionicons name="pencil" size={16} color="#4338CA" style={{ marginRight: 8 }} />
                        <Text style={styles.textoBotonEditar}>Editar receta</Text>
                    </TouchableOpacity>
                </View>

                {/* --- TARJETA 3: --- */}
                <View style={styles.tarjeta}>
                    <View style={styles.formaDecorativa} />
                    <View style={styles.encabezadoTarjeta}>
                        <View style={styles.iconoMedFondo}>
                            <FontAwesome5 name="prescription-bottle-alt" size={16} color="#4338CA" />
                        </View>
                        <View style={[styles.etiquetaMomento, { backgroundColor: '#FDE68A' }]}>
                            <Ionicons name="partly-sunny" size={14} color="#78350F" style={styles.iconoEtiqueta} />
                            <Text style={[styles.textoEtiqueta, { color: '#78350F' }]}>Mañana</Text>
                        </View>
                    </View>
                    <Text style={styles.nombreMedicamento}>Lisinopril - 10mg</Text>
                    <View style={styles.filaDosis}>
                        <Ionicons name="link-outline" size={16} color="#4338CA" />
                        <Text style={styles.dosisMedicamento}>1 pastilla (08:00 AM)</Text>
                    </View>

                    <View style={styles.divisor} />

                    <TouchableOpacity
                        style={styles.botonEditar}
                        onPress={() => router.push({
                            pathname: '/formulario-receta',
                            params: {
                                modo: 'editar',
                                id: '3',
                                nombreParam: 'Lisinopril - 10mg',
                                dosisParam: '1 pastilla (08:00 AM)',
                                momentoParam: 'Mañana'
                            }
                        })}
                    >
                        <Ionicons name="pencil" size={16} color="#4338CA" style={{ marginRight: 8 }} />
                        <Text style={styles.textoBotonEditar}>Editar receta</Text>
                    </TouchableOpacity>
                </View>

                {/* --- TARJETA 4: --- */}
                <View style={styles.tarjeta}>
                    <View style={styles.formaDecorativa} />
                    <View style={styles.encabezadoTarjeta}>
                        <View style={styles.iconoMedFondo}>
                            <FontAwesome5 name="prescription-bottle-alt" size={16} color="#4338CA" />
                        </View>
                        <View style={[styles.etiquetaMomento, { backgroundColor: '#FED7AA' }]}>
                            <Ionicons name="restaurant" size={14} color="#9A3412" style={styles.iconoEtiqueta} />
                            <Text style={[styles.textoEtiqueta, { color: '#9A3412' }]}>Almuerzo</Text>
                        </View>
                    </View>
                    <Text style={styles.nombreMedicamento}>Omeprazol - 20mg</Text>
                    <View style={styles.filaDosis}>
                        <Ionicons name="link-outline" size={16} color="#4338CA" />
                        <Text style={styles.dosisMedicamento}>1 cápsula (Antes de comer)</Text>
                    </View>

                    <View style={styles.divisor} />

                    <TouchableOpacity
                        style={styles.botonEditar}
                        onPress={() => router.push({
                            pathname: '/formulario-receta',
                            params: {
                                modo: 'editar',
                                id: '4',
                                nombreParam: 'Omeprazol - 20mg',
                                dosisParam: '1 cápsula (Antes de comer)',
                                momentoParam: 'Almuerzo'
                            }
                        })}
                    >
                        <Ionicons name="pencil" size={16} color="#4338CA" style={{ marginRight: 8 }} />
                        <Text style={styles.textoBotonEditar}>Editar receta</Text>
                    </TouchableOpacity>
                </View>

                {/* Espacio para la barra de navegación */}
                <View style={{ height: 120 }} />

            </ScrollView>

            {/* --- BOTÓN FLOTANTE PARA AGREGAR NUEVA RECETA (+) --- */}
            <TouchableOpacity
                style={styles.botonFlotante}
                onPress={() => router.push('/formulario-receta')}
            >
                <Ionicons name="add" size={36} color="#FFFFFF" />
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    pantallaFondo: {
        flex: 1,
        backgroundColor: '#F4F8FC',
    },
    contenedorInterno: {
        paddingHorizontal: 20,
    },
    seccionTitulos: {
        marginTop: 10,
        marginBottom: 25,
    },
    subtitulo: {
        fontSize: 16,
        color: '#64748B',
    },
    tarjeta: {
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        padding: 24,
        marginBottom: 20,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#4338CA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
    },
    formaDecorativa: {
        position: 'absolute',
        top: -50,
        right: -40,
        width: 180,
        height: 180,
        borderRadius: 90,
        backgroundColor: '#EBF4FF',
        zIndex: 0,
    },
    encabezadoTarjeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 15,
        zIndex: 1,
    },
    iconoMedFondo: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        width: 45,
        height: 45,
        borderRadius: 22.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    etiquetaMomento: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    iconoEtiqueta: {
        marginRight: 4,
    },
    textoEtiqueta: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    nombreMedicamento: {
        fontSize: 22,
        fontWeight: '900',
        color: '#0F172A',
        marginBottom: 8,
        zIndex: 1,
    },
    filaDosis: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        zIndex: 1,
    },
    dosisMedicamento: {
        fontSize: 14,
        fontWeight: '700',
        color: '#4338CA',
        marginLeft: 6,
    },
    divisor: {
        height: 1,
        backgroundColor: '#F1F5F9',
        marginBottom: 20,
    },
    botonEditar: {
        flexDirection: 'row',
        backgroundColor: '#EEF2FF',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E7FF',
    },
    textoBotonEditar: {
        color: '#4338CA',
        fontWeight: 'bold',
        fontSize: 14,
    },
    botonFlotante: {
        position: 'absolute',
        bottom: 110,
        right: 20,
        width: 65,
        height: 65,
        borderRadius: 32.5,
        backgroundColor: '#4338CA',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#4338CA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    }
});