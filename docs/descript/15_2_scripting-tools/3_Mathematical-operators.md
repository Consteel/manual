---
sidebar_position: 3
---
# Mathematical operators

Mathematical operators can be used with numerical values and variables. They can also be used inside of command parameters.

The following mathematical operations are implemented in Descript:


| **Operator** | **Name**            | **Syntax example** | **Description**                    |
| ------------ | ------------------- | ------------------ | ---------------------------------- |
| **+**        | Summation           | 1+2                | Adds numbers                       |
| **-**        | Subtraction         | 3-2                | Subtracts numbers                  |
| **\***       | Multiplication      | 4\*2               | Multiplies numbers                 |
| **/**        | Division            | 1/2                | Divides numbers                    |
| **%**        | Modulo              | 11%3               | Gives back remainder               |
| **^**        | Exponent            | 2^3                | Gives back exponent                |
| **sin**      | Sine                | sin(30)            | Gives back sine of degree input    |
| **cos**      | Cosine              | cos(30)            | Gives back cosine of degree input  |
| **tan**      | Tangent             | tan(30)            | Gives back tangent of degree input |
| **log**      | Logarithm (base 10) | log(100)           | Gives back base 10 logarithm       |
| **round**    | Rounding            | round(1.23)        | Rounds a number                    |
| **floor**    | Rounding down       | floor(1.23)        | Rounds down                        |
| **ceil**     | Rounding up         | ceil(1.23)         | Rounds up                          |
| **nint**     | Nearest integer     | nint(1.23)         | Gives back nearest integer         |
| **sqrt**     | Square root         | sqrt(2)            | Gives back square root             |
| **min**      | Minimum             | min(1;2)           | Minimum of 2 numbers               |
| **max**      | Maximum             | max(1;2)           | Maximum of 2 numbers               |
| **abs**      | Absolute value      | abs(-123)          | Gives back absolute value          |

**Examples**

```
$sum=1+2            // = 3
$sub=3-2            // = 1
$mult=4*2           // = 8
$div=1/2            // = 0.5
$mod=11%3           // = 2
$exp=2^3            // = 8
$sin=sin(30)        // = 0.5
$cos=cos(30)        // = 0.866025
$tan=tan(30)        // = 0.57735
$log=log(100)       // = 2
$round=round(1.23)  // = 1
$floor=floor(1.23)  // = 1
$ceil=ceil(1.23)    // = 2
$nint=nint(1.23)    // = 1
$sqrt=sqrt(2)       // = 1.414214
$min=min(1;2)       // = 1
$max=max(1;2)       // = 2
$abs=abs(-123)      // = 123
```