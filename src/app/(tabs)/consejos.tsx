import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import TarjetaConsejo from '../../components/TarjetaConsejo';
import HeaderGlobal from '../../components/HeaderGlobal';

export default function PantallaConsejos() {

    // Función que se encarga de validar y abrir la URL en el navegador del teléfono
    const abrirEnlace = async (url: string) => {
        try {
            const puedeAbrirse = await Linking.canOpenURL(url);
            if (puedeAbrirse) {
                await Linking.openURL(url);
            } else {
                Alert.alert("Error", "No se puede abrir este enlace.");
            }
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al intentar abrir la página.");
        }
    };

    return (
        <View style={styles.pantallaFondo}>

            <HeaderGlobal />

            <ScrollView style={styles.contenedor} showsVerticalScrollIndicator={false}>

                {/* Títulos */}
                <View style={styles.seccionTitulos}>
                    <Text style={styles.tituloPrincipal}>Ideas o sugerencias</Text>
                    <Text style={styles.subtitulo}>Mantén un estilo de vida saludable con estos consejos.</Text>
                </View>

                {/* 1. Tarjeta Bienestar */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => abrirEnlace('https://medlineplus.gov/spanish/ency/article/002471.htm')}
                >
                    <TarjetaConsejo
                        categoria="Bienestar"
                        bgColorCategoria="#A7F3D0"
                        textColorCategoria="#065F46"
                        titulo="La importancia de la hidratación constante"
                        descripcion="Descubre por qué mantener un nivel óptimo de agua en tu cuerpo es vital para el funcionamiento celular y la..."
                        tiempoLectura="5 min de lectura"
                        imagenUrl="https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=800"
                    />
                </TouchableOpacity>

                {/* 2. Tarjeta Precaución */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => abrirEnlace('https://medlineplus.gov/spanish/drugreactions.html](https://medlineplus.gov/spanish/drugreactions.html')}
                >
                    <TarjetaConsejo
                        categoria="Precaución"
                        bgColorCategoria="#BFDBFE"
                        textColorCategoria="#1E40AF"
                        titulo="Interacciones medicamentosas a evitar"
                        descripcion="Una guía esencial sobre combinaciones comunes de medicamentos y alimentos que podrían reducir la eficacia de tus..."
                        tiempoLectura="8 min de lectura"
                        imagenUrl="https://tse2.mm.bing.net/th/id/OIP.C-sfQWXFfpQhqJ7V_j0vygHaFQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                    />
                </TouchableOpacity>

                {/* 3. Tarjeta Actividad Física */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => abrirEnlace('https://www.mayoclinic.org/es/healthy-lifestyle/fitness/in-depth/exercise-and-chronic-disease/art-20046049')}
                >
                    <TarjetaConsejo
                        categoria="Actividad Física"
                        bgColorCategoria="#1E1B4B"
                        textColorCategoria="#FFFFFF"
                        titulo="Ejercicio adaptado para condiciones crónicas"
                        descripcion="Rutinas de bajo impacto diseñadas específicamente para mantener la movilidad y fortalecer el cuerpo sin..."
                        tiempoLectura="6 min de lectura"
                        imagenUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800"
                    />
                </TouchableOpacity>

                {/* Margen final para la barra de navegación */}
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
    contenedor: {
        paddingHorizontal: 20,
    },
    seccionTitulos: {
        marginTop: 25,
        marginBottom: 20,
    },
    tituloPrincipal: {
        fontSize: 28,
        fontStyle: 'italic',
        fontWeight: '900',
        color: '#1E1B4B',
        marginBottom: 8,
    },
    subtitulo: {
        fontSize: 14,
        color: '#64748B',
        lineHeight: 20,
    }
});