import Navigation from "./Navigation";

export default function Id({repositoriesInformation}) {
    return (
        <>
            <Navigation/>
            <div>
                {repositoriesInformation.map(item=>{
                    return(
                        <>
                        <div>{item.name} by {item.owner}</div>
                        <div>{item.description}</div>
                            <a href={item.html_url}>url</a>
                    <div>{item.created_at}</div>
                    <div>{item.stargazers_count}</div>
                        </>
                    )
                })}
            </div>
        </>
    )
}