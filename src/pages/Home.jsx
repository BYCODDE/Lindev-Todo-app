import Header from "../components/Header"
import { useAuth } from "@clerk/clerk-react";
function Home() {
  const {getToken} = useAuth()
  const logToken = async() => {
    const token = await getToken()
    console.log(token)
  }
  return (
    <div className="p-[16px] bg-[#F6F6F7] w-screen min-h-screen">
      <Header />
      <button onClick={logToken}>Log Token</button>
    </div>
  );
}

export default Home
