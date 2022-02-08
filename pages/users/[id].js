import { useRouter } from "next/router"

export default function User() {
    const {query, back} = useRouter();

    return <div>
        <button onClick={back}>back</button>
        <pre>
            {JSON.stringify(query)}
        </pre>
    </div> 
}