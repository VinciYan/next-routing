import { notFound } from "next/navigation";

const jiangsu = ["320100", "320200", "320300", "320400", "320500", "320600","320700","320800","320900","321000","321100","321200","321300"];

export default function ProvinceDetail({ params } : { params : { provinceId : string; cityId : string}}) {
    if(params.provinceId === "32" && params.cityId == "320100") {
        return <h1>江苏省（{params.provinceId}）南京市（{params.cityId}）详情</h1>;
    }
    if(params.provinceId === "34" && params.cityId == "341200") {
        return <h1>安徽省（{params.provinceId}）阜阳市（{params.cityId}）详情</h1>;
    }
    if (params.provinceId === "32" && jiangsu.includes(params.cityId)) {
        return <h1>江苏省南京市有{params.cityId}</h1>;
      } else {
        notFound();
      }
    return <h1>江苏省南京市和安徽省阜阳市之外的详情</h1>;
}