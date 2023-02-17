import {StyleSheet} from 'react-native'
import { COLORS } from 'src/constants/colors'

const globalStyles = StyleSheet.create({
    textLigth:{
        color: COLORS.LIGTH
    },
    backgroundColor:{
        backgroundColor: COLORS.PRIMARY
    },
    inspect: {
        borderColor: 'green',
        borderWidth: 2
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default globalStyles