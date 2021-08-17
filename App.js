import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useFindUsers } from './hooks/useFindUsers';

export default function App() {

  const { data, loading, error } = useFindUsers();

  if(loading) return (
		<View style={styles.item}>
			<Text style={styles.title}>Carregando...</Text>
		</View>
  )

  if(error) return (
		<View style={styles.item}>
			<Text style={styles.error}>{error}</Text>
		</View>
  )

	const Item = ({ data }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{data}</Text>
		</View>
);

const renderItem = ({ item }) => <Item data={item.username + " : " + item.name} />;

return (
	<View style={styles.container}>
		<Text style={styles.header}>Consulta à API JSONPlaceholder</Text>
		<FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
		<StatusBar style="auto" />
	</View>
);
}

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
	header: {
		backgroundColor: "#89BBDD",
		textAlign: "center",
		padding: 20,
	},
	error: {
    backgroundColor: "#fff",
		color: "#FF0000",
		fontSize: 14,
		textAlign: "center",
	}
});
