import { useParams } from "react-router";

function DetailPage() {
    const {id} = useParams()
    return (
        <>
        <h2>This is the detail page of post {id} </h2>
        </>
    )
}

export default DetailPage;