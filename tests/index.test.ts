import {expect, test} from "vitest"

import {sayHello} from "~/src/hello"

test("says hello", () => {
    const message = sayHello()
    expect(message).toEqual("Hello, world!")
})
