interface User {
    name: string;
    email: string;
  }
  
  interface User {
    age: number;
  }
  
  const validUser: User = {
    name: "John Doe",
    email: "john@example.com",
    age: 30
  };
  
  type Employee = {
    name: string;
    employeeId: number;
  };
  
  type ID = string;
  type Age = number;
  type IsActive = boolean;
  
  type Status = 'pending' | 'approved' | 'rejected';
  
  function processApplication(status: Status) {
    switch (status) {
      case 'pending':
        return 'Application is being reviewed';
      case 'approved':
        return 'Application was approved';
      case 'rejected':
        return 'Application was rejected';
    }
  }
  
  type Person = {
    name: string;
    age: number;
  };
  
  type Worker = Person & {
    jobTitle: string;
    department: string;
  };
  
  const developer: Worker = {
    name: "Alice Smith",
    age: 28,
    jobTitle: "Senior Developer",
    department: "Engineering"
  };
  
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };
  
  type ReadonlyPerson = Readonly<Person>;
  
  const immutablePerson: ReadonlyPerson = {
    name: "Bob",
    age: 42
  };
  
  interface Vehicle {
    make: string;
    model: string;
    start(): void;
  }
  
  class Car implements Vehicle {
    constructor(
      public make: string,
      public model: string,
      private year: number
    ) {}
  
    start() {
      console.log(`Starting ${this.make} ${this.model}`);
    }
  }
  
  function processAnyValue(value: any) {
    value.toUpperCase();
    value.push(123);
    value();
    return value + 42;
  }
  
  function processUnknownValue(value: unknown) {
    if (typeof value === "string") {
      return value.toUpperCase();
    } else if (Array.isArray(value)) {
      return value.length;
    } else if (typeof value === "function") {
      return value();
    } else if (typeof value === "number") {
      return value + 42;
    }
  
    return "Unknown value type";
  }
  
  function throwError(message: string): never {
    throw new Error(message);
  }
  
  function infiniteLoop(): never {
    while (true) {
      console.log("This loop never ends");
    }
  }
  
  type Shape = 
    | { kind: "circle"; radius: number }
    | { kind: "square"; sideLength: number };
  
  function getArea(shape: Shape): number {
    switch (shape.kind) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.sideLength ** 2;
      default:
        const exhaustiveCheck: never = shape;
        return exhaustiveCheck;
    }
  }
  
  function safelyProcessValue(value: unknown): string {
    if (typeof value === "string") {
      return `Processed string: ${value.toUpperCase()}`;
    } else if (typeof value === "number") {
      return `Processed number: ${value.toFixed(2)}`;
    } else if (value === null || value === undefined) {
      return "No value provided";
    } else {
      return "Unsupported value type";
    }
  }
  
  interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  type UserResponse = ApiResponse<User>;
  type ErrorResponse = ApiResponse<null> & { errorCode: string };
  
  function handleResponse(response: UserResponse | ErrorResponse) {
    if (response.status >= 200 && response.status < 300) {
      const userResponse = response as UserResponse;
      console.log(`User ${userResponse.data.name} loaded successfully`);
    } else {
      const errorResponse = response as ErrorResponse;
      console.error(`Error: ${errorResponse.message} (${errorResponse.errorCode})`);
    }
  }
  
  function ensureAllCasesHandled(x: string | number) {
    if (typeof x === "string") {
      return x.length;
    } else if (typeof x === "number") {
      return x.toFixed(2);
    } else {
      const exhaustiveCheck: never = x;
      return exhaustiveCheck;
    }
  }
  