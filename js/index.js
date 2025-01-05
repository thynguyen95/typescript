var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ProductType_img;
let title = 'cybersoft';
{
    let title = "abc";
}
let fullName = 'Thy';
console.log(`Họ tên: ${fullName} - ${title}`);
let largeNumber = 1000000000;
/* --------------------------------------------- */
/* type
    js: khi khai báo giá trị, tự có kiểu
    + primitive type: number, string, boolean, null, undefined
    + non primitive(reference type): object, type(tự tạo)
*/
let score = 1;
let phone = '0802929';
let valid = true;
// nhận kết quả 
// |: union type 
let resApi = null;
let resApi2 = undefined;
// cách khai báo arr 
let array = []; // bản chất của array là object
console.log('array: ', typeof (array));
let arrScore = [1, 2, 3, 4];
let arrStr = ['1', '2', ''];
let arrDependence = [true, false, false];
let res3 = 'string';
let prod1 = { id: '1', name: 'iphone', price: 1000 };
let prod2 = { id: '1', name: 'iphone', price: 1000, desc: 'lorem' };
console.log('prod: ', prod1);
let student1 = { id: 1, fullName: 'abc', email: 'abc@gmail.com', phone: '09676786' };
let student2 = { id: 1, fullName: 'abc', email: 'abc@gmail.com', phone: '09676786', address: '1' };
/*
    OOP: có 4 tính chất
    + tính trừu tượng: lược bỏ các thuộc tính không cần thiết chỉ tập trung vào các thuộc tính cần lưu trữ của dối tượng vào hệ thống
    + tính đóng gói: các thuộc tính và phương thức của đối tượng thì chỉ có đối tương đó được truy xuất.
        Tuy nhiên đối với ts sẽ hỗ trợ tính năng access modifier
        - public : đối tượng và lớp con kế thừa có thể truy xuất giá trị hoặc sử dụng giá trị được
        - private:  đối tượng và lớp con kế thừa không thể truy xuất giá trị hoặc sử dụng giá trị được
        - protected: class kế thừa có thể truy xuất được thuộc tính protected của class cha tuy nhiên đối tượng tạo ra từ class cha hoặc con ko thể thay đổi giá trị thuộc tính đó.

    + tính kế thừa: class con được phép kế thừa các thuộc tính và phương thức từ lớp cha (public, protected)
    + tính đa hình: js ko có
        ts hỗ trợ = interface
        object hoặc class khi implements từ interface thì bắt buộc phải tuân thủ format của interface. Đối với class có thể implements từ nhiều interface
*/
class ProductType {
    constructor() {
        _ProductType_img.set(this, void 0);
    }
    renderProduct() {
        console.log(__classPrivateFieldGet(this, _ProductType_img, "f"));
    }
}
_ProductType_img = new WeakMap();
let prod5 = new ProductType();
// prod5.img //ko truy xuất được cho img là thuộc tính private 
class NhanVien {
    constructor() {
        this.maNhanVien = '';
        this.hoTen = '';
        this.email = '';
        this.chiTieu = 1000;
        this.bonus = 1000;
    }
    randomId() {
        this.maNhanVien = Math.floor(Math.random() * 1000);
    }
    tinhLuongThuong() {
        return this.chiTieu + 1000;
    }
    xuatThongTin() {
        console.log(this.tinhLuongThuong());
    }
}
class KeToan extends NhanVien {
    tinhLuongKeToan() {
        return;
    }
    xuatThongTin() {
        console.log(this.tinhLuongKeToan());
    }
}
let nv = new NhanVien();
nv.randomId();
console.log('nv', nv);
let kt = new KeToan();
class Button {
}
// class ButtonGradient extends Button {
// }
class Panel {
}
let divA = {
    id: "",
    className: "",
    onclick: (e) => {
        // xử lý click 
    }
};
let renderContent = (callback, content) => {
    callback(content);
    // document.querySelector('#content').innerHTML = `
    // <h1>Chào mừng các bạn đến với cybersoft: ${content}</h1>
    // `
};
let renderCard = (noiDung) => {
    document.querySelector('#content').innerHTML = `
    <h1>Chào mừng các bạn đến với cybersoft: ${noiDung}</h1>
    `;
};
renderContent(renderCard, 'BC77');
// return Type 
let tinhTong = (a, b) => {
    return a + b;
};
const dispatchFunction = (dispatch) => {
    return (dispatch) => {
        return (abc) => {
            return 1;
        };
    };
};
/*
    project sàn tmđt
    + quản lý user(id, email, pass, fullName) - CRUD + method feature + ....
    + product model(id, email, pass, fullName) - CRUD + method feature + ....
*/
class User {
    constructor() {
        this.id = '';
        this.email = '';
        this.name = '';
        this.password = '';
    }
    create() { }
    update() { }
    delete() { }
    find() { }
}
class ProductModel {
    constructor() {
        this.id = '';
        this.email = '';
        this.name = '';
        this.password = '';
    }
    create() { }
    update() { }
    delete() { }
    find() { }
}
class ListModel {
    constructor() {
        this.listModel = [];
    }
    create(newModel) {
        this.listModel.push(newModel);
    }
    findModelByName(keyword) {
        return this.listModel.filter((model) => model.name.search(keyword) !== -1);
    }
}
let listUser = new ListModel();
// listUser.findModelByName()
let listProduct = new ListModel();
// listProduct.findModelByName()
// any, unknown: nhận tất cả các giá trị mang kiểu dữ liệu khác nhau 
// any: rủi ro khi kiểu dữ liệu ko xử lý được logic 
let res = 1;
res++;
console.log('res', res);
let res5 = 1;
// Kiểm tra type trước khi thực hiện operation(toán tử hoặc lệnh gọi hàm)
if (typeof res5 === 'number') {
    res5++;
}
class ProductModelType {
    constructor() {
        this.id = '';
        this.email = '';
        this.name = '';
        this.password = '';
        // showInfo = ():void => {
        //     console.log('info')
        // }
    }
    showInfo() {
        console.log('info');
    }
}
let model = new ProductModelType();
if (model instanceof ProductModelType) {
    model.showInfo();
}
