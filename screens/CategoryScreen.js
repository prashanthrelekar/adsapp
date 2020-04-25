import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const CategoryScreen = props => {
  return (
      <FlatGrid
        itemDimension={100}
        items={['a', 'b', 'c', 'd', 'e', 'f']}
        style={styles.gridView}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: 'green' }]}>
            <Text>{item}</Text>
          </View>
        )}
      />
  );
};

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default CategoryScreen;
