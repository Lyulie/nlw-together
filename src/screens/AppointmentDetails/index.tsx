import React from "react";
import { View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons"

import { Background } from "../../components/Background";
import { HeaderList } from "../../components/HeaderList";
import { Header } from "../../components/Header";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import BannerPng from "../../assets/banner.png"
import { ImageBackground, Text, FlatList } from "react-native";
import { Member } from "../../components/Member";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Rodolpho',
            avatar_url: 'https://github.com/Lyulie.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodolpho',
            avatar_url: 'https://github.com/Lyulie.png',
            status: 'offline'
        }
    ]

    return(
        <Background>
            <Header 
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto 
                            name="share"
                            size={18}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            
            <ImageBackground 
                source={BannerPng}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>

            <HeaderList
                title="Jogadores"
                subtitle="Total 3"
            />

            <FlatList 
                data={members}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={ListDivider}
                style={styles.members}
                renderItem={({ item }) => (
                    <Member data={item} />
                )}
            />

            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida" />
            </View>
        </Background>
    )
}