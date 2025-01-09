import React, { useEffect, useState } from 'react';
import UserData from './UserData';

const DataTable = () => {
  const [users, setUsers] = useState([]);

  const API = 'https://jsonplaceholder.typicode.com/users';
  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        setUsers(data);
      }

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <>
      <div className="main-section w-[100%] bg-[#FFF6E9]">
        <div className="container w-[90%] min-h-[100vh] mx-auto flex justify-center items-center">
          {/* -----table start here----- */}
          <div className="table-wrapper w-[90%] h-[95vh]  rounded-md">
            <div className="project-heading">
              <p className="text-3xl font-semibold text-center mt-4 mb-10">
                API Data Table
              </p>
            </div>
            <div className="table-area w-[100%] mx-auto mt-4 rounded-lg shadow-lg">
              <div className="overflow-x-auto max-h-[550px]">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-[#3B1E54] text-white sticky top-0 z-10">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold">#</th>
                      <th className="py-3 px-4 text-left font-semibold">Name</th>
                      <th className="py-3 px-4 text-left font-semibold">Email</th>
                      <th className="py-3 px-4 text-left font-semibold">
                        Street
                      </th>
                      <th className="py-3 px-4 text-left font-semibold">City</th>
                      <th className="py-3 px-4 text-left font-semibold">
                        Zipcode
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <UserData users={users} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* -----table end here----- */}
        </div>
      </div>
    </>
  );
};

export default DataTable;
