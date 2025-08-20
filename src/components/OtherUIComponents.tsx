const OtherUIComponents: React.FC = () => {
  

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Table Components</h1>
          <p className="text-gray-600">Sample UI/UX components built with Tailwind CSS</p>
        </div>

        <div className="space-y-8">
          
          {/* Basic Table responsive Section */}
          <section className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
                      Name
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
                      Email
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
                      Role
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
                      Joined At
                    </th>
                    <th className="px-4 py-4 text-left text-xs font-semibold text-slate-900 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                      John Doe
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      john@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      Admin
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      2022-05-15
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
                      <button className="cursor-pointer text-red-600 font-medium">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                      Jane Smith
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      jane@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      User
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      2022-07-20
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
                      <button className="cursor-pointer text-red-600 font-medium">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                      Alen doe
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      alen@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      User
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      2022-07-21
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
                      <button className="cursor-pointer text-red-600 font-medium">Delete</button>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-4 text-sm text-slate-900 font-medium">
                      Dustin
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      dustin@example.com
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      User
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-600 font-medium">
                      2022-07-21
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <button className="cursor-pointer text-blue-600 font-medium mr-4">Edit</button>
                      <button className="cursor-pointer text-red-600 font-medium">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Table with Action Button responsive Section */}
          <section className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Table with Action Button</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-100 ">
                  <tr>
                    <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
                      Name
                    </th>
                    <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
                      Email
                    </th>
                    <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
                      Role
                    </th>
                    <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
                      Joined At
                    </th>
                    <th className="p-4 text-left text-[13px] font-semibold text-slate-900">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      John Doe
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      john@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      Admin
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2022-05-15
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Jane Smith
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      jane@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2022-07-20
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Alen Doe
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      alen@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2022-07-21
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Kelwin mark
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      kelwin@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2020-07-06
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Dustin
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      dustin@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2021-07-06
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Table with Alternate Row Color responsive Section */}
          <section className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Table with Alternate Row Color</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-800 ">
                  <tr>
                    <th className="p-4 text-left text-sm font-medium text-white">
                      Name
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-white">
                      Email
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-white">
                      Role
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-white">
                      Joined At
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-white">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="">
                  <tr className="even:bg-blue-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      John Doe
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      john@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      Admin
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2022-05-15
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="even:bg-blue-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Jane Smith
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      jane@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2022-07-20
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="even:bg-blue-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Alen Doe
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      alen@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2022-07-21
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="even:bg-blue-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Kelwin mark
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      kelwin@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2020-07-06
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="even:bg-blue-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Dustin
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      dustin@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      User
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2021-07-06
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>

                  <tr className="even:bg-blue-50">
                    <td className="p-4 text-[15px] text-slate-900 font-medium">
                      Jams david
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      jams@example.com
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      Candidate
                    </td>
                    <td className="p-4 text-[15px] text-slate-600 font-medium">
                      2018-09-04
                    </td>
                    <td className="p-4">
                      <div className="flex items-center">
                        <button className="mr-3 cursor-pointer" title="Edit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-blue-500 hover:fill-blue-700"
                            viewBox="0 0 348.882 348.882">
                            <path
                              d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                              data-original="#000000" />
                            <path
                              d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                              data-original="#000000" />
                          </svg>
                        </button>
                        <button title="Delete" className="cursor-pointer">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000" />
                            <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Table with Alternate Row Color responsive Section */}
          <section className="w-full bg-white rounded-xl p-4 shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Table with Alternate Row Color</h2>
            <div className="overflow-x-auto p-6">
              <div className="flex gap-4 flex-wrap justify-between items-center mb-4">
                <div className="flex items-center px-4 py-2 rounded-md bg-white border border-gray-300 overflow-hidden max-w-xs w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
                    className="fill-gray-600 mr-2 w-4 h-4">
                    <path
                      d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                    </path>
                  </svg>
                  <input type="email" placeholder="Search apps..." className="w-full outline-none bg-transparent text-slate-600 text-sm" />
                </div>
                <button type='button'
                  className="text-slate-900 font-medium flex items-center px-4 py-2 rounded-md bg-white hover:bg-gray-50 border border-gray-300 overflow-hidden cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 fill-current inline" viewBox="0 0 67.671 67.671">
                    <path d="M52.946 23.348H42.834v6h10.112c3.007 0 5.34 1.536 5.34 2.858v26.606c0 1.322-2.333 2.858-5.34 2.858H14.724c-3.007 0-5.34-1.536-5.34-2.858V32.207c0-1.322 2.333-2.858 5.34-2.858h10.11v-6h-10.11c-6.359 0-11.34 3.891-11.34 8.858v26.606c0 4.968 4.981 8.858 11.34 8.858h38.223c6.358 0 11.34-3.891 11.34-8.858V32.207c-.001-4.968-4.982-8.859-11.341-8.859z" data-original="#000000" />
                    <path d="M24.957 14.955a2.99 2.99 0 0 0 2.121-.879l3.756-3.756v30.522a3 3 0 1 0 6 0V10.117l3.959 3.959c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 0 0 0-4.242L36.078.877A2.987 2.987 0 0 0 33.958 0h-.046c-.767 0-1.534.291-2.12.877l-8.957 8.957a2.998 2.998 0 0 0 2.122 5.121z" data-original="#000000" />
                  </svg>
                  Export
                </button>
              </div>

              <table className="min-w-full border border-gray-200">
                <thead className="bg-white ">
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                      Version
                    </th>
                    <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                      Devices
                    </th>
                    <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                      First Seen
                    </th>
                    <th className="px-4 py-3 text-left text-[13px] font-medium text-slate-600 border-r border-gray-200">
                      Security Status
                    </th>
                  </tr>
                </thead>

                <tbody className=" divide-y divide-gray-200">
                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 512 512">
                          <path fill="#00bcff" d="M256.599 256c0-47.128 38.205-85.333 85.333-85.333s85.333 38.206 85.333 85.333c0 47.129-38.206 85.333-85.333 85.333-47.129 0-85.333-38.205-85.333-85.333z" data-original="#00bcff" />
                          <path fill="#00cf7f" d="M85.932 426.667c0-47.128 38.205-85.333 85.333-85.333l45.475-24.009 39.858 24.009v85.333c0 47.129-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333z" data-original="#00cf7f" />
                          <path fill="#ff7361" d="m256.599 0-46.434 80.67 46.434 89.996h84.136c47.129 0 85.333-38.205 85.333-85.333S387.863 0 340.735 0z" data-original="#ff7361" />
                          <path fill="#ff4d12" d="M84.734 85.333c0 47.128 38.205 85.333 85.333 85.333l45.267 17.484 41.263-17.484V0h-86.531c-47.127 0-85.332 38.205-85.332 85.333z" data-original="#ff4d12" />
                          <path fill="#b659ff" d="M85.932 256c0 47.129 38.205 85.333 85.333 85.333h85.333V170.666h-85.333c-47.128 0-85.333 38.206-85.333 85.334z" data-original="#b659ff" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Figma</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      120.1.0
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      5 devices (14%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jul 1, 2025, 9:25 AM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 512 512">
                          <circle cx="256" cy="256" r="256" fill="#2196f3" data-original="#2196f3" />
                          <path fill="#fafafa" d="M224 224 96 416l192-128z" data-original="#fafafa" />
                          <path fill="#f44336" d="m224 224 64 64L416 96z" data-original="#f44336" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Safari</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      17.1
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      36 devices (100%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 26, 2025, 10:30 AM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 256 256">
                          <path fill="#51ccbc" stroke-miterlimit="10" d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm-.891 37.954c-6.781 0-11.176-5.086-11.176-12.782 0-9.942 6.888-17.128 14.639-17.128 4.69 0 7.486 2.361 7.486 5.573 0 3.313-2.395 5.658-4.436 5.658-.508 0-.764-.249-.764-.661 0-.917 1.478-2.295 1.478-4.896 0-2.192-1.338-3.569-3.53-3.569-4.69 0-10.029 5.541-10.029 15.124 0 5.657 2.809 9.753 7.346 9.753 3.924 0 7.314-2.816 9.277-6.797.174-.35.341-.51.531-.51.275 0 .538.236.538.75-.002 2.324-4.163 9.485-11.36 9.485z" font-family="none" font-size="none" font-weight="none" text-anchor="none" transform="translate(-8.96 -8.96) scale(5.4784)" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Canva</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      11.0.2
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      3 devices (8%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 29, 2025, 2:30 PM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-red-500 font-medium border-r border-gray-200">
                      1 issue detected
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 256 256">
                          <g fill="none" stroke-miterlimit="10" font-family="none" font-size="none" font-weight="none" text-anchor="none">
                            <path fill="#00bfa5" d="M128 256C57.312 256 0 198.688 0 128 0 57.306 57.312 0 128 0c70.694 0 128 57.306 128 128 0 70.688-57.306 128-128 128z" />
                            <path fill="#fff" d="M150.4 147.2a9.595 9.595 0 0 0-9.6 9.6c0 5.305 4.294 9.6 9.6 9.6h20.397c-10.784 11.98-26.324 19.2-42.797 19.2-31.757 0-57.6-25.843-57.6-57.6S96.243 70.4 128 70.4c20.07 0 38.387 10.26 48.998 27.443 2.784 4.512 8.698 5.907 13.21 3.123 4.512-2.784 5.907-8.697 3.123-13.21C179.2 64.865 154.777 51.2 128 51.2c-42.349 0-76.8 34.451-76.8 76.8s34.451 76.8 76.8 76.8c19.142 0 37.325-7.322 51.2-19.763V195.2c0 5.305 4.294 9.6 9.6 9.6 5.305 0 9.6-4.295 9.6-9.6v-48z" />
                          </g>
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Grammarly</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      6 versions
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      12 devices (33%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 30, 2025, 10:20 AM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 256 256">
                          <path stroke-miterlimit="10" d="M44.62 13.13c-.23-.21-.52-.33-.83-.33-.02 0-.05.01-.08.01l-29.86 1.92c-.63.04-1.13.58-1.13 1.21v28.75c0 .34.14.65.38.88.25.23.57.35.91.33l29.86-1.93c.64-.04 1.13-.57 1.13-1.21V14.02c0-.34-.13-.66-.38-.89zm-6.51 7.79c-.6.19-.79.2-.79.2v17.24c-1.02.55-1.86.81-2.74.81-1.07 0-1.68-.24-2.5-1.5-1.74-2.69-7.41-11.81-7.41-11.81v11.45l2.23.47s-.06 1.3-2.01 1.45c-1.71.13-5.44.32-5.44.32 0-.47.1-1.12.84-1.31.35-.09 1.4-.37 1.4-.37V22.42h-2.24c0-1.03.3-1.83 1.38-1.91l5.79-.33 7.73 11.92V21.49l-2.24-.19c0-.93.9-1.5 1.67-1.58l5.04-.28c0 .65-.03 1.26-.71 1.48zM4.98 8.54l5.74 5.74v29.54L5.6 37.66c-.41-.58-.62-1.25-.62-1.96zm37.74 2.37-29.06 1.83c-.99.07-1.95-.3-2.65-.99L6.24 6.97l27.19-1.89c.81-.07 1.62.17 2.28.66z" font-family="none" font-size="none" font-weight="none" text-anchor="none" transform="translate(-23.04 -23.04) scale(6.0416)" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Notion</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      3.3.0
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      35 devices (97%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 25, 2025, 1:00 PM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 32 32">
                          <path fill="#ff6c37" d="M18.038.13a16 16 0 1 0-4.076 31.74A16 16 0 0 0 18.038.13z" />
                          <g fill="#fff">
                            <path d="M11.568 17.011a.06.06 0 0 0 .07.032l2.56-.552L13.12 15.4l-1.534 1.534a.06.06 0 0 0-.02.077zM23.555 6.02a2.386 2.386 0 1 0 1.005 4.55l-1.623-1.623a.2.2 0 0 1 0-.283l2.12-2.118a2.385 2.385 0 0 0-1.502-.527z" />
                            <path d="M25.348 6.82 23.361 8.8l1.558 1.558a2.4 2.4 0 0 0 .429-3.538zM21.372 10.474h-.035a.629.629 0 0 0-.123.01H21.2a.938.938 0 0 0-.132.04l-.033.015a.637.637 0 0 0-.093.048l-.035.023a.833.833 0 0 0-.11.09l-5.892 5.894.73.73 6.24-5.478a.716.716 0 0 0 .096-.102l.027-.035a.853.853 0 0 0 .11-.234c0-.019.012-.038.016-.057a.95.95 0 0 0 .016-.12V11.158c0-.029 0-.038-.008-.057a.778.778 0 0 0-.61-.613h-.03a.864.864 0 0 0-.12-.014zM13.396 15.117l1.21 1.203 5.909-5.909c.192-.188.443-.305.71-.331-1.045-.8-2.184-.59-7.829 5.037zM22.207 12.077l-.072.07-6.24 5.475 1.061 1.06c2.63-2.488 4.965-4.858 5.251-6.605zM6.643 24.904a.057.057 0 0 0 .051.042l2.72.187-1.525-1.525-1.233 1.232a.06.06 0 0 0-.013.064zM8.174 23.325l1.608 1.608a.122.122 0 0 0 .152.02.12.12 0 0 0 .062-.139l-.27-1.155a.346.346 0 0 1 .178-.385c2.819-1.413 5.092-2.868 6.761-4.32l-1.12-1.12-2.4.516zM15.201 17.494l-.602-.601-.831.83a.04.04 0 0 0 0 .051.038.038 0 0 0 .046.021z" />
                          </g>
                          <path fill="#ff6c37" d="M25.404 8.11a.185.185 0 1 0-.33.16.557.557 0 0 1-.07.602.185.185 0 0 0 .285.237.926.926 0 0 0 .115-.999z" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Postman</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      11.0.0
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      7 devices (19%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 28, 2025, 2:40 PM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-red-500 font-medium border-r border-gray-200">
                      2 issues detected
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 512.001 512.001">
                          <linearGradient id="a" x1="213.312" x2="213.312" y1="8.348" y2="504.55" gradientUnits="userSpaceOnUse">
                            <stop offset=".3" stop-color="#ff1b2d" />
                            <stop offset=".438" stop-color="#fa1a2c" />
                            <stop offset=".594" stop-color="#ed1528" />
                            <stop offset=".758" stop-color="#d60e21" />
                            <stop offset=".927" stop-color="#b70519" />
                            <stop offset="1" stop-color="#a70014" />
                          </linearGradient>
                          <path fill="url(#a)" d="M171.737 400.271c-28.302-33.411-46.637-82.808-47.882-138.238-.004-.143-.004-11.918 0-12.061 1.245-55.429 19.579-104.825 47.88-138.235 36.728-47.692 91.843-66.439 152.807-66.439 37.504 0 102.081 19.869 102.081 19.869C381.558 24.848 322.138.253 256.968.012c-.323-.001-.644-.012-.967-.012-141.385 0-256 114.615-256 256.001 0 137.295 108.085 249.338 243.808 255.704 4.042.19 8.104.297 12.192.297 65.542 0 125.317-24.642 170.604-65.151 0 0-62.116 14.14-99.614 14.14-60.965-.001-118.528-13.03-155.254-60.72z" />
                          <linearGradient id="b" x1="341.868" x2="341.868" y1="37.594" y2="476.46" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#9c0000" />
                            <stop offset=".7" stop-color="#ff4b4b" />
                          </linearGradient>
                          <path fill="url(#b)" d="M171.735 111.737c23.489-27.729 53.836-44.453 86.982-44.453 74.523 0 134.936 84.493 134.936 188.719S333.24 444.721 258.717 444.721c-33.145 0-63.492-16.724-86.98-44.451 36.726 47.69 91.319 77.93 152.283 77.93 37.498 0 72.581-11.448 102.585-31.351 52.404-46.876 85.396-115.005 85.396-190.849 0-75.836-32.984-143.958-85.378-190.834-30.008-19.91-65.099-31.362-102.603-31.362-60.964.001-115.558 30.242-152.285 77.933z" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Opera</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      129.0.2
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      8 devices (22%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jul 2, 2025, 1:10 PM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-red-500 font-medium border-r border-gray-200">
                      1 issue detected
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24">
                          <path fill="#e91e63" d="M8.843 12.651a2.521 2.521 0 0 0-2.521 2.521v6.306a2.521 2.521 0 0 0 5.042 0v-6.306a2.523 2.523 0 0 0-2.521-2.521zM.019 15.172a2.524 2.524 0 0 0 5.046 0v-2.523H2.542a2.524 2.524 0 0 0-2.523 2.523z" data-original="#e91e63" />
                          <path fill="#00bcd4" d="M8.846-.001h-.003a2.524 2.524 0 0 0 0 5.046h2.521V2.517A2.519 2.519 0 0 0 8.846-.001zM2.525 11.37h6.318a2.524 2.524 0 0 0 0-5.046H2.525a2.524 2.524 0 0 0 0 5.046z" data-original="#00bcd4" />
                          <path fill="#4caf50" d="M21.457 6.323a2.518 2.518 0 0 0-2.518 2.518v2.528h2.521a2.524 2.524 0 0 0 0-5.046h-.003zm-8.816-3.801v6.325a2.521 2.521 0 0 0 5.042 0V2.522a2.521 2.521 0 0 0-5.042 0z" data-original="#4caf50" />
                          <path fill="#ff9800" d="M17.682 21.476a2.521 2.521 0 0 0-2.521-2.521H12.64v2.523a2.521 2.521 0 0 0 5.042-.002zm3.797-8.827h-6.318a2.524 2.524 0 0 0 0 5.046h6.318a2.524 2.524 0 0 0 0-5.046z" data-original="#ff9800" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Slack</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      10.2.0
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      36 devices (100%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 15, 2025, 4:00 PM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg viewBox="0 0 30 30" fill="none" className="w-[18px] h-[18px] shrink-0" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30.01 13.43h-9.142l7.917-4.57-1.57-2.72-7.918 4.57 4.57-7.915-2.72-1.57-4.571 7.913V0h-3.142v9.139L8.863 1.225l-2.721 1.57 4.57 7.913L2.796 6.14 1.225 8.86l7.917 4.57H0v3.141h9.141l-7.916 4.57 1.57 2.72 7.918-4.57-4.571 7.915 2.72 1.57 4.572-7.914V30h3.142v-9.334l4.655 8.06 2.551-1.472-4.656-8.062 8.087 4.668 1.571-2.72-7.916-4.57h9.141v-3.14h.001zm-15.005 5.84a4.271 4.271 0 11-.001-8.542 4.271 4.271 0 01.001 8.542z" fill="#5531A7" />
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Loom</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      2.1.1
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      31 devices (86%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jul 4, 2025, 8:15 AM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="px-4 py-3 border-r border-gray-200">
                      <div className="flex items-center w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] shrink-0" viewBox="0 0 64 64">
                          <g fill="#0756dc" fill-rule="evenodd">
                            <path d="m48 33.688-9.414 6.146L32 34.336l-6.586 5.498L16 33.688l6.508-5.212L16 23.264l9.414-6.146L32 22.614l6.586-5.496L48 23.264l-6.508 5.212zm-6.548 7.536L32.02 46.88l-9.434-5.656v-2.068L25.414 41l6.606-5.482L38.626 41l2.826-1.844zM32 0C14.326 0 0 14.326 0 32c0 17.672 14.326 32 32 32s32-14.328 32-32C64 14.326 49.674 0 32 0z" data-original="#0756dc" />
                            <path d="M22.509 28.475 32 34.335l9.49-5.86-9.49-5.86z" data-original="#0756dc" />
                          </g>
                        </svg>
                        <div className="ml-2">
                          <p className="text-[13px] text-slate-900 font-medium">Dropbox</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      201.4.0
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      4 devices (11%)
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-900 font-medium border-r border-gray-200">
                      Jun 27, 2025, 12:45 PM
                    </td>
                    <td className="px-4 py-3 text-[13px] text-slate-600 font-medium border-r border-gray-200">
                      No issues found
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="md:flex mt-6 m-4">
                <p className="text-sm text-slate-600 flex-1">Showind 1 to 5 of 100 entries</p>
                <div className="flex items-center max-md:mt-4">
                  <p className="text-sm text-slate-600">Display</p>
                  <select className="text-sm text-slate-900 border border-gray-300 rounded-md h-8 mx-4 px-1 outline-none">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                    <option>100</option>
                  </select>

                  <ul className="flex space-x-3 justify-center">
                    <li className="flex items-center justify-center shrink-0 bg-gray-100 w-8 h-8 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400" viewBox="0 0 55.753 55.753">
                        <path
                          d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                          data-original="#000000" />
                      </svg>
                    </li>
                    <li
                      className="flex items-center justify-center shrink-0 bg-blue-500  border hover:border-blue-500 border-blue-500 cursor-pointer text-sm font-medium text-white px-[13px] h-8 rounded-md">
                      1
                    </li>
                    <li
                      className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-[13px] h-8 rounded-md">
                      2
                    </li>
                    <li
                      className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-[13px] h-8 rounded-md">
                      3
                    </li>
                    <li
                      className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer text-sm font-medium text-slate-900 px-[13px] h-8 rounded-md">
                      4
                    </li>
                    <li className="flex items-center justify-center shrink-0 border border-gray-300 hover:border-blue-500 cursor-pointer w-8 h-8 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-400 rotate-180" viewBox="0 0 55.753 55.753">
                        <path
                          d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z"
                          data-original="#000000" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OtherUIComponents;