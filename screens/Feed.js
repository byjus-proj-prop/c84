import * as React from "react"
import {Text, View} from "react-native"
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native";

export default class Feed extends React.Component {
    render() {
        return(
            <View style={styles.container}>

<SafeAreaView style={styles.droidSafeArea} />

<View style={styles.appTitle}>

<View style={styles.appIcon}>

<Image

source={require("../assets/logo.png")} style={styles.iconImage}

></Image>

</View>

<View style={styles.appTitleTextContainer}>

</View>

<Text style={styles.appTitleText}>Espectagrama</Text>

</View>

<View style={styles.cardContainer}>

<FlatList

keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem}/>


</View>
</View>

        );
    }
}

const styles=StyleSheet.create({ container: { flex: 1, backgroundColor: "black"},

droidSafeArea: {

marginTop: Platform.OS== "android"? StatusBar.currentHeight: RFValue (35)},

appTitle: { flex: 0.07, flexDirection: "row"},

appIcon: { flex: 0.2, JustifyContent: "center", alignItems: "center"},

iconImage: { width: "100%", height: "1000", resizeMode: "contain"},

appTitleTextContainer: { flex: 0.8, justifyContent: "center"},

appTitleText: { color: "white", fontsize: RFValue(28)},

cardContainer: { flex: 0.85}})

renderItem = ({ item: post })=> {

    return <PostCard post={post} navigation={this.props.navigation} />;}
    
