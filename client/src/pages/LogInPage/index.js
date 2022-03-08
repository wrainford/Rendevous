import Login from "../../components/Login"

const LoginPage = () => {
    return (
      <div>
            <nav className="LogInNav">
               <a href="/login"><h1 className='rendevous'>ren<span className='dev'>dev</span>ous</h1></a>
            </nav>
                  <Login />
      </div>
    )
 }

 export default LoginPage;