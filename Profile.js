import React from 'react';
import {SectionList, StyleSheet, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import CustomListItem from "../../../components/CustomListItem";
import {appColors} from "../../../config/Constants";

export default class ProfileDS extends React.Component {

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.text}>Students</Text>
            <Swiper style={styles.wrapper} showsButtons={false}>
            <View style={styles.slide1}><View style={styles.container}>
            <SectionList
        sections={[
                {title: 'Students Names', data: ['Devin', 'Dan', 'Dominic']},
    ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        keyExtractor={(item, index) => index}
        />
        </View></View>
        <View style={styles.slide2}>
            <CustomListItem title={"Driving Instructors"}
        subtitle={"Driving Instructors details"} icon={"account-circle"}></CustomListItem>
            </View>
            <View style={styles.slide3}>
            <CustomListItem title={"Test Lesson Requests"}
        subtitle={"the new test lessons requests"} icon={"account-circle"}></CustomListItem>
            </View>
            </Swiper>
            </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 22
    },
    wrapper: {},
    slide1: {
        flex: 1,

        backgroundColor: '#ffffff'
    },
    slide2: {
        flex: 1,

        backgroundColor: '#ffffff'
    },
    slide3: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    text: {
        backgroundColor: appColors.primary,
        color: appColors.accent,
        fontSize: 30,
        paddingBottom: 10,
        alignItems: 'center',
        paddingLeft: 15,
        fontWeight: 'bold'
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        color: appColors.light,
    },
    item: {
        paddingLeft: 30,
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
