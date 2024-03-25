import { View, StyleSheet, Pressable, Text, TouchableOpacity } from "react-native";
import * as Clipboard from 'expo-clipboard';
import Armazenamento from '../hooks/bancoTokens';

export function ModalTokens({ fechar, token }) {
    const { salvarItem } = Armazenamento();

    async function copiarToken() {
        await Clipboard.setStringAsync(token)
        alert("Token copiado para área de transferência.")
        fechar();
    }

    async function salvarToken() {
        await salvarItem("@token", token)
        alert(`Token ${token} salvo com sucesso`)
        fechar();
    }

    return (
        <View style={ESTILO.container}>
            <View style={ESTILO.content}>
                <Text style={ESTILO.title}>
                    Senha Gerada
                </Text>
                <Pressable style={ESTILO.innerToken} >
                    <Text style={ESTILO.text} selectable={false} onLongPress={copiarToken}>
                        {token}
                    </Text>
                </Pressable>
                <View style={ESTILO.buttonArea}>
                    <TouchableOpacity style={ESTILO.button} onPress={fechar}>
                        <Text style={ESTILO.buttonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ESTILO.button, ESTILO.buttonSave]} onPress={salvarToken}>
                        <Text style={ESTILO.buttonSaveText}>
                            Salvar Senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        backgroundColor: "rgba(25,25,25,0.6)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: "#FFF",
        width: "85%",
        paddingTop: 25,
        paddingBottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 25,
    },
    innerToken: {
        backgroundColor: "#0e0e0e",
        width: "85%",
        padding: 14,
        borderRadius: 8
    },
    text: {
        color: "#FFF",
        textAlign: "center"
    },
    buttonArea: {
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        flex: 1,
        alignItems: "center",
        marginBottom: 14,
        marginTop: 14,
        margin: 9,
        padding: 8,
        backgroundColor: "#EEEEEE",
        borderRadius: 8,
    },
    buttonSave: {
        backgroundColor: "#392DE9"
    },
    buttonSaveText: {
        color: "#FFF",
        fontWeight: "bold"
    }

})