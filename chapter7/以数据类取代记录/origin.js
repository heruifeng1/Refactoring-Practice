// 将数据 以类的实例替代
// 创建好类,需要根据根据所有的访问点的读取数据和更新数据的位置,来写 get 和 set
// 其实这里重构的关键点是不要出错. 即 {name: "Acme Gooseberries", country: "GB"} 变成一个类的实例

// 将一个数据字段 转换为 organization.name = "Acme Gooseberries" organization.country = 'GB'

// 那么在其声明的后一行 无论你是做 console.log()还是写单元测试,只要保证读写能生效就好
const organization = {name: "Acme Gooseberries", country: "GB"};
let result = '1';
result += `<h1>${organization.name}</h1>`;
organization.name = 'newName';

export const result1 = result;
export const organization1 = organization;

