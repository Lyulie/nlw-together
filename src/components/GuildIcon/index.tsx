import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
    
    const uri = 'https://i.pinimg.com/originals/dd/89/c3/dd89c3f7743c253763c1d2ed8b552cc8.jpg'

    return(
        <Image
            source={{ uri }}
            resizeMode="cover"
            style={styles.image}
        />

    )
}