import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HeaderGlobal({ mostrarRegresar = false }) {
    const router = useRouter();

    return (
        <View style={styles.headerGlobal}>
            {/* Condición: Si mostrarRegresar es true, muestra la flecha. Si no, muestra el menú */}
            {mostrarRegresar ? (
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={28} color="#0B0F3B" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity>
                    <Ionicons name="menu" size={26} color="#0B0F3B" />
                </TouchableOpacity>
            )}

            {/* Logo oficial */}
            <Image
                source={require('../../assets/images/Logo_Medisa.png')}
                style={styles.logoImagen}
                resizeMode="contain"
            />

            {/* El botón del Avatar (puedes deshabilitarlo condicionalmente si ya estás en el perfil) */}
            <TouchableOpacity
                style={styles.avatarPequeno}
                onPress={() => {
                    if (!mostrarRegresar) router.push('/perfil');
                }}
            >
                <Image
                    source={require('../../assets/images/Perfil_Empresaria.jpg')}
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