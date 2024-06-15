# Syntax
As I told I want strict rules about keywords to make it easy to find patterns and understand what they do without spending much time. My experience with `C++` templates makes me really much want to make keywords in my language consistent and predictable.

As all document is not really about actual syntax, I will provide a lot of pseudo code or possibly box syntax I see it in time I write it.

Let's for example I want iterators in my language looks like in `Lua` where you do something like:  `for x in y {...}`  
I need to give a keyword `in` and `for` some strict rules and what they mean, because if I'd say that you can do something like this `x = in {...}` this would be really hard to understand what that mean, welp the example is actully really weird to me, because it makes no sense. Of course I might say, it takes all inside of `{...}` and turns it into iterator but what the `{...}` then means, if that is scope of code then how it's turns into iterator.