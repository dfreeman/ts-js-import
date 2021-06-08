import Foo from './foo';

type Foo = InstanceType<typeof Foo>;

const foo: Foo = new Foo();

console.log(foo.message);
