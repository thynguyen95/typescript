let title = 'cybersoft';

{
    let title = "abc";
}

let fullName = 'Thy'
console.log(`Họ tên: ${fullName} - ${title}`);

let largeNumber = 1_000_000_000

/* --------------------------------------------- */
/* type
    js: khi khai báo giá trị, tự có kiểu 
    + primitive type: number, string, boolean, null, undefined
    + non primitive(reference type): object, type(tự tạo)
*/
let score: number = 1;
let phone: string = '0802929';
let valid: boolean = true;
// nhận kết quả 
// |: union type 
let resApi: null | string = null;
let resApi2: undefined | string = undefined

// cách khai báo arr 
let array = []; // bản chất của array là object
console.log('array: ', typeof(array));

let arrScore: number[] = [1,2,3,4]
let arrStr: string[]= ['1','2','']
let arrDependence: Array<boolean> = [true, false, false]

// type tự tạo  
type ResponseApi = null | string | number;
let res3: ResponseApi = 'string'

// ES6 
// class Product {
//     id: string = '';
//     name: string = "";
//     price: number = 0;
// }

// let prod: Product =  new Product();
// let prod1: Product = {id: '1', name:'iphone', price: 1000}
// console.log('prod: ', prod);

// TS 
// type: dùng để format object và verify object có đầy đủ thuộc tính không 
type Product =  {
    id: string;
    name: string ;
    price: number;
    desc?: string; //optional property: có thể null 
}
let prod1: Product = {id: '1', name:'iphone', price: 1000}
let prod2: Product = {id: '1', name:'iphone', price: 1000, desc: 'lorem'}
console.log('prod: ', prod1);

// interface : dùng để format dữ liệu của object
// không báo lỗi khi khai báo 2 interface trùng tên mà sẽ gộp 2 cái cái interface cùng tên lại thành 1 interface lớn 
interface Student {
    id: string | number,
    fullName: string,
    email: string,
    phone: string
}

let student1: Student = {id:1, fullName: 'abc', email:'abc@gmail.com', phone: '09676786'}

// cần mở rộng interface 
interface StudentEx extends Student {
    address: string
}

let student2: StudentEx = {id:1, fullName: 'abc', email:'abc@gmail.com', phone: '09676786', address: '1'}

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
    #img: string 

    renderProduct() {
        console.log(this.#img);   
    }
}

let prod5 = new ProductType();
// prod5.img //ko truy xuất được cho img là thuộc tính private 

class NhanVien {
    public maNhanVien: string | number = '';
    public hoTen: string = '';
    public email: string = '';
    private chiTieu: number = 1000;
    protected bonus:number = 1000;

    randomId() {
        this.maNhanVien = Math.floor(Math.random()*1000)
    }

    private tinhLuongThuong() {
        return this.chiTieu + 1000;
    }

    public xuatThongTin() {
        console.log(this.tinhLuongThuong());
        
    }
}

class KeToan extends NhanVien {
    private tinhLuongKeToan() {
        return
    }

    public xuatThongTin(): void {
        console.log(this.tinhLuongKeToan());
    }
}

let nv: NhanVien = new NhanVien();
nv.randomId();
console.log('nv', nv);

let kt:KeToan = new KeToan();

interface Control {
    id: string,
    className: string,
    onclick: (e) => void
}

class Button implements Control {
    id: string;
    className: string;
    onclick: (e: any) => {
        // xử lý click 
    };
}

// class ButtonGradient extends Button {

// }

class Panel implements Control{
    id: string;
    className: string;
    onclick: (e: any) => {
        // xử lý click 
    };
}

let divA: Control = {
    id: "",
    className: "",
    onclick: (e: any) => {
        // xử lý click 
    }
}

// function type
/*
    kiểu dữ liệu trả về của hàm 
    (input1, input2) : responseType => {
        return response
    }
*/
// let tinhTong = (a:number, b: number): number => {
//     return a + b;
// }

type CallBackType = (input: string) => void;

let renderContent = (callback:CallBackType, content:string) => {
    callback(content);
    // document.querySelector('#content').innerHTML = `
    // <h1>Chào mừng các bạn đến với cybersoft: ${content}</h1>
    // `
}

let renderCard = (noiDung: string) => {
     document.querySelector('#content').innerHTML = `
    <h1>Chào mừng các bạn đến với cybersoft: ${noiDung}</h1>
    `
}

renderContent(renderCard, 'BC77')

// return Type 
let tinhTong = (a:number, b: number): number => {
    return a + b;
}

type ResponseTypeTinhTong = ReturnType<typeof tinhTong>;

const dispatchFunction = (dispatch) => {
    return (dispatch : any): (input: string) => number => {
        return (abc:string):number => {
            return 1;
        }
    }
}
type typeFunction = ReturnType<typeof dispatchFunction>

/*
    project sàn tmđt
    + quản lý user(id, email, pass, fullName) - CRUD + method feature + ....
    + product model(id, email, pass, fullName) - CRUD + method feature + ....
*/

class User {
    id: string | number = '';
    email: string = '';
    name: string = '';
    password: string = '';

    create() {}

    update() {}

    delete() {}

    find() {}
}

class ProductModel {
    id: string | number = '';
    email: string = '';
    name: string = '';
    password: string = '';

    create() {}

    update() {}

    delete() {}

    find() {}
}

class ListModel<Type> {
    listModel: Type[] = [];

    create(newModel: Type) {
        this.listModel.push(newModel)
    }

    findModelByName(keyword: string): Type[] {
        return this.listModel.filter((model:any) => model.name.search(keyword) !== -1)
    }
}

let listUser:ListModel<User> =  new ListModel<User>();
// listUser.findModelByName()

let listProduct:ListModel<ProductModel> =  new ListModel<ProductModel>();
// listProduct.findModelByName()

// any, unknown: nhận tất cả các giá trị mang kiểu dữ liệu khác nhau 
// any: rủi ro khi kiểu dữ liệu ko xử lý được logic 
let res: any = 1;
res++;
console.log('res', res);

let res5: unknown = 1;
// Kiểm tra type trước khi thực hiện operation(toán tử hoặc lệnh gọi hàm)
if(typeof res5 === 'number') {
    res5++;
}

class ProductModelType {
    id: string | number = '';
    email: string = '';
    name: string = '';
    password: string = '';

    showInfo(): void {
        console.log('info');
        
    }

    // showInfo = ():void => {
    //     console.log('info')
    // }
}

let model: unknown = new ProductModelType();
if(model instanceof ProductModelType) {
    model.showInfo()
}