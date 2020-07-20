import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent:"space-around",
    alignItems: 'center',
    flexDirection: 'row'
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
		paddingHorizontal: 12,
		marginBottom: 25
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
	},
	
	titleText: {
    fontSize: 25,
    color: "#004d40",
    fontWeight: "bold",
    alignSelf: "center",
		textTransform: "uppercase",
		marginBottom: 20
  },
  card: {
    margin: 20,
    width: 150,
    height: 50,
    backgroundColor: '#005AAC',
    borderRadius: 20,
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});