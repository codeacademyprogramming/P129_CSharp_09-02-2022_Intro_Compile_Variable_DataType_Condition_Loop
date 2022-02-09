let arr1 = [4,5,7,15,21];
let arr2 = [9,36,4,53,21,5];
let check = true;
console.log("Hello")

for (let i = 0; i < arr1.length; i++) 
{
    check = true;

    for (let j = 0; j < arr2.length; j++) 
    {
        if (arr1[i] == arr2[j]) 
        {
            check = false;
            break;
        }
    }

    if (check) 
    {
        console.log(arr1[i])
    }
}