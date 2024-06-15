# Introduce
In `Initial Version` I won't be really much strict about syntax, because it is just a base I will use to derive from and evolve to the new syntax.

# Variables
```box version="0.1"
// definition of variable starts with a keyword `let`
// `u32` means unsigned integer with 32 bits
// 0 is a integer value and we explicitly cast it to `u32` by using `u32` as suffix
let x: u32 = 0u32

// `mut` keyword means that variable can be changed
// also we are not required to specify that 10 is a u32 with a suffix, because it is an optional feature
let mut y: u32 = 10
y = 5

// we may not define variable but just declare it
let mut z: u32
z = 10

// but we cannot declare immutable variable because value cannot be set
let w: u32 = 10
```

# Data Types
+ u8 - uN (unsigned integer with N bits power of 2)
+ i8 - iN (signed integer with N bits power of 2)
+ f16 - fN (float with N bits power of 2)
+ bool - boolean

# Type
```box version="0.1"
// type definition starts with `type` keyword
// It is used to keep complex long type declaration in custom types
type MyType = u32
```

# Tuple
```box version="0.1"
// tuple is structured fixed collection of types
let pos: (u32, u32) = (0u32, 0u32)

// to retrieve values from tuple
// we use `.` and index
let posX: u32 = pos.0
let posY: u32 = pos.1
```

# Reference
```box version="0.1"
let x: u32 = 0u32

// reference is type of data that stores address of a given type
// we use `&` before the type to declare reference
// to get an address of variable we use `&` and variable name
let xRef: &u32 = &x

// to dereference a reference we put reference variable and then add keyword `as` and type we want to cast
// We declared type before but for dereference we need specify type again
let backX: u32 = xRef as u32
```

# Functions
```box version="0.1"
// function definition starts with `fn` keyword
// inside of () we declare arguments
// after arguments we declare return type
// inside of {} we define a function body
// `return` is keyword used to return a value from a function
fn sum(x: u32, y: u32): u32 {
    return x + y
}

// this is function writtern without body
// `=>` is a auto return for expression that must be after it
fn sum_inline(x: u32, y: u32): u32 => x + y

// return type is optional
fn nothing() {}

// this is a function writtern without body and return type
// `->` almost as `=>` but it not return anything, it just let's function run an expression
fn nothing_inline() -> 1 + 2

// we can declare function type like this
// because function is not a value we need to use `&`
let mut fnHolder: &fn(u32, u32): u32
```

# Lambda Functions
```box version="0.1"
// lambda function is function without name
// lambda function's arguments type are optional same as a return type because lambda can be only stored in defined variable by function reference or be passed into a function with argument which has declaration of a function
let sum: &fn(u32, u32): u32 = (x, y) => x + y

let summed_value: u32 = sum(1u32, 2u32)
```