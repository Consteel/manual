# CONCAT

Assigns a new value to a variable by combining 2 values

```php
$ID_Prefix=Section_ID_
$Name_Prefix=Flat_Shape_
for $i 1...5
    
    CONCAT $ID_Prefix $i Act_Sec_ID
    CONCAT $Name_Prefix $i Act_Sec_Name
    LOAD_SECTION_MACRO $Act_Sec_ID "HR-FS" $Act_Sec_Name "S 235 EN 10025-2" 300 $i*10
    
end
```