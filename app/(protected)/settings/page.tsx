import { auth, signOut } from "@/auth";

const SettingsPage = async () => {
  const session = await auth();

  return (
    <div className="flex flex-col items-start pl-8 pb-6">
      {session?.user && (
        <div className="mb-6">
          <img
            src={session.user.image || "/default-avatar.png"}
            alt="Profile"
            className="w-12 h-12 object-cover rounded-full mb-2"
          />
          <p className="text-md ">{session.user.name || "User"}</p>
          <p className="text-sm text-gray-500">{session.user.email}</p>
        </div>
      )}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="px-4 py-1 bg-red-500 text-white text-[12px] rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition duration-200 ease-in-out"
        >
          Déconnexion
        </button>
      </form>
    </div>
  );
};
export default SettingsPage;
