import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFindUsers } from '../hooks/useFindUsers';

function Users() {

    const { data, loading, error } = useFindUsers();

    const Item = ({ data }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{data}</Text>
		</View>
    );

    const renderItem = ({ item }) => <Item data={item.username + " : " + item.name} />;

    return (
	  <View style={styles.container}>
          {loading ? 
            <Text style={styles.title}>Carregando...</Text> : 
            <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} /> }
          {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );
}

export default Users;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		backgroundColor: "#77AAFF",
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 14,
	},
	error: {
        backgroundColor: "#fff",
		color: "#FF0000",
		fontSize: 14,
		textAlign: "center",
	}
});
