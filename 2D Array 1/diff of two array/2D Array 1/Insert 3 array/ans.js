const intersectThree = (arr1 , arr2 , arr3 ) => {
   let curr1 = 0;
   let curr2 = 0;
   let curr3 = 0;
   const res = [];
   while((curr1 < arr1.length) && (curr2 < arr2.length) && (curr3 < arr3.length)){
      if((arr1[curr1] === arr2[curr2]) && (arr2[curr2] === arr3[curr3])){
         res.push(arr1[curr1]);
         curr1++;
         curr2++;
         curr3++;
      }
      const max = Math.max(arr1[curr1], arr2[curr2], arr3[curr3]);
      if(arr1[curr1] < max){
         curr1++;
      };
      if(arr2[curr2] < max){
         curr2++;
      };
      if(arr3[curr3] < max){
         curr3++;
      };
   };
   return res;
};