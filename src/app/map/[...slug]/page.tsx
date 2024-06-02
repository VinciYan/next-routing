export default function Car({
    params,
}:{
    params: {
        slug:string[];
    };
}) {
    if(params.slug.length === 2 && params.slug[0] === "320000" && params.slug[1] === "320100") {
        return (
            <h1>
                你正在查看江苏省（{params.slug[0]}）南京市（{params.slug[1]}）的地图
            </h1>  
        );      
    }
    if(params.slug.length === 2 && params.slug[0] === "320000" && params.slug[1] === "320200") {
        return (
            <h1>
                你正在查看江苏省（{params.slug[0]}）无锡市（{params.slug[1]}）的地图
            </h1>  
        );      
    }
    if(params.slug.length === 3 && params.slug[0] === "320000" && params.slug[1] === "320200" && params.slug[2] === "320282") {
        return (
            <h1>
                你正在查看江苏省（{params.slug[0]}）无锡市（{params.slug[1]}）宜兴市（{params.slug[2]}）的地图
            </h1>  
        );      
    }
}