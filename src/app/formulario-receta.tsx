import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function FormularioReceta() {
    const router = useRouter();

    const params = useLocalSearchParams();
    const modo = params.modo as string | undefined;
    const nombreParam = params.nombreParam as string | undefined;
    const dosisParam = params.dosisParam as string | undefined;
    const momentoParam = params.momentoParam as string | undefined;

    const esEdicion = modo === 'editar';

    const [nombre, setNombre] = useState(esEdicion && nombreParam ? nombreParam : '');
    const [dosis, setDosis] = useState(esEdicion && dosisParam ? dosisParam : '');
    const [momento, setMomento] = useState(esEdicion && momentoParam ? momentoParam : 'Mañana');

    const manejarGuardar = () => {
        if (!nombre.trim() || !dosis.trim()) {
            Alert.alert("Error", "Por favor completa el nombre y la dosis del medicamento.");
            return;
        }

        // Aquí iría el fetch() a Node.js / Prisma para guardar en la BD
        console.log("Guardando receta:", { nombre, dosis, momento });

        Alert.alert(
            "¡Éxito!",
            `Receta ${esEdicion ? 'actualizada' : 'guardada'} correctamente.`,
            [{ text: "OK", onPress: () => router.back() }]
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.pantallaFondo}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.botonRetroceso}>
                    <Ionicons name="chevron-back" size={28} color="#0B0F3B" />
                </TouchableOpacity>
                <Text style={styles.tituloHeader}>{esEdicion ? 'Editar Receta' : 'Nueva Receta'}</Text>
                <View style={{ width: 28 }} />
            </View>

            <ScrollView style={styles.contenedorInterno} showsVerticalScrollIndicator={false}>

                <Text style={styles.etiquetaInput}>Nombre del Medicamento</Text>
                <View style={styles.contenedorInput}>
                    <Ionicons name="medical" size={20} color="#94A3B8" style={styles.iconoInput} />
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: Ibuprofeno, Amoxicilina..."
                        value={nombre}
                        onChangeText={setNombre}
                        placeholderTextColor="#94A3B8"
                    />
                </View>

                <Text style={styles.etiquetaInput}>Dosis (Cantidad y hora)</Text>
                <View style={styles.contenedorInput}>
                    <Ionicons name="list" size={20} color="#94A3B8" style={styles.iconoInput} />
                    <TextInput
                        style={styles.input}
                        placeholder="Ej: 1 pastilla (08:00 AM)"
                        value={dosis}
                        onChangeText={setDosis}
                        placeholderTextColor="#94A3B8"
                    />
                </View>

                <Text style={styles.etiquetaInput}>Momento del día</Text>
                <View style={styles.filaMomentos}>
                    {['Desayuno', 'Mañana', 'Almuerzo', 'Noche'].map((opcion) => (
                        <TouchableOpacity
                            key={opcion}
                            style={[
                                styles.botonMomento,
                                momento === opcion && styles.botonMomentoSeleccionado
                            ]}
                            onPress={() => setMomento(opcion)}
                        >
                            <Text style={[
                                styles.textoMomento,
                                momento === opcion && styles.textoMomentoSeleccionado
                            ]}>
                                {opcion}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity style={styles.botonGuardar} onPress={manejarGuardar}>
                    <Text style={styles.textoBotonGuardar}>{esEdicion ? 'Actualizar Receta' : 'Guardar Receta'}</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    pantallaFondo: {
        flex: 1,
        backgroundColor: '#F4F8FC',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    botonRetroceso: {
        padding: 5,
    },
    tituloHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0B0F3B',
    },
    contenedorInterno: {
        padding: 20,
    },
    etiquetaInput: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#475569',
        marginBottom: 8,
        marginTop: 15,
    },
    contenedorInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
    },
    iconoInput: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#0F172A',
    },
    filaMomentos: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    botonMomento: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    botonMomentoSeleccionado: {
        backgroundColor: '#4338CA',
        borderColor: '#4338CA',
    },
    textoMomento: {
        color: '#64748B',
        fontWeight: '600',
    },
    textoMomentoSeleccionado: {
        color: '#FFFFFF',
    },
    botonGuardar: {
        backgroundColor: '#0B0F3B',
        borderRadius: 12,
        paddingVertical: 16,
        alignItems: 'center',
        marginTop: 40,
    },
    textoBotonGuardar: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    }
});