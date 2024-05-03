---
sidebar_position: 6
---
# If statements

While coding, we often want certain pieces of code to be executed only if some condition is true. Like "if the moment load bearing capacity is exceeded for this member, then increase the cross-section height". In this example, the "moment load bearing capacity is exceeded" is the condition, and the "increase the cross-section height" is the conditionally executed statement.

For this purpose, the if statement is implemented in Descript.

## Syntax

**if** \[Condition]  
&nbsp; &nbsp; &nbsp; &nbsp; // Place for the conditionally executed code  
**endif**

### Syntax explanation

Any code that is put between the _if_ and the _endif_ keywords constitutes the body of the is statement and will be executed only if the condition evaluates to true.

This is the syntax for the so-called one-way if statement, where if the condition evaluates to true, the code in if statement will be executed, otherwise nothing happens.

## If-else statement

We can also expand the if statement with an "else" branch. If we do this, we will get a two-way if statement, where we can have different pieces of code executing, if the condition evaluates to true, or false.

### If-else syntax

**if** \[Condition]  
&nbsp; &nbsp; &nbsp; &nbsp; // Code executed if condition is true  
**else**  
&nbsp; &nbsp; &nbsp; &nbsp; // Code executed if condition is false  
**endif**

## Condition

In Descript, the condition of the if statement is always a comparison of two values with an operator between them.

In the condition expression after the if command, between the two compared values the following operators can be used:

| Operator    | Meaning               |
| ----------- | --------------------- |
| **==**      | Equal                 |
| **!=**      | Unequal               |
| **&lt;**    | Less than             |
| **&lt;=**   | Less than or equal    |
| **>**       | Greater than          |
| **>=**      | Greater than or equal |

## Sample code

**If statement:** (Simplest form, one-way if statement)

```
if $n > 1
    // Conditionally executed code
endif
```

**If-else statement:** (two-way if statement)

```
if $n > 1
    // Code if condition evaluates to true
else
    // Code if condition evaluates to false
endif
```

**Example 1:** 

```
if $Start_Analysis == 1

    ANALYSIS RUN
    Type Elastic
    LoadCombinations "NAME: Load Combination-1"
    FirstOrder

endif
```
In this example, if the _\$Start_Analysis_ variable is equal to 1, then an ANALYSIS RUN command will be executed, otherwise nothing happens.

**Example 2:**

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
In this example, if the _\$Buckling_Analysis_ variable is equal to 1, then an ANALYSIS RUN command will be executed with a buckling analysis, otherwise an ANALYSIS RUN command will be executed with only a first order analysis and no buckling analysis.
