import Link from "next/link"
import {useEffect} from 'react'
import {useRouter} from "next/router"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h2>Sorry, Please Back to Top</h2>
            <p>Go Back To <Link href="/"><a>Home</a></Link></p>
        </div>
    )
}

export default NotFound
