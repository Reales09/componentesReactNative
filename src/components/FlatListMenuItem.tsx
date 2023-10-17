import React from 'react';
import { StyleSheet, Text, Touchable, View } from 'react-native';
import { MenuItem } from '../interfaces/Appinterfaces';
import Icon  from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ( { menuItem } : Props ) => {
    return (
    <TouchableOpacity
        activeOpacity={0.6}
        >
        <View style={ styles.container }>
        <Icon
        name= { menuItem.icon }
        color="gray"
        size={ 20 }
        />
          <Text style={styles.itemText}>{menuItem.name} </Text>


        <View style={{ flex:1 }}/>
        <Icon
        name= "chevron-forward-outline"
        color="gray"
        size={ 20 }
        />

        </View>
    </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },

    itemText: {
        color: 'black',
        fontSize: 19,
        marginLeft: 5,
    },

});