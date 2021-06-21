import React from "react";
import { 
    TouchableOpacity, 
    TouchableOpacityProps as TouchProps, 
    View, Text, Image 
} from 'react-native'
import { styles } from "../../components/ButtonIcon/styles";
import DiscordImg from '../../assets/discord.png'

type Props = TouchProps & {
    title : string
}

export function ButtonIcon({title, ...rest} : Props) {
    
    return(
       <TouchableOpacity style= {styles.container} {...rest}>
           <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
           </View>
           <Text style={styles.title}>{title}</Text>
       </TouchableOpacity>
    )
}