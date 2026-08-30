const Notification = ({ notification }) => {
  if (notification === null) return null;
  
  const styleNotification = {
     color : notification.type === "true" ?  'green' : 'red' ,
     background : 'lightgrey',
     fontSize: 20,
     borderStyle: 'solid',
     borderRadius: 5,
     padding: 10,
     marginBottom: 10,
}
return <div style={styleNotification}  >{notification.text}</div>
}

export default Notification;   
