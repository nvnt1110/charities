import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';

import styles from './styles';

const top10 = [
    { id: 1, name: 'tan' },
    { id: 2, name: 'tan' },
    { id: 3, name: 'tan' },
    { id: 4, name: 'tan' },
    { id: 5, name: 'tan' },
    { id: 6, name: 'tan' },
    { id: 7, name: 'tan' },
    { id: 8, name: 'tan' },
    { id: 9, name: 'tan' },
    { id: 10, name: 'tan' },
]

const Home = () => {
    const renderTopTen = ({item, index}) => {

    }

    return (
        <SafeAreaView>
        <View>
            <FlatList 
                data={top10}
                renderItem={renderTopTen}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    </SafeAreaView>
    )
}

export default Home;