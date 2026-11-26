// Record<K, V> is a built-in TypeScript utility type for object lookups.
// K describes the property keys. V describes the value stored at each key.
// Property keys can be strings, numbers, or symbols. At runtime, the value
// is an ordinary JavaScript object. The Record type is erased when compiled.
// Reference: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type

// A complete lookup with a fixed set of keys

type SignalColor = "red" | "yellow" | "green";
type SignalTimings = Record<SignalColor, number>;
// Equivalent to { red: number; yellow: number; green: number }.
// Conceptually, Record is a mapped type: { [Key in K]: V }.

const indiaTimings: SignalTimings = {
    red: 120,
    yellow: 10,
    green: 300,
};

function getDuration(timings: SignalTimings, color: SignalColor): number {
    return timings[color];
}

console.log("India red signal", getDuration(indiaTimings, "red")); // 120

// Try each line to see what TypeScript checks:
// const incomplete: SignalTimings = { red: 120, green: 300 }; // yellow is required
// const wrongValue: SignalTimings = { red: "120", yellow: 10, green: 300 }; // red must be a number
// const extraKey: SignalTimings = { red: 120, yellow: 10, green: 300, blue: 5 }; // extra key in an object literal
// getDuration(indiaTimings, "blue"); // blue is outside the SignalColor union
// Extra property checks apply to object literals. An existing variable with
// all required properties can still be assignable even if it has extra keys.

// A lookup where some known keys can be absent

const timingOverrides: Partial<SignalTimings> = { yellow: 15 };
// Partial makes the properties optional. Record<SignalColor, number | undefined>
// would still require all three keys and allow undefined as one of their values.

function getEffectiveDuration(color: SignalColor): number {
    // A read from Partial can return undefined. The base timings fill the gap.
    // ?? uses the fallback for null or undefined and preserves a value of 0.
    return timingOverrides[color] ?? indiaTimings[color];
}

console.log("Overridden yellow signal", getEffectiveDuration("yellow")); // 15
console.log("Original green signal", getEffectiveDuration("green")); // 300

// A dictionary with keys known only at runtime

// Record<string, number> permits string keys but cannot guarantee an entry
// exists for a particular string. Without noUncheckedIndexedAccess, a lookup
// can be typed as number even when it returns undefined at runtime.
// Include undefined explicitly when missing entries are expected.
const requestCounts: Record<string, number | undefined> = { health: 3 };

function getRequestCount(route: string): number {
    return Object.hasOwn(requestCounts, route) ? (requestCounts[route] ?? 0) : 0;
}

console.log("Health requests", getRequestCount("health")); // 3
console.log("Missing route requests", getRequestCount("metrics")); // 0

// Nested records for test data

type Country = "India" | "Australia";
type ExpectedTimings = Record<Country, Readonly<SignalTimings>>;
// Readonly here prevents writes to each country's red, yellow, and green values
// through the ExpectedTimings type.

// Both the country and the signal color are checked. These are demo values
// from AbstractConcepts.ts and can serve as expected values in a test.
// satisfies checks the required shape while preserving the inferred type.
// as const keeps the literal values and makes the fixture readonly in TypeScript.
// JavaScript still treats this as an ordinary object. as const does not freeze it.
const expectedTimings = {
    India: { red: 120, yellow: 10, green: 300 },
    Australia: { red: 20, yellow: 10, green: 50 },
} as const satisfies ExpectedTimings;

function expectedDuration(country: Country, color: SignalColor): number {
    return expectedTimings[country][color];
}

console.log("Expected Australia green signal", expectedDuration("Australia", "green")); // 50

// Use a property-by-property object type when each key has a different type,
// such as { color: SignalColor; duration: number }. Use a Map when you need
// object identities as keys or runtime methods such as get(), set(), and has().

export {};
