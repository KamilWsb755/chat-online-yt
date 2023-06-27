import React from 'react'

const Message = () => {
  return (
    <div className="message">
    <div className="messageInfo">
        <img
            src="https://cdn.pixabay.com/photo/2016/12/04/02/01/celtic-woman-1880944__340.jpg"
            alt="woman"
        />
        <span>just now</span>
    </div>
    <div className="messageContent">
        <p>Test</p>
        <img src="https://cdn.pixabay.com/photo/2016/12/04/02/01/celtic-woman-1880944__340.jpg" alt="woman" />
    </div>
</div>
  )
}

export default Message