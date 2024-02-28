const Notification = ({message}) => {

    return (
      message && <div className={`notification ${message.level}`}>
        {message.text} 
      </div>
    )
}
  
 export default Notification