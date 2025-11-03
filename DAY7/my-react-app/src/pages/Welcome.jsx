function Welcome({ isLoggedIn }) {
//    if (isLoggedIn) {
//      return <h1>Welcome back!</h1>;
//    }
//    return <h1>Please sign in.</h1>;

const unreadMessages = []

    return (
        <>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
            {unreadMessages.length > 0 && <p>You have new messages!</p>}
        </>
    )
 }

 export default Welcome;