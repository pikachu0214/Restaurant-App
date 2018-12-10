"use strict"
let React = require("react-native");
let {StyleSheet} = React;

module.exports = StyleSheet.create({
    container: {
        backgroundColor: "#f2f2f2",
        flex: 1
    },
    listView: {
        flex: 1,
    },
    li:{
        backgroundColor: "#fff",
        borderBottomColor: "#eee",
        borderColor: "transparent",
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16
    },
    navbar: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderBottomColor: "#eee",
        borderColor: "transparent",
        borderWidth: 1,
        justifyContent: "center",
        height: 44,
        flexDirection: "row",
    },
    navbarTitle: {
        color: "#444",
        fontSize: 16,
        fontWeight: "500",
    },
    toolbar: {
        backgroundColor: "#fff",
        height: 22,
    },
    center: {
        textAlign: "center",
    },
    actionText: {
        color: "#fff",
        fontSize: 16,
        textAlign: "center",
    },
    action: {
        backgroundColor: "blue",
        borderColor: "transparent",
        borderWidth: 1,
        paddingLeft: 16,
        paddingTop: 14,
        paddingBottom: 16,
    },
});