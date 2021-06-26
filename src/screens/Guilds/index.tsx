import React from "react";

import { View, Text, FlatList } from "react-native";
import { ListDivider } from "../../components/ListDivider";
import { styles } from "./styles";

import { Guild, GuildProps } from "../../components/Guild";

type Props = {
    handleGuildSelect: (guild : GuildProps) => void
}

export function Guilds({ handleGuildSelect } : Props) {

    const guilds = [
        {
            id : '1',
            name : 'Lendários',
            icon : 'image.png',
            owner : true
        }
    ]

    return(
        <View style={styles.container}>
            <FlatList
                style={styles.guilds}
                data={guilds}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={ListDivider}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Guild 
                        data={ item }
                        onPress={() => handleGuildSelect(item)}
                    /> 
                )}
            />
        </View>
    )
}