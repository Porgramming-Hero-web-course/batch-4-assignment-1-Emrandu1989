"use strict";
{
    // <----------------------------->
    function getProperty(object, property) {
        return object[property];
    }
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
    // <----------------------------->
}
