import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PostsScreen = ({ posts }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d0050',
    justifyContent: 'space-between',
    padding: 20,
  },
  postContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  postText: {
    fontSize: 16,
  },
});

export default PostsScreen;