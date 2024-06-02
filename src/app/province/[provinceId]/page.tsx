export default function ProvinceDetail({ params } : { params : { provinceId : string}}) {
    if(params.provinceId === "32") {
        return <h1>江苏省（{params.provinceId}）详情</h1>;
    }
    if(params.provinceId === "34") {
        return <h1>安徽省（{params.provinceId}）详情</h1>;
    }
    return <h1>江苏省和安徽省之外的详情</h1>;
}