import React from 'react'
import { View, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const colorLinearGradient1 = "#103269"
const colorLinearGradient2 = "#7991b8"
const colorHead = "#a38152"
const colorEyesBorders = "#806033"
const colorEyeBall = "#452f10"
const colorEyeBallBG = "#916222"
const colorEyeBubble = "#f2f2f2"
const colorLips = "#520c29"


function myAvatar() {
  return (
    <LinearGradient 
    style={ styles.container }
    colors={[colorLinearGradient1, colorLinearGradient2]}
    start={{x:0, y:0}}
    end={{x:1, y:1}}
    > 
      <View style={ styles.head }>

        <View style={ styles.hairMain }>
          <View style={ styles.hairMainShadow }/>

          <View style={ styles.hairTop }>
            <View style={ styles.hairTopShadow }/>
            <View style={ styles.hairTies }/>
          </View>

          <View style={ styles.hairLeft1 }/>
          <View style={ styles.hairRight1 }/>
        </View>
       

        <View style={ styles.ears }>
          <View style={ styles.earLeft}>
            <View style={ styles.earShadowLeft }/>
          </View>
          <View style={ styles.earRight }>
          <View style={ styles.earShadowRight }/>
          </View>
        </View>

        <View style={ styles.brows }>
          <View style={ styles.brow }/>
          <View style={ styles.brow }/>
        </View>

          <View style={ styles.eyes }>

            <View style={ styles.eye }>
              <View style={ styles.eyeBall }> 
                <View style={ styles.eyeBallBG }>
                  <View style={ styles.eyeIris }/>
                  <View style={ styles.eyeBubble }/>
                </View>
              </View>
            </View>

            <View style={ styles.eye }>
              <View style={ styles.eyeBall }>
                <View style={ styles.eyeBallBG }>
                  <View style={ styles.eyeIris }/>
                  <View style={ styles.eyeBubble }/>
                </View>
              </View>
            </View>

          </View>

          <View style={ styles.nose }>
            <View style={ styles.noseHole }/>
          </View>

          <View style={ styles.mouth }>

            <View style={ styles.tongue }/>

            <View style={ styles.topTeeth }>
                <View style={ styles.topTooth }/>
                <View style={ styles.topTooth }/>
                <View style={ styles.topTooth }/>
                <View style={ styles.topTooth }/>
                <View style={ styles.topTooth }/>
            </View>

            <View style={ styles.bottomTeeth }>
                <View style={ styles.bottomTooth }/>
                <View style={ styles.bottomTooth }/>
                <View style={ styles.bottomTooth }/>
                <View style={ styles.bottomTooth }/>
                <View style={ styles.bottomTooth }/>
            </View>

          </View>

          <View style={ styles.chin }/>

      </View>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  head : {
    backgroundColor: colorHead,
    width: 290,
    height: 340,
    borderBottomRightRadius: 340,
    borderBottomLeftRadius: 340,
    borderTopRightRadius: 220,
    borderTopLeftRadius: 220,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }, 
  eyes : {
    position: "absolute",
    width: 195,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eye : {
    backgroundColor: "#ffffff",
    height: 40,
    width: 65,
    margin: 10,
    borderRadius: 65,
    borderTopColor: colorEyesBorders,
    borderBottomColor: colorEyesBorders,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },
  eyeBall : {
    backgroundColor: colorEyeBall,
    width: 41,
    height: 41,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  eyeIris : {
    width: 15,
    height: 15,
    backgroundColor: "black",
    borderRadius: 7.5
  },
  eyeBubble : {
    backgroundColor: colorEyeBubble,
    width: 10,
    height: 10,
    borderRadius: 5,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  eyeBallBG : {
    backgroundColor: colorEyeBallBG,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  brows : {
    position: "absolute",
    width: 175,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  brow : {
    height: 10,
    width: 65,
    backgroundColor: colorEyeBall,
    marginBottom: 65,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nose : {
    position: "relative",
    transform: [{ rotate: '-13deg' }],
    backgroundColor: colorHead,
    width: 30,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth : 5,
    borderRightWidth : 5,
    borderBottomColor: colorEyeBall,
    borderRightColor: colorEyeBall,
    borderBottomEndRadius: 15,
    top: 40
  },
  noseHole : {
    backgroundColor: colorEyeBall,
    width: 8,
    height: 8,
    borderRadius: 4,
    position: "absolute",
    top: 40,
    right: 2,
  },
  mouth : {
    position: "absolute",
    backgroundColor: "white",
    width: 120,
    height: 35,
    bottom: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopColor: colorLips,
    borderBottomColor: colorLips,
    borderRightColor: colorLips,
    borderLeftColor: colorLips,
    borderTopWidth: 1.5,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    borderLeftWidth: 1.5,
    alignItems: "center",
    overflow: "hidden"
  },
  tongue : {
    backgroundColor: "pink",
    width: 80,
    height: 17,
    marginTop: 17.5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  }, 
  topTeeth : {
    position: 'absolute',
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,

  },
  topTooth : {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    width: 25,
    height: 15,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  bottomTeeth : {
    position: 'absolute',
    display: "flex",
    flexDirection: "row",
    marginTop: 25,

  },
  bottomTooth : {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    width: 25,
    height: 15,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  chin : {
    position: "absolute",
    backgroundColor: colorEyesBorders,
    width: 20,
    borderRadius: 2,
    height: 3,
    bottom: 25
  },
  ears : {
    position: "absolute",
    width: 330,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  earLeft : {
    backgroundColor: colorHead,
    width: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  earRight : {
    backgroundColor: colorHead,
    width: 20,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  earShadowLeft : {
    borderColor: colorEyesBorders,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    width: 12,
    height: 40
  },
  earShadowRight : {
    borderColor: colorEyesBorders,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    width: 12,
    height: 40
  },
  hairMain : {
    position: 'absolute',
    width: 300,
    height: 100,
    backgroundColor: colorEyeBall,
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    top: -25,
  },
  hairLeft1 : {
    position: 'absolute',
    backgroundColor: colorEyeBall,
    top: 90,
    left: 0.5,
    height: 100,
    width: 10,
  },
  hairRight1 : {
    position: 'absolute',
    backgroundColor: colorEyeBall,
    top: 90,
    right: 0.5,
    height: 100,
    width: 10,
  },
  hairTop : {
    position: 'absolute',
    alignSelf: "center",
    backgroundColor: colorEyeBall,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: "#cc372d",
    borderBottomWidth: 2,
    top: -40,
    width: 60,
    height: 40,
  },
  hairTopShadow : {
    position: 'absolute',
    alignSelf: "center",
    backgroundColor: colorEyesBorders,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 5,
    width: 40,
    height: 4,
  },


  
})

export default myAvatar
