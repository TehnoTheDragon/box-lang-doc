# Syntax
As I told I want strict rules about keywords to make it easy to find patterns and understand what they do without spending much time. My experience with `C++` templates makes me really much want to make keywords in my language consistent and predictable.

As all document is not really about actual syntax, I will provide a lot of pseudo code or possibly box syntax I see it in time I write it.

Let's for example I want iterators in my language looks like in `Lua` where you do something like:  `for x in y {...}`  
I need to give a keyword `in` and `for` some strict rules and what they mean, because if I'd say that you can do something like this `x = in {...}` this would be really hard to understand what that mean, welp the example is actully really weird to me, because it makes no sense. Of course I might say, it takes all inside of `{...}` and turns it into iterator but what the `{...}` then means, if that is scope of code then how it's turns into iterator.

# Keyword Overloading
I don't want create box like poem language, because it will break all philosophy of the language. I want to make it easy to understand what keywords do not trying make a poem with a lot of keywords. Box will still be similar to other languages, like C++, C, Rust and etc.  
I don't want function definition looks like
```
Oh please box compiler, create me a function with name 'foo' and argument 'bar' which has type of string and then create a body with return 'bar' which is concatenated with global 'foo'
```
or something more realistic, because previous is radically different from what it actually might be.
```
define function foo(bar: string): string {
    return bar + global::foo
}
```
that's not really bad, but still has too many keywords in it, and it may be hard to understand when there is a lot of code.  
Here is what it may looks without keywords overloading:
```
fn foo(bar: string) string {
    return bar + global::foo
}
```
This is much more better that all previous. But it still can be better and more readable. Of course I did not provide more context so there might be a question what is `global::foo` and why do we add strings together, because we add numbers but we concatenate strings.

# Complexity
I will provide a pseudo code here with a lot of keywords and will try make it more readable and clear.  
And for each iteration of changes I will describe what I thought about it, and why I think it is right way to me to do it.
```
define function foo(bar: type<string>, baz: type<string>): string {
    if bar.length > baz.length {
        return bar
    } else {
        return baz
    }
}
```
Well, it's a quite complex code, let's I describe what each line here is does.
+ `define function bar(bar: type<string>, baz: type<string>): string`
    + `define` is keyword which means that next keyword is a type of what we want to define, in our case this is a `function`
    + `function` is a keyword which takes a name of a function and then it's arguments and then it's body
    + `bar: type<string>`
        + `bar` is just a name of a variable
        + `:` is a separator
        + `type` is a special keyword which have a lot of meanings, in this case it cast type to some magic that make out `bar` accept only string
        + `string` some type, probably a string X3
    + `...): string` it is a return type of function
+ `if bar.length > baz.length`
    + `if` is keyword to make conditional decisions
    + `bar.length > baz.length` is a condition, where it's checks a length of string of `bar` and `baz`
    + `return` is keyword which returns a value and then ends the function

I see here too much keywords, and thing like: `define function` makes some sense, but it could be much more tinyier and more readable. What if try do `function bar(...`, this will still have mean of what we trying to do, of course we don't have a keyword `define` anymore but it's now takes less space and also keep means of what we trying to do.  
`type<string>` and then `...): string`, why do we need wrap `string` into some `type<...>` to tell what type of argument we want. If we keep it like it is, why do not specify this when specify a return type?  
Here is what we may change in the next iteration:
```
function foo(bar: string, baz: string): string {
    if bar.length > baz.length {
        return bar
    } else {
        return baz
    }
}
```
I don't tell that this is good code, I could write better, but to tell about complexity of a syntax I need write code very simple.  
This code is looks good to me, it is actually really not bad, we might tune some keywords a little bit.  

I'd really liked to remove `:` at the return but it would break a rule of consistency. so we keep it. or we could change the order from `identity : type` to `type identity`.  

I could shrink `function` to `func` or `fun` or `fn` or `f` but than less word looks as a word than it worse.  
I'd really like to make it like `fn` in `Rust`, because we actually don't invent fully English programming language, we may change length of the word, we may modify it and shrink, we just have to keep it's meaning and make it easy to understand.

(_Hmm, I need to think about changing words, it's tough topic_).  

Now our code might looks like this:
```
fn foo(string bar, string baz) string {
    if bar.length > baz.length {
        return bar
    } else {
        return baz
    }
}
```
I think it's final iteration for this topic of complexity.

# Naming
Naming is tough topic, because we should keep our words as they are but not let keywords to be too much long. As I don't yet have any rules about naming, I can think about create one.

Does it reall much actually matter if we name `fn` to mean mean function instead write `function`?

I think It might be hard to new developers to use such keyword, but I need make my language then specifically for one audience, I mean advanced developers.

I also think that is not really big problem for new developers use something like `fn` instead of `function`, I think it all hard for them, because they are new in programming.

So I will not use `function` just because there few or a lot of people who are new to the box or programming at all. I think it is a not a big deal.

I will still think about the rule of naming, but for now let's pretend that we have a soft rule about naming.

The box language's keywords can be shorter than an actual English word. But It should be readable and have some link/reference to it's original word.  
As there not really much keywords must be in the language, there not much to change.
`function` to `fn` probably this is all. Maybe when I will document new version of syntax of box language I will add some keyword that will be shorter
