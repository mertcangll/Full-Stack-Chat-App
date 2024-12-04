import { TbLogout2 } from "react-icons/tb";
import useLogOut from "../../hooks/useLogOut";

const LogoutButton = () => {
  const {loading,logout} = useLogOut();
  return (
    <div className="mt-auto">
      {!loading ? (
        <TbLogout2 className="w-6 h-6 text-white cursor-pointer"
        onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default LogoutButton