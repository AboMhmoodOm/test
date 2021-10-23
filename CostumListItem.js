import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'
import {Icon, ListItem} from "react-native-elements";
import {LinearGradient} from "expo-linear-gradient";
import {appColors, appFontFamily} from "../config/Constants";
import * as Font from 'expo-font';


export default class CustomListItem extends React.Component {


    render() {
        return (
            <TouchableOpacity {...this.props}>
    <ListItem
        linearGradientProps={{
            colors: [appColors.primary, appColors.accent],
                start: {x: 0.2, y: 1},
            end: {x: 1, y: 0.3},
        }}
        ViewComponent={LinearGradient} // Only if no expo
        containerStyle={{borderRadius: 20, marginTop: "1%", marginBottom: "1%"}}
    >
    <Icon name={this.props.icon.name} type={this.props.icon.type} color={appColors.accent}/>
        <ListItem.Content>
        <ListItem.Title style={{color: appColors.secondary, fontWeight: 'bold'}}>
        {this.props.title}
    </ListItem.Title>
        <ListItem.Subtitle style={{color: appColors.secondary}}>
        {this.props.subtitle}
    </ListItem.Subtitle>
        </ListItem.Content>
        </ListItem>
        </TouchableOpacity>
    )
    }
}
