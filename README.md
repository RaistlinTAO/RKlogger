# RKLogger
> RKLogger is a lightweight JavaScript library designed for efficient and visually appealing logging. It offers developers the ability to produce logs, utilizing distinct colors to represent different log levels for improved readability and comprehension.

### Usage
```shell
printFatal('This is a FATAL log output');
printError('This is a ERROR log output');
printWarning('This is an WARNING log output');
printDebug('This is a DEBUG log output');
printTrace('This is a TRACE log output');
printGeneral('This is a GENERAL log output');
printInfo('This is a INFO log output');
```

### Sample Output
![img.png](output.png)

### .env Support

In the .env file of the project, the following parameters can be configured to customize RKLogger, or no settings can be made at all. By default, RKLogger will operate in the UTC time zone, format timestamps using en-US, and print all DEBUG messages.
```dotenv
# CONSOLE OPTION
PRINT_DEBUG=true
PRINT_STACK_DETAIL=true
CONSOLE_LOCALE='en-GB'
CONSOLE_TIMEZONE='Australia/Melbourne'
```