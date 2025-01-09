const UserData = ({ users }) => {
    return (
      <>
        {users.map((user, index) => (
          <tr
            key={user.id}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-200 transition duration-200`}
          >
            <td className="py-3 px-4">{user.id}</td>
            <td className="py-3 px-4">{user.name}</td>
            <td className="py-3 px-4">{user.email}</td>
            <td className="py-3 px-4">{user.address.street}</td>
            <td className="py-3 px-4">{user.address.city}</td>
            <td className="py-3 px-4">{user.address.zipcode}</td>
          </tr>
        ))}
      </>
    );
  };
  
  export default UserData;
  