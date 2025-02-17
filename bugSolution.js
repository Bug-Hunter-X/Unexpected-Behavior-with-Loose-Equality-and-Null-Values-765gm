function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values explicitly
  }

  // ... rest of the function.  Now safe to perform operations assuming a and b are not null
  return a + b; // Example operation
}

// Example usage
console.log(foo(10, 20)); // Output: 30
console.log(foo(null, 20)); // Output: null
console.log(foo(10, null)); // Output: null