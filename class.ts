function messageApp(message: string) {
    return message;
}

console.time("timer");

console.log(messageApp("Hello, what's up man?"));

console.timeEnd("timer");