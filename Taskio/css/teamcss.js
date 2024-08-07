import { StyleSheet } from "react-native";

export default StyleSheet.create({

  //General css for home.js and createtask.js
  SafeAreaView: {
    flex: 1, 
    width:"100%", 
    height:"100%"
  },
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  textcon: {
  
    top: "10%"
  },
  
//-----------------------------------------------------------------------------------------------------
//For Team home page

ProjectsText: {
  fontSize: 20, 
  left: "5%",
  height: 30,
  width: "90%",
  
},

titleStyle: {
  textAlign:'center'
},
TeamCon:{
  paddingTop: 80,
  backgroundColor:'white',
  flexDirection: 'row'
  
},

TeamOptions: {
  alignItems: "center",
  justifyContent: "space-between",
  margin: 10
},
ProjectList:{
  width: '95%',
  left: '3%'
},

ProjectListButtons:{
  
  margin: 5, 
  alignSelf: "center",
  backgroundColor: '#BEFDBE',
  borderRadius: 25,
  maxWidth: 130,
  minWidth: 70
},
ProjectListButtonsActive:{
  
  margin: 5, 
  alignSelf: "center",
  backgroundColor: '#31E731',
  borderRadius: 25,
  maxWidth: 130,
  minWidth: 70
},
SearchTextInput: {
  height: 50,
  width: "90%",
  left: "2%",
  margin: 12,
  borderWidth: 1,
  padding: 10,
  backgroundColor: "#E9E6E6",
  borderRadius: 30,
  fontSize: 20
},
modalView: {
  marginTop: "60%",
  margin: 30,
  backgroundColor: 'white',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  height: 230,
  borderRadius: 25
},
ModalTextContainer:{
fontSize: 20,
fontWeight: 'bold',
color: 'black',
marginBottom: 30,
left: "5%",
top: "15%",
},
Modalbuttoncontainer: {
  
  textAlign: "center",
  left: 150,
  flexDirection: "row",
  margin: 5,
  
},

Modalbutton: {
  alignItems: "center",
  backgroundColor: '#BEFDBE',
  borderRadius: 25,
  top: "10%",
  margin: 5,
},
ModalbuttonText: {
  fontSize: 20,
  color: '#000',
  margin: 5,
},
kebabImg:{
  width: 20,
  height: 20,
  resizeMode: 'contain',
  top: 10
},

ProjectMenuCon:{
  width: "10%",
  left: "85%",
  bottom: "230%"
},
ProjectMenu: {
    borderRadius:10, 
    width: "20%"
},
ProjectOptions :{
    
    alignItems: "center",
    justifyContent: "space-between",
},
kebabImgProject: {
    width: 20,
    height: 20
},

TextContainer: {
  fontSize: 30,
  fontWeight: 'bold',
  color: 'black',
  marginBottom: 20,
  left: "5%"
},

TextContainer2: {
  fontSize: 15,
  fontWeight: 'bold',
  color: 'black',
  marginBottom: 20,
  left: "5%"
},

textinput: {
  height: 50,
  width: "90%",
  left: "2%",
  margin: 12,
  borderWidth: 1,
  padding: 10,
  backgroundColor: "#E9E6E6",
  borderRadius: 10,
  fontSize: 20
},

imgicons: {
  flexDirection: "row",
  margin: 5,
  left: 15
 
},
image: {
  width: 35,
  height: 35,
  resizeMode: "contain"
},

FieldText: {
  fontSize: 20,
  left: "5%"
},
//-----------------------------------------------------------------------
//For project task screen
ProjectNameCon: {
  fontSize: 30,
  fontWeight: 'bold',
  color: 'black',
  marginBottom: 20,
  left: "10%"
},

noTaskTxt: {
  textAlign:'center',
},

buttoncontainer: {
  width:"95%",
  top: 700,
  left: "80%",
  position: 'absolute'
 
},
//Create task button
taskbtn: {
  width: 60,
  height: 60
},

TaskItemText: {
  fontSize: 20, 
  left: "5%",
  height: 30,
  width: "90%",
  
},
TaskItemBtn: {
  fontSize: 20, 
  left: "2%",
  height: 70,
  width: "90%",
  margin: 12,
  borderWidth: 1,
  padding: 10,
  backgroundColor: "#E9E6E6",
  borderRadius: 10,
},

TaskAssignTxt: {
  fontSize: 15, 
},

TaskItemComplete: {
  fontSize: 20, 
  left: "2%",
  height: 70,
  width: "90%",
  margin: 12,
  borderWidth: 1,
  padding: 10,
  backgroundColor: "#E9E6E6",
  opacity: 0.5,
  borderRadius: 10,
},
TaskMenuCon:{
  width: "10%",
  left: "85%",
  bottom: "280%"
},
kebabImgTask: {
  width: 20,
  height: 20
},
TaskMenu: {
  borderRadius:10, 
  width: "30%"
},
TaskOptions :{
  alignItems: "center",
  justifyContent: "space-between",
},

})