import { createContext,  useState } from "react";
import UserDetail from "./UserDetail";
export const userName_context = createContext()
function App() {
  const [user_name , set_user_name] = useState();
  return (
    <>
      <userName_context.Provider value={{user_name, set_user_name}}>
        <UserDetail></UserDetail>
      </userName_context.Provider>
    </>
  );
}
export default Appkjbcjbdskjbsdkjcbkjsdbkjbkjdbs