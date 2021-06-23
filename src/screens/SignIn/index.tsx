import React from "react";
import { View, Text, Image, StatusBar } from "react-native"
import { styles } from "./styles";
import IllustrationImg from '../../assets/illustration.png'
import { ButtonIcon } from "../../components/ButtonIcon";

export function SignIn() {

    return(
        <View style= {styles.container}>

            <Image 
                source={IllustrationImg}
                style={styles.image}
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se{`\n`}
                    e organize suas{`\n`}
                    jogatinas
                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title = "Entre com Discord"
                    activeOpacity = {.7}
                />
            </View>
        </View>
    )
}