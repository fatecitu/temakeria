import fotoPrato from '../../assets/temaki-salmao.png'
import {styles} from './style'
import { MotiImage} from 'moti'

export function Prato(){
    return(
        <MotiImage
            style={styles.prato}
            source={fotoPrato}
            resizeMode='contain'
            from={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
                type: 'timing', duration: 3000
            }}
        />
    )
}
