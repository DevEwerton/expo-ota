import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen()
{
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Home</Text>
		</View>
  	);
}

const styles = StyleSheet.create({
    container: {
		backgroundColor: "#ffffff",
		flexGrow: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		fontSize: 24,
		color: "#000000"
	}
});
