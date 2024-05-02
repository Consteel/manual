---
sidebar_position: 5
---
# If statements

An if-else statement in programming is a conditional statement that runs a different set of statements depending on whether an expression is true or false.

In the expression, after the if command, the following operators can be used:

| Operator    | Meaning               |
| ----------- | --------------------- |
| **==**      | Equal                 |
| **!=**      | Unequal               |
| **&lt;**    | Less than             |
| **&lt;=**   | Less than or equal    |
| **>**       | Greater than          |
| **>=**      | Greater than or equal |

Descript supports **one-way **_(if-endif) \_and **two-way **_(if-else-endif) \_if selections.


## One-way if selection

**if** \[expression]  
statement  
**endif**

- if and endif is reserved word
- expression must evaluate to true or false
- statement1 executed if value of expression is true

**Example:**


```
if $Start_Analysis == 1

    ANALYSIS RUN
    Type Elastic
    LoadCombinations "NAME: Load Combination-1"
    FirstOrder

endif
```


## Two-way if selection


**if** \[expression]  
statement 1  
**else**  
statement 2  
**endif**


- if and endif is reserved word
- expression must evaluate to true or false
- statement 1 executed if value of expression is true
- statement 2 executed if value of expression is false


**Example:**


```
if $Buckling_Analysis == 1

    ANALYSIS RUN
    Type Elastic
    LoadCombinations "NAME: Load Combination-1"
    FirstOrder
    Buckling 10

else

    ANALYSIS RUN
    Type Elastic
    LoadCombinations "NAME: Load Combination-1"
    FirstOrder

endif
```
