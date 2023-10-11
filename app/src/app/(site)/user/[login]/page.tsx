import {getUserQuery, GetUserResponse} from "../../../graphql/getUser";
import {getClient} from "@lib/client";
import {FindUsersArgs} from "../../../graphql/findUser";
import Image from "next/image";
import React from "react";


export default async function User({params,searchParams,}: {
    params: { login: string }
    searchParams: { [key: string]: string }
}) {

    const user = params.login;

    const {data} = await getClient().query<GetUserResponse, FindUsersArgs>({
        query: getUserQuery,
        variables: {
            name: user
        }
    })

    return (
        <>
            <div className="bg-gray-100 h-full h-screen">
                <div className="bg-blue-500 h-40"/>
                <div className="flex flex-col items-center mt-[-60px]">
                    <Image className="w-24 h-24 rounded-full border-4 border-white" src={data.getUser.avatar_url} alt="" width={200} height={200}/>
                    <h1 className="mt-4 text-2xl font-bold text-gray-700">{data.getUser.login}</h1>
                </div>
                <div className="flex justify-center align-center mt-10">
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-200"
                    >
                        Exportar
                    </button>
                </div>
            </div>

        </>
    )
}