{
    // <----------------------------->

    function getProperty<T, K extends keyof T>(object: T, property: K): T[K] {
        return object[property];
    }

    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    // <----------------------------->

}