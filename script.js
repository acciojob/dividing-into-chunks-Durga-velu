const divide = (arr, n) => {
  // Write your code here
  let ans=[];
	
for(let i=0;i<arr.length;i++){
	let res=arr[i];
	let result=[];
		if(res<=n){
            result.push(res);
		
	for(var j=i+1;j<arr.length;j++){
		res=res+arr[j]
		if(res<=n){
			result.push(arr[j]);
            i=j;
		}
		        
			}
            
           
		}
        ans.push(result)
	
}
	
return ans

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
