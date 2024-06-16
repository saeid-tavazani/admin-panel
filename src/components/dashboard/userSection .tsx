import { FaUserCircle } from "react-icons/fa";

const UserSection = ({
  user,
}: {
  user: {
    profile: string;
    name: string;
  } | null;
}) => {
  return (
    <div className="flex items-center gap-2">
      {user?.profile ? (
        <img
          src={user.profile}
          alt="profile"
          className="w-[25px rounded-full]"
        />
      ) : (
        <FaUserCircle
          size={25}
          className="text-dark-semi-transparent-black dark:text-foreground"
        />
      )}
      <span className="text-sm scalex">{user?.name}</span>
    </div>
  );
};
export default UserSection;
