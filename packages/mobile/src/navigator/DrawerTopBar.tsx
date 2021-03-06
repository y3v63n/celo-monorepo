import colors from '@celo/react-components/styles/colors.v2'
import { useNavigation } from '@react-navigation/native'
import * as React from 'react'
import { processColor, StyleSheet, TouchableOpacity } from 'react-native'
import Animated, { cond, greaterThan } from 'react-native-reanimated'
import Hamburger from 'src/icons/Hamburger'

interface Props {
  middleElement?: React.ReactNode
  scrollPosition?: Animated.Value<number>
  testID?: string
}

function DrawerTopBar({ middleElement, scrollPosition, testID }: Props) {
  const navigation = useNavigation()
  const viewStyle = React.useMemo(
    () => ({
      ...styles.container,
      borderBottomWidth: 1,
      borderBottomColor: cond(
        greaterThan(scrollPosition ?? new Animated.Value(0), 0),
        processColor(colors.gray2),
        processColor('transparent')
      ),
    }),
    [scrollPosition]
  )

  return (
    <Animated.View testID={testID} style={viewStyle}>
      {/*
      // @ts-ignore Only used in a drawer */}
      <TouchableOpacity style={styles.hamburger} onPress={navigation.toggleDrawer}>
        <Hamburger />
      </TouchableOpacity>
      {middleElement}
    </Animated.View>
  )
}

DrawerTopBar.defaultProps = {
  showLogo: true,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 62,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburger: {
    position: 'absolute',
    left: 8,
    top: 8,
    padding: 8,
    marginLeft: 4,
    marginBottom: 0,
  },
})

export default DrawerTopBar
