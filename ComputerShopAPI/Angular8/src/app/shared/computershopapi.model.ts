export class Product {
    public ProductId : number;
    public ProductName : string;
    public Image : string;
    public Price : number;
    public Descriptions : string;
    public SubCategoryId : number;
}

export class Customer {
    public CusId : number;
    public Account : string;
    public Password : string;
    public CusName : string;
    public BirthDay : Date;
    public Gender : boolean;
    public PersonalId : number;
    public Address : string;
    public PhoneNumber : string;
    public Email : string;
    public CusType : boolean;
}