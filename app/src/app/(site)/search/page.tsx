import Image from 'next/image';
import { getClient } from "@lib/client";
import {SectionSearch} from "../../sections/search";
import {FindUsersArgs, FindUsersResponse, findUsersQuery} from "../../graphql/findUser";
import Link from "next/link";
import {Chart} from "@components/molecules";

export default async function Search({params,searchParams,}: {
    params: { slug: string }
    searchParams: { [key: string]: string }
}) {

    const q: string = searchParams.q || '';

    const { data } = await getClient().query<FindUsersResponse, FindUsersArgs>({
        query: findUsersQuery,
        variables: {
            name: q,
        },
    });

    return (
        <>
            <div className="flex flex-row">
                <Image className="items-center ml-3" src="/logo.png" width="150" height="50" alt="Logo"/>
                <div className="w-1/2 ml-5">
                    <SectionSearch />
                </div>
            </div>
            <hr className="my-3"/>
            <div className="mx-10">
                {data.findUsers.length > 0 && (
                    <div className="my-10">
                        <h1 className="text-2xl font-bold mb-4">Resultados de la búsqueda</h1>
                        {data.findUsers.map((user, i) => (
                            <Link className="flex flex-row hover:bg-blue-50 py-2 px-2" href={`/user/${user.login}`} key={i}>
                                <Image className="rounded-lg" src={user.avatar_url} alt="" width={50} height={50} />
                                <div className="ml-2">
                                    <p>ID: {user.id}</p>
                                    <p>Login: {user.login} Seguidores: {user.followers_count}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Chart labels={data.findUsers.map(user => user.login)} data={data.findUsers.map(user => user.followers_count)} />
        </>
    )
}